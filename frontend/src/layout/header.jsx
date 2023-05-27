import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { Button } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import AddIcon from "@mui/icons-material/Add";
import { useRouter } from "next/router";
import Switch from "@mui/material/Switch";
import { useTheme } from "@/context/ThemeProvider";
import { useContext, useEffect } from "react";
import Cookies from "js-cookie";
import { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { useAuth } from "@/context/AuthProvider";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const label = { inputProps: { "aria-label": "Switch demo" } };

const styles = {
  textTrans: {
    textTransform: "capitalize",
    color: "white",
    backgroundColor: "#9147ff",
    fontFamily: "Mulish",
    marginLeft: "10px",
    "&:hover": {
      bgcolor: "white",
      color: "black",
    },
  },
  Box: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
};

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "#9147ff",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const PinkSwitch = styled(Switch)(({ theme }) => ({
  "& .MuiSwitch-switchBase.Mui-checked": {
    color: "#9147ff",
    "&:hover": {
      backgroundColor: alpha("#9147ff", theme.palette.action.hoverOpacity),
    },
  },
  "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
    backgroundColor: "#9147ff",
  },
}));

export const Header = () => {
  const router = useRouter();
  const { userData, setUserData } = useAuth();
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  console.log(userData);

  const successfulLogout = () => {
    toast("Амжилттай гарлаа", {
      hideProgressBar: true,
      autoClose: 1000,
      type: "error",
      theme: "light",
    });
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const logOut = () => {
    setUserData(null);
    Cookies.remove("token");
    successfulLogout();
    handleClose();
  };

  const { theme, changeTheme } = useTheme();
  const nestream =
    "https://firebasestorage.googleapis.com/v0/b/chatapp-e944a.appspot.com/o/nestream.svg?alt=media&token=ccd153e7-f3e1-47f9-a756-6956562310c8";

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
      sx={{ backgroundColor: theme === "white" ? "black" : "white" }}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      sx={{
        backgroundColor: theme === "white" ? "black" : "white",
        color: theme === "white" ? "white" : "black",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" color="inherit">
          <SearchIcon />
        </IconButton>
        <p
          onClick={() => {
            router.push("/browse");
          }}
        >
          Browse
        </p>
      </MenuItem>
      {userData ? (
        <Box>
          <MenuItem
            onClick={() => {
              // CreateRoom();
              router.push("/enterRoom");
            }}
          >
            <p>Create Room</p>
          </MenuItem>
          <MenuItem
            onClick={() => {
              // CreateRoom();
              router.push("/enterRoom");
            }}
          >
            <p>Enter Room</p>
          </MenuItem>
          <MenuItem onClick={handleProfileMenuOpen}>
            <p>Profile</p>
          </MenuItem>
        </Box>
      ) : (
        <Box>
          <MenuItem
            onClick={() => {
              router.push("/login");
            }}
          >
            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
            >
              <LoginIcon />
            </IconButton>
            <p>Log In</p>
          </MenuItem>
          <MenuItem
            onClick={() => {
              router.push("/signup");
            }}
          >
            <IconButton size="large" color="inherit">
              <AddIcon />
            </IconButton>
            <p>Sign Up</p>
          </MenuItem>
        </Box>
      )}
    </Menu>
  );

  return (
    <Box
      sx={{
        flexGrow: 1,
        backgroundColor: theme === "white" ? "black" : "white",
        zIndex: 2,
      }}
    >
      <AppBar
        position="static"
        sx={{
          backgroundColor: "transparent",
          width: "100vw",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <Toolbar>
          <Box sx={styles.Box}>
            <Box
              onClick={() => {
                router.push("/");
              }}
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <img src={nestream} alt="nestream" />
              <Typography
                sx={{
                  fontFamily: "Monomaniac One, sans-serif",
                  background:
                    "linear-gradient(90deg, #6D61F7 4.43%, #60F4F4 100%)",
                  backgroundClip: "text",
                  textFillColor: "transparent",
                  fontSize: "15px",
                }}
              >
                NESTREAM
              </Typography>
            </Box>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{
                display: { xs: "none", sm: "block" },
                fontFamily: "Mulish",
                marginLeft: "20px",
                marginRight: "10px",
                color: theme === "white" ? "white" : "black",
              }}
              onClick={() => {
                router.push("/browse");
              }}
            >
              Browse
            </Typography>
          </Box>
          <Box sx={{ flexGrow: 1 }} />
          <Search
            sx={{
              marginLeft: "20px",
              backgroundColor: theme === "white" ? "black" : "white",
              color: theme === "white" ? "white" : "black",
            }}
          >
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
              sx={{ fontFamily: "Mulish" }}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <PinkSwitch
            {...label}
            defaultChecked
            color="secondary"
            onClick={() => {
              changeTheme();
            }}
          />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {userData ? (
              <Box
                sx={{
                  height: "64px",
                  display: "flex",
                  alignItems: "center",
                  gap: "20px",
                  marginLeft: "20px ",
                }}
              >
                <Typography sx={{ color: "#9147ff" }} onClick={handleClick}>
                  {userData.username}
                </Typography>
                <Button
                  sx={styles.textTrans}
                  variant="contained"
                  onClick={() => {
                    router.push("/enterRoom");
                  }}
                >
                  Create & Enter Room
                </Button>
                {/* <Button
                  sx={styles.textTrans}
                  variant="contained"
                  onClick={() => {
                    EnterRoom();
                    router.push("StartStream");
                  }}
                ></Button> */}
              </Box>
            ) : (
              <Box>
                <Button
                  sx={styles.textTrans}
                  variant="contained"
                  onClick={() => {
                    router.push("/signup");
                  }}
                >
                  Sign Up
                </Button>
                <Button
                  sx={styles.textTrans}
                  variant="contained"
                  onClick={() => {
                    router.push("/login");
                  }}
                >
                  Log in
                </Button>
              </Box>
            )}
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={logOut}>Гарах</MenuItem>
            </Menu>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              sx={{
                color: theme === "black" ? "black" : "white",
              }}
            >
              <MoreVertIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
};
