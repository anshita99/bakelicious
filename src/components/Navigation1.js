import React from "react";
import { NavLink } from "react-router-dom";
import { Animated } from "react-animated-css";
import { Navbar } from "react-bootstrap";


const Navigation1 = () => {
  

  return (
    <Navbar className="d-flex flex-wrap" style={navbar}>
      <Animated
        animationIn="slideInDown"
        className="d-flex justify-content-between col-12"
      >
        <NavLink className="text-white text-decoration-none pr-3" to="/">
          <h3 className="font-weight-bold">Bakelicious</h3>
        </NavLink>
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
    
    export default Navigation1;
