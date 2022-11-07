import React from "react";
import { IconButton, Stack, Typography } from "@mui/material";
import { NAVBAR_NAME } from "../Constants/Constants";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  return (
    <Stack
      mt={2}
      width={"100%"}
      direction="row"
      justifyContent={"space-between"}
      alignItems="center"
    >
      <Typography mr={2} variant="h4" color="#a82020" fontWeight={900}>
        {NAVBAR_NAME}
      </Typography>
      <IconButton color="inherit" aria-label="open drawer" edge="start">
        <MenuIcon fontSize="large" />
      </IconButton>
    </Stack>
  );
};

export default Navbar;
