import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";



function LandingPage() {
const router = useNavigate();

  return (
    <div className="landingPage-container">
      <nav>
        <div className="navHeader">
          <h2>Connectly</h2>
        </div>
        <div className="navlist">
          <p onClick={() => { router("/gyfg15") }}>Join as Guest</p>
          <Link to={"/auth"} style={{ textDecoration: "none", color: "#fff" }}>
            Register
          </Link>

          <div role="button">
            <Link
              to={"/auth"}
              style={{ textDecoration: "none", color: "#fff" }}
            >
              Login
            </Link>
          </div>
        </div>
      </nav>

      <div className="landing-main-container">
        <div>
          <h1>
            <span style={{ color: "#ff9839" }}>Connect</span> with your loved
            ones!
          </h1>
          <p>Cover a distance by Connectly</p>
          <div role="button">
            <Link to={"/auth"}>Get Started</Link>
          </div>
        </div>
        <div>
          <img src="/mobile.png" alt=""></img>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
