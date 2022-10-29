import React from "react";
import NavDropdown from "react-bootstrap/NavDropdown";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Button } from "react-bootstrap";
import { FacebookShareButton, TwitterShareButton } from "react-share";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const HeaderNavbar = () => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logout = () => {
    dispatch({
      type: "LOGOUT",
      payload: null,
    });
    window.localStorage.removeItem("token");
    navigate("/admin");
  };

  const shareUrl = "https://google.com"; // Petq e dnel pythonic ekac nkari urly
  return (
    <Navbar.Collapse>
      <Nav className="me-auto">
        {auth === null && (
          <Link className="nav-link" to="/login">
            Admin
          </Link>
        )}
        {auth !== null && window.location.pathname === "/" && (
          <Link className="nav-link" to="/admin">
            Back to Admin
          </Link>
        )}
      </Nav>
      <Nav className="d-flex gap-3">
        {auth !== null && (
          <div className="nav-link pointer" onClick={logout}>
            Log out
          </div>
        )}
      </Nav>
      {auth === null && (
        <Nav>
          <NavDropdown title={<i className="bi bi-share "> Share </i>}>
            <NavDropdown.Item>
              <FacebookShareButton url={shareUrl}>
                <i className="bi bi-facebook me-1"></i> Facebook
              </FacebookShareButton>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <TwitterShareButton url={shareUrl}>
                <i className="bi bi-twitter me-1"></i> Twitter
              </TwitterShareButton>
            </NavDropdown.Item>
          </NavDropdown>
          <Button className="rounded">
            <i className="bi bi-download"></i> Save
          </Button>
        </Nav>
      )}
    </Navbar.Collapse>
  );
};

export default HeaderNavbar;
