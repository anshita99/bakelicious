import React, { PureComponent } from "react";
import ReactDOM from "react-dom";
import { Navbar } from "react-bootstrap";

class Footer extends PureComponent {
  render() {
    return ReactDOM.createPortal(
      <Navbar style={footer} className="mt-5" bg="light">
        <small>@Bakelicious</small>
      </Navbar>,
      document.getElementById("footer-root")
    );
  }
}

const footer = {
  position: "relative"
};

export default Footer;
