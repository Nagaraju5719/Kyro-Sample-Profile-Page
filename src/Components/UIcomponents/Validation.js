import * as Yup from "yup";

export const FORM_VALIDATION = Yup.object().shape({
  firstName: Yup.string().required("*Required"),
  lastName: Yup.string().required("*Required"),
  displayName: Yup.string().required("*Required"),
  email: Yup.string().email("Invalid email.").required("*Required"),
  officePhoneNumber: Yup.number()
    .integer()
    .typeError("Please enter a valid phone number")
    .min(1000000000, "Must be exactly 10 numbers")
    .max(9999999999, "Must be exactly 10 numbers")
    .required("*Required"),
  homePhoneNumber: Yup.number()
    .integer()
    .typeError("Please enter a valid phone number")
    .min(1000000000, "Must be exactly 10 numbers")
    .max(9999999999, "Must be exactly 10 numbers")
    .required("*Required"),
  location: Yup.string().required("*Required"),
});
