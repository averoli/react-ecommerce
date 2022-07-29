import * as React from "react";
import { Outlet } from "react-router-dom";
import { useContext } from "react";
import { shoppingBagContext } from "../../CartContex";
import IconBag from "../iconBag/index";
import {
  AppBar,
  Avatar,
  Box,
  Container,
  IconButton,
  Toolbar,
} from "@mui/material/";

import { NavLink, useNavigate } from "react-router-dom";

import logo_lips from "../../assets/icons/logo_lips.jpeg";
import logo_face from "../../assets/icons/logo_face.jpg";

import "./style.css";

const NavBar = () => {
  const pages = ["protected", "MAKEUP", "HAIR", "PERFUME"];

  const { cart, setCart } = useContext(shoppingBagContext);

  let activeStyle = {
    textDecoration: "underline",
  };

  let navigate = useNavigate();

  const openShoppingCart = () => {
    navigate("/shoppingbag", { replace: true });
  };

  const openMainPage = () => {
    navigate("/", { replace: true });
  };

  return (
    <>
      <AppBar position="fixed" color="inherit">
        <Container maxWidth="xl">
          <Toolbar>
            <IconButton onClick={openMainPage}>
              <Avatar alt="Logo Lips" src={logo_lips} />
            </IconButton>

            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex", justifyContent: "center" },
              }}
            >
              {pages.map((page, index) => (
                <NavLink
                  key={index}
                  to={page}
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                  className="navlink"
                >
                  {page}
                </NavLink>
              ))}
            </Box>

            <IconButton
              aria-label="cart"
              sx={{ mx: 4 }}
              onClick={openShoppingCart}
            >
              {cart}
              <IconBag />
            </IconButton>

            <IconButton>
              <Avatar alt="Logo face" src={logo_face} />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>
      <Outlet />
    </>
  );
};

export default NavBar;
