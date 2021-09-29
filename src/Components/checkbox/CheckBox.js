import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

import classes from "./Checkbox.module.css";

let choosedLanguage = localStorage.getItem("choosed_language");

export default function RadioButtonsGroup({ hanldeLanguage }) {
  return (
    <FormControl
      component="fieldset"
      className={classes.formControl}
      onChange={hanldeLanguage}
    >
      {/* <FormLabel component="legend">ენა</FormLabel> */}
      <RadioGroup
        className={classes.radioGrooup}
        aria-label=""
        name="radio-buttons-group"
        defaultChecked={choosedLanguage ? choosedLanguage : "ka"}
        defaultValue={choosedLanguage ? choosedLanguage : "ka"}
      >
        <FormControlLabel
          value="ka"
          control={<Radio />}
          label="ქართული"
          className={classes.checkbox}
        />
        <FormControlLabel
          value="en"
          control={<Radio />}
          label="English"
          className={classes.checkbox}
        />
        <FormControlLabel
          value="rus"
          control={<Radio />}
          label="Russia"
          className={classes.checkbox}
        />
      </RadioGroup>
    </FormControl>
  );
}
