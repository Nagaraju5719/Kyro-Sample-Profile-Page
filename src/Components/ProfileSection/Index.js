import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Grid, Stack, Typography, Box, Button } from "@mui/material";
import ProfileForm from "../UIcomponents/Form";
import PreviewProfileData from "../UIcomponents/PreviewProfileData";
import { useState } from "react";
import DateTimeComponent from "../UIcomponents/DateTimeComponent";


function ProfileSection() {
  const data = useLocation();
  const { currentDandTime, greet } = DateTimeComponent();
  const [userData, setUserData] = useState(
    data.state ? data.state.singleUser : {}
  );
  const [actualData,setActualData]=useState()



  return (
    <Grid
      container
      sx={{
        background: "linear-gradient(to right, #edebeb, white)",
      }}
    >
      <Grid p={4} item xs={8}>
        <Stack mb={4}>
          <Typography variant="h6" fontWeight={"bold"}>
            {greet}
            {userData?.firstName
              ? `, ${userData.firstName} ${userData.lastName}`
              : ""}
          </Typography>
          <Typography variant="h6" color="#aba9a9" fontWeight={"bold"}>
            {currentDandTime}
          </Typography>
        </Stack>
        <Typography mb={4} variant="h6" fontWeight={"bold"}>
          My Profile
        </Typography>
        <Box
          sx={{
            border: "1px solid white",
            borderRadius: "10px",
            boxShadow: "2px 2px 20px #aba9a9",
            backgroundColor: "white",
            mr: "100px",
          }}
        >
          
          <ProfileForm actualData={actualData}/>
        </Box>
      </Grid>
      <Grid item container xs={4}>
        <PreviewProfileData />
      </Grid>
    </Grid>
  );
}

export default ProfileSection;
