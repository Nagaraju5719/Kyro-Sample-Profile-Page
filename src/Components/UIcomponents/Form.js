import { useState } from "react";
import { Formik } from "formik";
import { Form } from "formik";
import Textfield from "./Textfield";
import Button from "./Button";
import { Grid, Typography } from "@mui/material";
import { INITIAL_FORM_STATE } from "./FieldValues";
import { RESET_BUTTON_TEXT } from "../Constants/Constants";
import { useNavigate, useLocation } from "react-router-dom";
import { FORM_VALIDATION } from "./Validation";
import axios from "axios";
import { API_URL } from "../Constants/Constants";
import PersonIcon from "@mui/icons-material/Person";
import PortraitOutlinedIcon from "@mui/icons-material/PortraitOutlined";
import MarkunreadOutlinedIcon from "@mui/icons-material/MarkunreadOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

const ProfileForm = (props) => {
  let id = useLocation()?.state?.userId;
  let editModeStatus = useLocation()?.state?.isUpdateMode;
  let singleUserData = useLocation()?.state?.singleUser;

  console.log("singleUserData",singleUserData)

  const [state, setState] = useState(
    editModeStatus ? singleUserData : INITIAL_FORM_STATE
  );
  const [isEditMode, setIsEditMode] = useState(
    editModeStatus ? editModeStatus : false
  );
  const [userId, setUserId] = useState(editModeStatus ? id : null);

  let navigate = useNavigate();

  localStorage.setItem("data", JSON.stringify(state))

  const handleSubmit = (values) => {
    if (!isEditMode) {
      axios.post(API_URL, { ...values });
    } else {
      axios.put(`${API_URL}/${id}`, { ...values });
      setUserId(null);
      setIsEditMode(false);
    }
    setState(INITIAL_FORM_STATE);
    navigate("/list");
  };

  const handleReset = (state) => {
    setState(state);
  };

  return (
    <Formik
      initialValues={{ ...state }}
      validationSchema={FORM_VALIDATION}
      onSubmit={(values) => handleSubmit(values)}
    >
      <Form>
        <Grid spacing={6} container p={"80px"} className={"borderStyle"}>
          <Grid item xs={6}>
            <Textfield
              name="firstName"
              label="First Name"
              placeholder={"Enter First Name ..."}
              children={<PersonIcon />}
            />
          </Grid>
          <Grid item xs={6}>
            <Textfield
              name="lastName"
              label="Last Name"
              placeholder={"Enter Last Name ..."}
              children={<PersonIcon />}
            />
          </Grid>
          <Grid item xs={6}>
            <Textfield
              name="displayName"
              label="display Name"
              placeholder={"Enter Display Name ..."}
              children={<PortraitOutlinedIcon />}
            />
          </Grid>
          <Grid item xs={6}>
            <Textfield
              name="email"
              label="Email"
              placeholder={"Enter Email ..."}
              children={<MarkunreadOutlinedIcon />}
            />
          </Grid>
          <Grid item xs={6}>
            <Textfield
              name="officePhoneNumber"
              label="Phone Number (office)"
              placeholder={"Enter Phone Number (office) ..."}
              children={<LocalPhoneOutlinedIcon />}
            />
          </Grid>
          <Grid item xs={6}>
            <Textfield
              name="homePhoneNumber"
              label="Phone Number (home)"
              placeholder={"Enter Phone Number (home) ..."}
              children={<LocalPhoneOutlinedIcon />}
            />
          </Grid>
          <Grid item xs={6}>
            <Textfield
              name="location"
              label="Location"
              placeholder={"Enter Location ..."}
              children={<LocationOnOutlinedIcon />}
            />
          </Grid>
        </Grid>
        <Grid
          container
          item
          xs={12}
          m={"100px 0px 40px 0px"}
          direction="row"
          justifyContent={"space-around"}
        >
          <Button>{isEditMode ? "Update User" : "Submit Form"}</Button>
          {isEditMode ? (
            <Button
              variant="contained"
              color="success"
              onClick={(state) => handleReset(state)}
            >
              Reset
            </Button>
          ) : (
            ""
          )}
        </Grid>
      </Form>
    </Formik>
  );
};

export default ProfileForm;
