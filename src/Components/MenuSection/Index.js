import React from "react";
import Box from "@mui/material/Box";
import Navbar from "../UIcomponents/Navbar";
import DashboardElements from "../UIcomponents/DashboardElements";
function MenuSection() {
  return (
    <Box>
      <Navbar />
      <DashboardElements />
    </Box>
  );
}

export default MenuSection;
