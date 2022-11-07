import { Grid, Typography, Button, Stack } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { useState } from "react";

const PreviewProfileData = () => {
  const data = useLocation();
  const [userData, setUserData] = useState(
    data.state ? data.state.singleUser : {}
  );
  const navigate = useNavigate();
  return (
    <Grid
      container
      item
      direction={"column"}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <Grid
        p={4}
        item
        container
        direction={"row"}
        justifyContent={"space-around"}
        alignItems={"center"}
      >
        <Grid item>
          <Button
            variant="contained"
            color="error"
            onClick={() => {
              navigate("/list");
            }}
          >
            Users List
          </Button>
        </Grid>
        <Grid item>
          <Stack direction={"row"}>
            <PersonIcon />
            <Typography variant="subtitle">
              {userData?.firstName
                ? ` : ${userData.firstName} ${userData.lastName}`
                : ""}
            </Typography>
          </Stack>
          <Stack direction={"row"}>
            <LocationOnOutlinedIcon />
            <Typography variant="subtitle">
              {userData?.location ? ` : ${userData.location}` : ""}
            </Typography>
          </Stack>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        height="80vh"
        sx={{
          background: "linear-gradient(to right, #edebeb, white)",
          ml: "50px",
        }}
      >
        <img
          src={""}
          alt={"user-profile-pic"}
          height="200px"
          width="200px"
        />
        <Typography variant="body" fontWeight={"bold"}>
          {userData?.displayName ? userData?.displayName : "xxxxxxxxxxxxxx"}
        </Typography>
        <Typography variant="body" fontWeight={"bold"} color={"#d9d9d9"}>
          {userData?.email ? userData?.email : "abc@gmail.com"}
        </Typography>
        <Typography variant="body" fontWeight={"bold"}>
          {userData?.homePhoneNumber ? userData?.homePhoneNumber : "9999999999"}
          (office)
        </Typography>
      </Grid>
    </Grid>
  );
};

export default PreviewProfileData;
