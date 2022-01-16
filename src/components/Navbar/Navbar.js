import React from "react";
import {
  Box,
  AppBar,
  Toolbar,
  Badge,
  Typography,
  IconButton,
} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import { Link, useLocation } from "react-router-dom";
import useStyles from "./styles";
import logo from "../../assets/closet.png";
const Navbar = ({ totalItems }) => {
  const classes = useStyles();
  const location = useLocation();

  console.log("Total Items:", totalItems);
  return (
    <>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          <Typography
            component={Link}
            to="/"
            variant="h6"
            className={classes.title}
          >
            <img src={logo} alt="closet.js" className={classes.image} />
            Closet Store
          </Typography>
          <Box className={classes.grow} />
          {location.pathname === "/" && (
            <Box className={classes.button}>
              <IconButton
                component={Link}
                to="/cart"
                aria-label="Show Cart Items"
                color="inherit"
              >
                <Badge color="secondary" badgeContent={totalItems}>
                  <ShoppingCart />
                </Badge>
              </IconButton>
            </Box>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
