import React, { useState } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

let pages = [
  { title: "Products", id: "./CS309-Front-End/ProductList" },
  { title: "Register", id: "./CS309-Front-End/Register" },
  { title: "Login", id: "./CS309-Front-End/Login" },
  { title: "About", id: "./CS309-Front-End/About" },
];
if ("Admin" === "admin") {
  pages = [
    { title: "Product", id: "./CS309-Front-End/EditProduct" },
    { title: "About", id: "./CS309-Front-End/About" },
    { title: "UsersList", id: "./CS309-Front-End/UsersList" },
  ];
}
if ("response.data.message" === "User logged In") {
  pages = [
    { title: "Products", id: "./CS309-Front-End/ProductList" },
    { title: "About", id: "./CS309-Front-End/About" },
    { title: "UsersList", id: "./CS309-Front-End/UsersList" },
    { title: "Account", id: "./CS309-Front-End/Account" },
  ];
}

const Mobile = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <React.Fragment>
      <Drawer
        anchor="left"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <List>
          {pages.map((page, index) => (
            <ListItemButton key={index}>
              <ListItemIcon>
                <Link to={page.id} style={{ color: "black" }}>
                  <ListItemText style={{ color: "black" }}>
                    {page.title}
                  </ListItemText>
                </Link>
              </ListItemIcon>
            </ListItemButton>
          ))}
        </List>
      </Drawer>
      <IconButton
        sx={{ color: "white", marginLeft: "auto" }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon color="white" />
      </IconButton>
    </React.Fragment>
  );
};

export default Mobile;
