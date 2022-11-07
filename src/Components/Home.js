import React from "react";
import MenuSection from "../Components/MenuSection/Index";
import ProfileSection from "../Components/ProfileSection/Index";
import { Grid } from "@mui/material";

function Home() {
  return (
    <Grid container height={"100vh"} spacing={1}>
      <Grid
        container
        direction="row"
        justifyContent={"center"}
        alignItems={"flex-start"}
        item
        xs={2}
      >
        <MenuSection />
      </Grid>
      <Grid container item xs={10}>
        <ProfileSection />
      </Grid>
    </Grid>
  );
}

export default Home;
