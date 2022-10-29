import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import HeaderLogo from "./HeaderLogo";
import HeaderNavbar from "./HeaderNavbar";

const Header = () => {
  return (
    <div>
      <Navbar
        className="bg-white shadow-sm "
        collapseOnSelect
        expand="lg"
        variant="dark"
      >
        <Container>
          <HeaderLogo />
          <HeaderNavbar />
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
