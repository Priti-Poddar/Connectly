import React, {  useContext, useState } from 'react';
import withAuth from '../utils/withAuth.jsx';
import { useNavigate } from 'react-router-dom';
// import "../App.css";
import "../styles/home.css";
import { Link } from "react-router-dom";
// import { Button, IconButton, TextField } from "@mui/material";
import {
  Button,
  TextField,
  Container,
  Box,
  Typography,
  AppBar,
  Toolbar,
  Paper,
  Divider,
} from "@mui/material";
import { Clock, LogOut, Video } from "lucide-react";
import { AuthContext } from "../contexts/AuthContext";

function HomeComponent() {

    let navigate = useNavigate();
    const [meetingCode, setMeetingCode] = useState("");

    const { addToUserHistory } = useContext(AuthContext);
    let handleJoinVideoCall = async () => {
        await addToUserHistory(meetingCode);
        navigate(`/${meetingCode}`);
    }

    return (
      <>
        {/* <div className="navBar">
          <div style={{ display: "flex", alignItems: "center" }}>
            <h2 className="text-2xl font-bold bg-gradient-to-r from-sky-600 to-blue-700 bg-clip-text text-transparent">
              Connectly
            </h2>
          </div>

          <div style={{ display: "flex", alignItems: "center" }}>
            <IconButton
              onClick={() => {
                navigate("/history");
              }}
            >
              <RestoreIcon />
            </IconButton>
            <p>History</p>

            <Button
              onClick={() => {
                localStorage.removeItem("token");
                navigate("/auth");
              }}
            >
              Logout
            </Button>
          </div>
        </div> */}

        <AppBar
          position="sticky"
          color="transparent"
          elevation={0}
          className="app-header"
        >
          <Toolbar>
            <Link to="/" className="logo-link">
              <Video className="logo-icon" />
              <Typography variant="h5" component="h1" className="logo-text">
                Connectly
              </Typography>
            </Link>

            <Box sx={{ flexGrow: 1 }} />

            <Box className="header-actions">
              <Link to="/history" className="nav-link">
                <Clock className="nav-icon" />
                <span>History</span>
              </Link>
              <div
                role="button"
                className="logout-link"
                onClick={() => {
                  localStorage.removeItem("token");
                  navigate("/auth");
                }}
              >
                <LogOut className="nav-icon" />
                <span>LOGOUT</span>
              </div>
            </Box>
          </Toolbar>
        </AppBar>

        {/* <div className="meetContainer">
          <div className="leftPanel">
            <div>
              <h2>Providing Quality Video Call Just Like Quality Education</h2>

              <div style={{ display: "flex", gap: "10px" }}>
                <TextField
                  onChange={(e) => setMeetingCode(e.target.value)}
                  id="outlined-basic"
                  label="Meeting Code"
                  variant="outlined"
                />
                <Button onClick={handleJoinVideoCall} variant="contained">
                  Join
                </Button>
              </div>
            </div>
          </div>
          <div className="rightPanel">
            <img srcSet="/logo3.png" alt="" />
          </div>
        </div> */}

        <Container component="main" className="main-content">
          <Box className="content-grid">
            {/* Left Column - Text and Form */}
            <Box className="content-left">
              <Box className="headline-container">
                <Typography variant="h3" component="h2" className="headline">
                  Connect Seamlessly, Anywhere, Anytime
                  {/* <span className="headline-accent">
                    
                  </span> */}
                </Typography>
                <Typography variant="body1" className="subheadline">
                  Experience smooth, secure, and real-time video meetings
                  tailored for effortless collaboration and connection.
                </Typography>
              </Box>

              <Paper elevation={3} className="form-container">
                <form className="meeting-form">
                  <Box className="form-field">
                    <Typography
                      variant="subtitle2"
                      component="label"
                      htmlFor="meetingCode"
                    >
                      Enter Meeting Code
                    </Typography>
                    <TextField
                      id="meetingCode"
                      placeholder="Eg. gdht34"
                      variant="outlined"
                      fullWidth
                      onChange={(e) => setMeetingCode(e.target.value)}
                      // label="Meeting Code"
                    />
                  </Box>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                    className="join-button"
                    onClick={handleJoinVideoCall}
                  >
                    JOIN MEETING
                  </Button>
                </form>
                <Divider className="form-divider" />
                {/* <Box className="create-meeting">
                  <Button
                    variant="outlined"
                    color="primary"
                    className="create-button"
                  >
                    Create New Meeting
                  </Button>
                </Box> */}
              </Paper>
            </Box>

            {/* Right Column - Illustration */}
            <Box className="content-right">
              <Box className="illustration-container">
                <img
                  src="/logo3.png"
                  alt="Video call illustration"
                  className="main-illustration"
                />
                <div className="decoration-circle circle-1"></div>
                <div className="decoration-circle circle-2"></div>
              </Box>
            </Box>
          </Box>
        </Container>

        {/* Footer */}
        <Box component="footer" className="app-footer">
          <Container>
            <Typography variant="body2" align="center" color="textSecondary">
              © {new Date().getFullYear()} Connectly. All rights reserved.
            </Typography>
          </Container>
        </Box>
      </>
    );
}

const AuthenticatedHomeComponent = withAuth(HomeComponent);
export default AuthenticatedHomeComponent;