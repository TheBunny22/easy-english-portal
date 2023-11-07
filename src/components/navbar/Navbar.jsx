import * as React from "react";
import Box from "@mui/joy/Box";
import Drawer from "@mui/joy/Drawer";
import Button from "@mui/joy/Button";
import List from "@mui/joy/List";
import Divider from "@mui/joy/Divider";
import ListItem from "@mui/joy/ListItem";
import ListItemButton from "@mui/joy/ListItemButton";
import { Nav_Outer } from "./Navbar.style";
import { Link, Outlet } from "react-router-dom";
import styled from "@emotion/styled";

const Nlink = styled(Link)`
  text-decoration: none;
  color: Black;
  width:100%;

`;

const navs = [
  {
    route: "/",
    name: "Dashboard",
  },
  {
    route: "/game",
    name: "Fun Zone",
  },
  {
    route: "/fill_the_blanks",
    name: "Blanks Quize",
  },
  
];

function DrawerBasic() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (inOpen) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setOpen(inOpen);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <Button variant="outlined" color="neutral" onClick={toggleDrawer(true)}>
        Menu
      </Button>
      <Drawer open={open} onClose={toggleDrawer(false)} size="sm">
        <Box
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            {navs.map((data) => (
              <ListItem key={data.name}>
                <Nlink to={data.route}>
                  <ListItemButton>{data.name}</ListItemButton>
                </Nlink>
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            <ListItem>
              <ListItemButton>
                <Nlink to="/profile">Profile</Nlink>
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </Box>
  );
}

const Navbar = () => {
  return (
    <>
      <Nav_Outer>
        <h2>Eazy English - Teachers Console </h2>
        <DrawerBasic />
      </Nav_Outer>
      <Outlet />
    </>
  );
};

export default Navbar;
