import { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

type SelectProps = {
  title: string;
  width: string;
  data: {
    label: string;
    id: string;
  }[];
};

const CustomSelect = ({ title, width, data }: SelectProps) => {
  const [age, setAge] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  return (
    <Box
      sx={{
        minWidth: 120,
        width: width,
        ".MuiInputBase-root": {
          borderRadius: "10px",
          fontFamily: "inter, sans-serif",
        },
        ".MuiInputBase-root:hover": {
          borderColor: "#6367F6",
          color: "#6367F6",
        },
        ".MuiInputLabel-root": { fontFamily: "inter, sans-serif" },
      }}
    >
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{title}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label={title}
          onChange={handleChange}
        >
          {data.map((item) => (
            <MenuItem value={10} key={item.id}>
              {item.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default CustomSelect;
