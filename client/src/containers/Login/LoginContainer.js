import React, { Component } from "react";
import PropTypes from "prop-types";

import { firebaseAuth } from "../../config/firebase";

import { connect } from "react-redux";

import Login from "./Login";

import { Redirect, withRouter } from "react-router-dom";

class LoginContainer extends Component {
  static propTypes = {};

  constructor() {
    super();
    this.state = {
      emailInputValue: "",
      passwordInputValue: "",
      loginError: { message: "" }
    };
  }
  handleUpdateEmail = ({ target: { value } }) => {
    this.setState({ emailInputValue: value });
  };
  handleUpdatePassword = ({ target: { value } }) => {
    this.setState({ passwordInputValue: value });
  };

  login = () => {
    if (this.state.emailInputValue && this.state.passwordInputValue) {
      firebaseAuth
        .signInWithEmailAndPassword(
          this.state.emailInputValue,
          this.state.passwordInputValue
        )
        .catch(error => {
          // Handle Errors here.
          this.setState({ loginError: error });
        });
    }
  };

  render() {
    const { from } = this.props.location.state || {
      from: { pathname: "/items" }
    };
    return !this.props.authenticated ? (
      <Login
        login={this.login}
        emailInputValue={this.state.emailInputValue}
        passwordInputValue={this.state.passwordInputValue}
        loginError={this.state.loginError}
        handleUpdateEmail={this.handleUpdateEmail}
        handleUpdatePassword={this.handleUpdatePassword}
      />
    ) : (
      <Redirect to={from} />
    );
  }
}

const mapStateToProps = state => ({
  authenticated: state.auth.authenticated,
  userLoading: state.auth.userLoading
});

export default connect(mapStateToProps)(LoginContainer);
