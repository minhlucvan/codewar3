import { FormControl, FormControlLabel, Switch } from "@material-ui/core";
import React from "react";

function SwitchCustomize({ checked, handleChange }) {
  return (
    <FormControl>
      <FormControlLabel
        control={
          <Switch
            checked={checked}
            onChange={handleChange}
            name="checkedB"
            color="primary"
          />
        }
        label="Male"
      />
    </FormControl>
  );
}

export default SwitchCustomize;
