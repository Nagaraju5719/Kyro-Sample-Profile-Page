import React from "react";
import { Button } from "@mui/material";
import { useFormikContext } from "formik";

const ButtonWrapper = ({ children, ...otherProps }) => {
  const { submitForm,resetForm } = useFormikContext();

  const handleSubmit = () => {
    submitForm();
  };

  const handleReset=()=>{
    resetForm()
  }

  const configButton = {
    variant: "contained",
    color:children === "Reset" ? "success" : "error",
    onClick: children === "Reset" ? handleReset : handleSubmit ,
  };

  return <Button {...configButton}>{children}</Button>;
};

export default ButtonWrapper;

