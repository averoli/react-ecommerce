import * as React from "react";
import { useContext, useState } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { shoppingBagContext } from "../../CartContex";

import WishList from "../../pages/WishList";

import {
  AppBar,
  Avatar,
  Badge,
  Box,
  Container,
  IconButton,
  Toolbar,
} from "@mui/material/";
import { HeaderBlock } from "../../ui/Container";
import { Welcome } from "../../ui/Typography";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../../ui/Color";
import IconBag from "../iconBag/index";
import FavoriteIcon from "@mui/icons-material/Favorite";
import logo_face from "../../assets/icons/logo_face.jpg";

import "./style.css";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  const pages = ["home", "shop", "about", "contact us"];

  const { cart } = useContext(shoppingBagContext);

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

  const handleClickOpenClose = () => {
    setOpen((prevState) => !prevState);
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <AppBar position="sticky" color="inherit">
          <Container maxWidth="xl">
            <Toolbar>
              {/* <IconButton onClick={openMainPage}>
                <Avatar alt="Logo Lips" src={logo_lips} />
              </IconButton> */}
              <HeaderBlock>
                <IconButton>
                  <Avatar alt="Logo face" src={logo_face} />
                </IconButton>
                <Welcome margin={1} color="rose">
                  Welcome, Ahlov!
                </Welcome>
              </HeaderBlock>
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
                    style={({ isActive }) =>
                      isActive ? activeStyle : undefined
                    }
                    className="navlink"
                  >
                    {page}
                  </NavLink>
                ))}
              </Box>
              <HeaderBlock>
                <IconButton
                  aria-label="cart"
                  sx={{ mx: 4 }}
                  onClick={openShoppingCart}
                >
                  <Badge color="rose" badgeContent={cart}>
                    <IconBag color="coffee" />
                  </Badge>
                </IconButton>
                <IconButton onClick={handleClickOpenClose}>
                  <Badge>
                    <FavoriteIcon color="rose" />
                  </Badge>
                </IconButton>
                <WishList open={open} handleClose={handleClickOpenClose} />
              </HeaderBlock>
            </Toolbar>
          </Container>
        </AppBar>
        <Outlet />
      </ThemeProvider>
    </>
  );
};

export default NavBar;
