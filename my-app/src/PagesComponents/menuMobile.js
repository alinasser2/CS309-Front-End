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
  { title: "Products", id: "./ProductList" },
  { title: "Register", id: "./Register" },
  { title: "Login", id: "./Login" },
  { title: "About", id: "./About" },
];
if ("admin" === "admisn") {
  pages = [
    { title: "Product", id: "./EditProduct" },
    { title: "About", id: "./About" },
    { title: "UsersList", id: "./UsersList" },
  ];
}
if ("response.data.message" === "User logged In") {
  pages = [
    { title: "Products", id: "./ProductList" },
    { title: "About", id: "./About" },
    { title: "UsersList", id: "./UsersList" },
    { title: "Account", id: "./Account" },
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
