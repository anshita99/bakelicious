import React, { Component } from "react";

import {  Link } from "react-router-dom";

import { Button, Form, FormGroup, Label, Input } from "reactstrap";

import "./login.css";

export default class Login extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  constructor(props) {
    super(props);

    this.state = {
      email: "",

      password: "",

      errors: {},
    };

    this.handleChangeEmail = this.handleChangeEmail.bind(this);

    this.handleChangePassword = this.handleChangePassword.bind(this);

    this.submituserRegistrationForm = this.submituserRegistrationForm.bind(
      this
    );
  }

  handleChangeEmail(e) {
    this.setState({ email: e.target.value });
  }

  handleChangePassword(e) {
    this.setState({ password: e.target.value });
  }

  submituserRegistrationForm(e) {
    e.preventDefault();

    if (this.validateForm()) {
      var data = {
        user_email: this.state.email,

        password: this.state.password,
      };

      var headers = {
        "Content-Type": "application/json",
      };

      console.log(data);
    }
  }

  validateForm() {
    let errors = {};

    let formIsValid = true;

    if (!this.state.email) {
      formIsValid = false;

      errors["email"] = "*Please enter your email-ID.";
    }

    if (typeof this.state.email !== "undefined") {
      var pattern = new RegExp(
        /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
      );

      if (!pattern.test(this.state.email)) {
        formIsValid = false;

        errors["email"] = "*Please enter valid email-ID.";
      }
    }

    if (!this.state.password) {
      formIsValid = false;

      errors["password"] = "*Please enter your password.";
    }

    if (typeof this.state.password !== "undefined") {
      if (
        !this.state.password.match(
          /^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/
        )
      ) {
        formIsValid = false;

        errors["password"] = "*Please enter the correct password.";
      }
    }

    this.setState({
      errors: errors,
    });

    var data1 = localStorage.getItem("data");
    var data2 = JSON.parse(data1);

    if (
      data2.user_email === this.state.email &&
      data2.password === this.state.password
    ) {
      if (formIsValid) {
        alert("Successfully Logged In!!");
        window.location.replace("/home");

        // window.open("/home","self");
      }
    } else {
      alert("Register First");
    }

    return formIsValid;
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-4 login-sec">
              <h2 className="text-center">Login</h2>

              <Form
                method="post"
                name="userRegistrationForm"
                onSubmit={this.submituserRegistrationForm}
              >
                <FormGroup>
                  <Label for="exampleEmail">Email</Label>

                  <Input
                    type="email"
                    name="email"
                    id="exampleEmail"
                    value={this.state.email}
                    onChange={this.handleChangeEmail}
                    placeholder="Email Id"
                  />

                  <div className="errorMsg">{this.state.errors.email}</div>
                </FormGroup>

                <FormGroup>
                  <Label for="examplePassword">Password</Label>

                  <Input
                    type="password"
                    name="password"
                    id="examplePassword"
                    value={this.state.password}
                    onChange={this.handleChangePassword}
                    placeholder="Password"
                  />

                  <div className="errorMsg">{this.state.errors.password}</div>
                </FormGroup>

                <FormGroup check>
                  <Label check>
                    <Input type="checkbox" /> Remember Me
                  </Label>
                </FormGroup>

                <div className="d-flex justify-content-center mt-3 login_container">
                  <Button type="submit" className="btn btn-login">
                    Submit
                  </Button>
                </div>

                <div className="mt-4">
                  <div className="d-flex justify-content-center links">
                    Don't have an account?{" "}
                    <Link href="/signup" to="/signup" className="linka">
                      Sign Up
                    </Link>
                  </div>
                </div>
              </Form>
            </div>

            <div className="col-md-8 banner-sec"></div>
          </div>
        </div>
      </div>
    );
  }
}
