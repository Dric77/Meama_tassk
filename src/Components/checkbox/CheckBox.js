import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

export default function RadioButtonsGroup({ hanldeLanguage }) {
  return (
    <FormControl component="fieldset" onChange={hanldeLanguage}>
      <FormLabel component="legend">ენა</FormLabel>
      <RadioGroup aria-label="ენა" defaultValue="ka" name="radio-buttons-group">
        <FormControlLabel value="ka" control={<Radio />} label="ქართული" />
        <FormControlLabel value="en" control={<Radio />} label="English" />
        <FormControlLabel value="rus" control={<Radio />} label="Russia" />
      </RadioGroup>
    </FormControl>
  );
}
