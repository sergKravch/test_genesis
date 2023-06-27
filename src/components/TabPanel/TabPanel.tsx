import { useState } from "react";
import CustomSelect from "../Select/CustomSelect";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputAdornment from '@mui/material/InputAdornment';
import imageBank from "../../assets/images/icon-bank.svg";

type TabPanelProps = {
  children?: React.ReactNode;
  index: number;
  value: number;
}

type BasicTabsProps = {
  dataForSelect1: {
    label: string;
    id: string;
  }[],
  dataForSelect2: {
    label: string;
    id: string;
  }[]
};

const TabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      className="tab-panel"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 0 }}>{children}</Box>}
    </div>
  );
};

const a11yProps = (index: number) => {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
};

const BasicTabs = ({ dataForSelect1, dataForSelect2 }: BasicTabsProps) => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs value={value} onChange={handleChange}>
          <Tab label="IBAN" iconPosition="start" {...a11yProps(0)} />
          {/* <Tab icon={<PhoneMissedIcon />}  label="RECENTS" iconPosition="start" {...a11yProps(0)} /> */}
          <Tab label="Account number" iconPosition="start" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <div className="flex-between flex-wrap g-2">
          <TextField
            sx={{
              width: "70%",
              ".MuiTextField-root": {flexDirection: 'row'},
              ".MuiInputBase-root": {
                fontFamily: "inter, sans-serif",
                borderRadius: "10px",
                backgroundColor: "#F9F9FA",
                border: "1px solid #EDEFF1",
              },
              '.MuiInputBase-root:hover': {
                borderColor: '#F9F9FA',
                color: '#1976d2'
              },
              '.MuiInputBase-root:before': {
                display: 'none'
              },
              '.MuiInputBase-root:after': {
                display: 'none'
              },
            }}
            id="iban-1"
            label="Bank Account"
            variant="outlined"
          />
          <CustomSelect width="25%" data={dataForSelect1} title="Currency*" />
          <CustomSelect
            width="100%"
            data={dataForSelect2}
            title="Choose Bank*"
          />
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <div className="flex-between flex-wrap g-2">
          <TextField
            sx={{
              width: "70%",
              ".MuiTextField-root": {flexDirection: 'row'},
              ".MuiInputBase-root": {
                fontFamily: "inter, sans-serif",
                borderRadius: "10px",
                backgroundColor: "#F9F9FA",
                border: "1px solid #EDEFF1",
              },
              '.MuiInputBase-root:hover': {
                borderColor: '#F9F9FA',
                color: '#1976d2'
              },
              '.MuiInputBase-root:before': {
                display: 'none'
              },
              '.MuiInputBase-root:after': {
                display: 'none'
              },
            }}
            id="iban-11"
            label="Account Bank"
            variant="outlined"
          />
          <CustomSelect width="25%" data={dataForSelect1} title="Currency*" />
          <CustomSelect
            width="100%"
            data={dataForSelect2}
            title="Choose Bank*"
          />
        </div>
      </TabPanel>
    </Box>
  );
};

export default BasicTabs;
