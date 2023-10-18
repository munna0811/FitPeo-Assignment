import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { IoIosArrowForward } from "react-icons/io";
import {
  TbSquareKey,
  TbBox,
  TbUserSquare,
  TbDiscount2,
  TbHelpSquare,
} from "react-icons/tb";
import { GiTakeMyMoney } from "react-icons/gi";
import Profile from "./Profile";
import { Typography } from "@mui/material";
const drawerWidth = 240;
const background = "red";

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const data = [
    { text: "Dashboard", icon: <TbSquareKey />, next: " " },
    { text: "Product", icon: <TbBox />, next: <IoIosArrowForward /> },
    { text: "Customer", icon: <TbUserSquare />, next: <IoIosArrowForward /> },
    { text: "Income", icon: <GiTakeMyMoney />, next: <IoIosArrowForward /> },
    { text: "Promote", icon: <TbDiscount2 />, next: <IoIosArrowForward /> },
    { text: "Help", icon: <TbHelpSquare />, next: <IoIosArrowForward /> },
  ];
  const drawer = (
    <div>
      <Typography
        variant="h5"
        sx={{ paddingTop: 2, paddingLeft: { xs: 7, lg: 0 } }}
      >
        Dashboard
      </Typography>
      <List>
        {data.map((e) => (
          <ListItem key={e.text} disablePadding>
            <ListItemButton>
              <ListItemIcon>{e.icon}</ListItemIcon>
              <ListItemText primary={e.text} />
              <ListItemIcon>{e.next}</ListItemIcon>
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <Profile />
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: "none" } }}
        >
          <MenuRoundedIcon />
        </IconButton>
      </AppBar>

      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>

        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

export default ResponsiveDrawer;
