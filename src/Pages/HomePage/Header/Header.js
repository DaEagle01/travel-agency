import "./Header.css";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <div>
      <Navbar className="" bg="white" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <Link to="/home">
              <img
                src="http://g5p6r6b9.stackpathcdn.com/travlio/wp-content/uploads/2020/08/logo.png"
                width="100"
                height="50"
                className="d-inline-block align-top"
                alt="MedSev"
              />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />

          <Navbar.Collapse className="justify-content-end">
            <Nav
              className="mx-auto my-2 my-lg-0 justify-content-end"
              navbarScroll
            >
              <Link className="nav-bar text-primary mx-2 text-dark" to="/home">
                Home
              </Link>
              <Link
                className="nav-bar text-primary mx-2 text-dark"
                to="/allplaces"
              >
                Destinations
              </Link>

              {user?.displayName || user?.email ? (
                <Link
                  className="nav-bar text-primary mx-2 text-dark"
                  to="/managebooking"
                >
                  Manage Booking
                </Link>
              ) : (
                <a href="#nothing"></a>
              )}

              

              <Link className="nav-bar text-primary mx-2 text-dark" to="/about">
                About
              </Link>
              <Link
                className="nav-bar text-primary mx-2 text-dark"
                to="/contact"
              >
                Contact
              </Link>
            </Nav>

            <Navbar.Text className="ps-5">
              {user?.displayName || user?.email ? (
                <Link to="/login" onClick={logOut} className="btn btn-info">
                  Logout
                </Link>
              ) : (
                <Link to="/login" className="btn btn-info">
                  Login
                </Link>
              )}
              {user?.displayName || user?.email ? (
                <p className="fw-bold">{user?.displayName}</p>
              ) : (
                <a href="#nothing"></a>
              )}
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
