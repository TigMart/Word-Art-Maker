import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

// Images
import logo from "../header/images/logo.png";

const HeaderLogo = () => {
  return (
    <div>
      <Navbar.Brand>
        <Link to="/">
          <img src={logo} alt="Logo" width="40" />
        </Link>
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    </div>
  );
};

export default HeaderLogo;
