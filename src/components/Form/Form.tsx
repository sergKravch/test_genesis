import TextField from "@mui/material/TextField";
import CustomSelect from "../Select/CustomSelect";
import BasicTabs from "../TabPanel/TabPanel";
import imagePlus from "../../assets/images/icon-plus.svg";
import "./Form.scss";

const dataForSelect1 = [
  { label: "SmartBook", id: "SmartBook1" },
  { label: "SmartBook", id: "SmartBook2" },
  { label: "SmartBook", id: "SmartBook3" },
  { label: "SmartBook", id: "SmartBook4" },
];
const dataForSelect2 = [
  { label: "Genesis", id: "Genesis1" },
  { label: "Genesis", id: "Genesis2" },
  { label: "Genesis", id: "Genesis3" },
  { label: "Genesis", id: "Genesis4" },
];

const Form = () => {
  return (
    <main className="modal_content">
      <div className="form_block">
        <h2 className="form_title">
          Please choose the Legal entity & Busines Division
        </h2>
        <div className="flex-between g-2">
          <CustomSelect
            width="100%"
            data={dataForSelect1}
            title="Business Division*"
          />
          <CustomSelect
            width="100%"
            data={dataForSelect2}
            title="Legal entity*"
          />
        </div>
      </div>
      <div className="form_block">
        <h2 className="form_title">Card account</h2>
        <BasicTabs
          dataForSelect1={dataForSelect1}
          dataForSelect2={dataForSelect2}
        />
      </div>
      <div className="form_block">
        <div className="flex-between">
          <h2 className="form_title">Cards</h2>
          <div className="flex-between">
            <button className="add-new-card flex-between">
              <img src={imagePlus} alt="Icon" />
              Add New
            </button>
          </div>
        </div>
        <div className="flex-between g-2">
          <div className="form_block_item flex-between g-1">
            <h3 className="form_block_item-title">Card Status: None</h3>
            <TextField
              sx={{
                width: "100%",
                ".MuiInputBase-root": {
                  borderRadius: "10px",
                  backgroundColor: "#F9F9FA",
                  border: "1px solid #EDEFF1",
                },
                ".MuiInputBase-root:hover": {
                  borderColor: "#F9F9FA",
                  color: "#1976d2",
                },
                ".MuiInputBase-root:before": {
                  display: "none",
                },
                ".MuiInputBase-root:after": {
                  display: "none",
                },
              }}
              id="input-with-icon-textfield"
              label="Card Number*"
              variant="outlined"
            />
            <TextField
              sx={{
                width: "100%",
                ".MuiInputBase-root": {
                  borderRadius: "10px",
                  backgroundColor: "#F9F9FA",
                  border: "1px solid #EDEFF1",
                },
                ".MuiInputBase-root:hover": {
                  borderColor: "#F9F9FA",
                  color: "#1976d2",
                },
                ".MuiInputBase-root:before": {
                  display: "none",
                },
                ".MuiInputBase-root:after": {
                  display: "none",
                },
              }}
              id="qwer-2"
              label="Bank Account"
              variant="outlined"
            />
          </div>
          <div className="form_block_item flex-between g-1">
            <h3 className="form_block_item-title">Card Status: None</h3>
            <TextField
              sx={{
                width: "100%",
                ".MuiInputBase-root": {
                  borderRadius: "10px",
                  backgroundColor: "#F9F9FA",
                  border: "1px solid #EDEFF1",
                },
                ".MuiInputBase-root:hover": {
                  borderColor: "#F9F9FA",
                  color: "#1976d2",
                },
                ".MuiInputBase-root:before": {
                  display: "none",
                },
                ".MuiInputBase-root:after": {
                  display: "none",
                },
              }}
              id="input-with-icon-textfield"
              label="Card Number*"
              variant="outlined"
            />
            <TextField
              sx={{
                width: "100%",
                ".MuiInputBase-root": {
                  borderRadius: "10px",
                  backgroundColor: "#F9F9FA",
                  border: "1px solid #EDEFF1",
                },
                ".MuiInputBase-root:hover": {
                  borderColor: "#F9F9FA",
                  color: "#1976d2",
                },
                ".MuiInputBase-root:before": {
                  display: "none",
                },
                ".MuiInputBase-root:after": {
                  display: "none",
                },
              }}
              id="qwer-2"
              label="Bank Account"
              variant="outlined"
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Form;
