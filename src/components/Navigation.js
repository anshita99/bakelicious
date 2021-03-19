import React from "react";
import { NavLink } from "react-router-dom";
import { Animated } from "react-animated-css";
import { Navbar, Badge, NavDropdown } from "react-bootstrap";
import { useSelector } from "react-redux";

const Navigation = () => {
  const stateBasket = useSelector((state) => state.basket);

  return (
    <Navbar className="d-flex flex-wrap" style={navbar}>
      <Animated
        animationIn="slideInDown"
        className="d-flex justify-content-between col-12"
      >
        <NavLink className="text-white text-decoration-none pr-3" to="/home">
          <h3 className="font-weight-bold">Bakelicious</h3>
        </NavLink>

        <NavDropdown title="Dropdown">
        <br/>
          
          
          <NavLink
            className="text-white text-decoration-none pr-3" to="/signup"
          >
         
          <NavDropdown.Item href="signup">SignOut</NavDropdown.Item>
          
          </NavLink>
          <NavLink className="text-white text-decoration-none pr-3" to="/movie">
            <NavDropdown.Item href="movie">Suggested Movies at Bakelicious!!</NavDropdown.Item>
          </NavLink>
        </NavDropdown>

        <div>
          <NavLink className="text-white text-decoration-none pr-3" to="/home">
            Home
          </NavLink>
          <NavLink className="text-white text-decoration-none pr-3" to="/about">
            About
          </NavLink>

          <NavLink
            className="text-white text-decoration-none pr-3"
            to="/contact"
          >
            Contact
          </NavLink>
          <NavLink
            className="text-white text-decoration-none pr-3"
            to="/checkout"
          >
            <i
              className="fa fa-lg fa-shopping-cart"
              style={{ color: "darkcyan" }}
            ></i>
            <Badge pill variant="info">
              {stateBasket.numberOfUnits}
            </Badge>
          </NavLink>
        </div>
      </Animated>
    </Navbar>
  );
};

const navbar = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  minHeight: "100px",
  zIndex: "15",
  background: "rgba(0, 0, 0, 0.75)",
};

export default Navigation;
