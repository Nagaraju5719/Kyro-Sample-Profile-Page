import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import List from "@mui/material/List";
import HomeIcon from "@mui/icons-material/Home";
import TaskRoundedIcon from "@mui/icons-material/TaskRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import CorporateFareRoundedIcon from "@mui/icons-material/CorporateFareRounded";
import DescriptionRoundedIcon from "@mui/icons-material/DescriptionRounded";
import ForumRoundedIcon from "@mui/icons-material/ForumRounded";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";

const elements = [
  {
    id: 1,
    icon: <HomeIcon sx={{ height: "30px", width: "30px" }} />,
    element: "Home",
  },
  {
    id: 2,
    icon: <TaskRoundedIcon sx={{ height: "30px", width: "30px" }} />,
    element: "Projects",
  },
  {
    id: 3,
    icon: <GridViewRoundedIcon sx={{ height: "30px", width: "30px" }} />,
    element: "Dashboard",
  },
  {
    id: 4,
    icon: <ForumRoundedIcon sx={{ height: "30px", width: "30px" }} />,
    element: "Messages",
  },
  {
    id: 5,
    icon: <DescriptionRoundedIcon sx={{ height: "30px", width: "30px" }} />,
    element: "Documents",
  },
  {
    id: 6,
    icon: <CorporateFareRoundedIcon sx={{ height: "30px", width: "30px" }} />,
    element: "Organizations",
  },
  {
    id: 7,
    icon: <SettingsRoundedIcon sx={{ height: "30px", width: "30px" }} />,
    element: "Settings",
  },
  {
    id: 8,
    icon: <LogoutRoundedIcon sx={{ height: "30px", width: "30px" }} />,
    element: "Logout",
  },
];

const DashboardElements = () => {
  return (
    <List>
      {elements.map((text) => (
        <ListItem
          sx={{ marginTop: text.id === 8 ? "180px" : "" }}
          key={text.id}
          disablePadding
        >
          <ListItemButton>
            <ListItemIcon sx={{ color: "#878686" }}>{text.icon}</ListItemIcon>
            <ListItemText
              sx={{ color: "#878686", fontSize: "30px" }}
              primary={text.element}
            />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};

export default DashboardElements;
