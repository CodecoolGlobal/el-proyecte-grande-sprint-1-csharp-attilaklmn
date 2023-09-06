import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { AdminContext, UserContext } from "../App";
import { hover } from "@testing-library/user-event/dist/hover";

const pages = ["Filmlist", "Program", "Reservation", "Login"];

function ResponsiveAppBar() {
  const { isAdmin, adminView, setAdminView } = useContext(AdminContext);
  const { user } = useContext(UserContext);

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const navigate = useNavigate();
  const [adminChecked, setAdminChecked] = useState(false);

  const handleAdminCheckChange = (event) => {
    const prevState = adminView;
    setAdminChecked(!prevState);
    setAdminView(!prevState);
  };
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container
        maxWidth="false"
        sx={{ display: "flex", justifyContent: "center" }}
      >
        <Toolbar disableGutters>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div
              style={{
                display: "flex",
                width: "20%",
              }}
            >
              <div style={{ maxWidth: "20%", marginRight: "0.5vw" }}>
                <img
                  style={{
                    objectFit: "contain",
                    width: "100%",
                    height: "100%",
                    cursor: "pointer",
                  }}
                  alt="cinemasharp"
                  src={process.env.PUBLIC_URL + "transparent_minilogo.png"}
                  onClick={() => {
                    handleCloseNavMenu();
                    navigate("/");
                  }}
                ></img>
              </div>
              <div style={{ maxWidth: "80%" }}>
                <img
                  style={{
                    objectFit: "contain",
                    width: "100%",
                    height: "100%",
                    cursor: "pointer",
                  }}
                  alt="cinemasharp"
                  src={process.env.PUBLIC_URL + "transparent_logo_text.png"}
                  onClick={() => {
                    handleCloseNavMenu();
                    navigate("/");
                  }}
                ></img>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "50%",
              }}
            >
              <div
                style={{
                  display: "flex",
                  width: "33%",
                  justifyContent: "center",
                }}
              >
                <Button
                  key="filmlist"
                  onClick={() => {
                    handleCloseNavMenu();
                    navigate("/filmlist");
                  }}
                  sx={{
                    fontSize: "2.5vw",
                    my: 2,
                    color: "white",
                    display: "block",
                    "&:hover": {
                      color: "lightblue",
                    },
                  }}
                >
                  Filmlist
                </Button>
              </div>
              <div
                style={{
                  display: "flex",
                  width: "33%",
                  justifyContent: "center",
                }}
              >
                <Button
                  key="program"
                  onClick={() => {
                    handleCloseNavMenu();
                    navigate("/program");
                  }}
                  sx={{
                    fontSize: "2.5vw",
                    my: 2,
                    color: "white",
                    display: "block",
                    "&:hover": {
                      color: "lightblue",
                    },
                  }}
                >
                  Program
                </Button>
              </div>
              <div
                style={{
                  display: "flex",
                  width: "33%",
                  justifyContent: "center",
                }}
              >
                <Button
                  key="reservation"
                  onClick={() => {
                    handleCloseNavMenu();
                    navigate("/reservation");
                  }}
                  sx={{
                    fontSize: "2.5vw",
                    my: 2,
                    color: "white",
                    display: "block",
                    "&:hover": {
                      color: "lightblue",
                    },
                  }}
                >
                  Reservation
                </Button>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                width: "20%",
              }}
            >
              <Tooltip
                style={{ marginLeft: "3vw" }}
                title={<h1 style={{}}>Open user menu</h1>}
              >
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar
                    sx={{
                      height: "4vw",
                      width: "4vw",
                      backgroundColor: "sandybrown",
                      "&:hover": {
                        color: "white",
                        backgroundColor: "lightblue",
                      },
                      fontSize: "3vw",
                    }}
                    alt={user}
                    src="/static/images/avatar/2.jpg"
                  />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <MenuItem
                  key="user"
                  onClick={() => {
                    handleCloseNavMenu();
                    handleCloseUserMenu();
                    navigate("/user");
                  }}
                >
                  <Typography textAlign="center">
                    {user ? "Logout" : "Login/Register"}
                  </Typography>
                </MenuItem>
                {user && (
                  <MenuItem
                    key="account"
                    onClick={() => {
                      handleCloseNavMenu();
                      handleCloseUserMenu();
                      navigate("/account");
                    }}
                  >
                    <Typography textAlign="center">Account</Typography>
                  </MenuItem>
                )}
                {isAdmin && (
                  <FormGroup
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignContent: "center",
                    }}
                  >
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={adminChecked}
                          onChange={handleAdminCheckChange}
                        />
                      }
                      label="Admin view"
                    />
                  </FormGroup>
                )}
              </Menu>
            </div>
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
