import React from "react";
import { Animated } from "react-animated-css";
import { Container, Table } from "react-bootstrap";
import BackHomeBtn from "./button/BackHomeBtn";

const Contact = () => {
  return (
    <Container style={contact}>
      <h5 className="p-4 text-center">Contact Information</h5>
      <Animated animationIn="pulse">
        <Table className="pt-4" hover>
          <thead>
            <tr>
              <th style={cell} className="bg-light">
                Phone
              </th>
              <th style={cell}>Address</th>
              <th style={cell} className="bg-light">
                Mail
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={cell} className="bg-light">
                9845763210
              </td>
              <td style={cell}>Delhi</td>
              <td style={cell} className="bg-light">
                anshi@mail.com
              </td>
            </tr>
            <tr>
              <td style={cell} className="bg-light">
                9874563210
              </td>
              <td style={cell}>Delhi</td>
              <td style={cell} className="bg-light">
                kiran@mail.com
              </td>
            </tr>
            <tr>
              <td style={cell} className="bg-light">
                6578941236
              </td>
              <td style={cell}>Delhi</td>
              <td style={cell} className="bg-light">
                hello@mail.com
              </td>
            </tr>
          </tbody>
        </Table>
      </Animated>
      <BackHomeBtn />
    </Container>
  );
};

const contact = {
  height: "700px"
};

const cell = {
  wordBreak: "break-all"
};

export default Contact;
