import React from "react";
import TextField from "@mui/material/TextField";
import { useField } from "formik";
import InputAdornment from "@mui/material/InputAdornment";

const TextfieldWrapper = ({ name, children, ...otherProps }) => {
  const [field, mata] = useField(name);

  const configTextfield = {
    ...field,
    ...otherProps,
    fullWidth: true,
    variant: "outlined",
  };

  if (mata && mata.touched && mata.error) {
    configTextfield.error = true;
    configTextfield.helperText = mata.error;
  }

  return (
    <TextField
      {...configTextfield}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">{children}</InputAdornment>
        ),
      }}
    />
  );
};

export default TextfieldWrapper;
