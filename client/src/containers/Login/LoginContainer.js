import React, { Component } from "react";
import PropTypes from "prop-types";

import { firebaseAuth } from "../../config/firebase";

import Login from "./Login";

class LoginContainer extends Component {
  static propTypes = {};

  constructor() {
    super();
    this.state = {
      email: "",
      password: ""
    };
  }

  login = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
      });
  };

  render() {
    return <Login login={this.login} />;
  }
}

export default LoginContainer;
