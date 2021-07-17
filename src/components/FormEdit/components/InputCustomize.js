import {
  FormControl,
  Input,
  InputAdornment,
  InputLabel,
} from "@material-ui/core";
import React from "react";

function InputCustomize({ title, icon }) {
  return (
    <FormControl fullWidth>
      <InputLabel htmlFor="input-with-icon-adornment">
        {title}
      </InputLabel>
      <Input
        className="customize-input"
        id="input-with-icon-adornment"
        fullWidth
        startAdornment={
          <InputAdornment position="start">{icon()}</InputAdornment>
        }
      />
    </FormControl>
  );
}

export default InputCustomize;
