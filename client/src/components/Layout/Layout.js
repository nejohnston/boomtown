import React from "react";
import PropTypes from "prop-types";

import HeaderBar from "../HeaderBar";

import CircularProgress from "material-ui/CircularProgress";

import { connect } from "react-redux";

import { withRouter } from "react-router-dom";

import "./styles.css";

const Loader = () => (
  <div className="loadingWrapper">
    <CircularProgress color="white" />
  </div>
);

const Layout = ({ children, authenticated, userLoading }) =>
  userLoading ? (
    <Loader />
  ) : (
    <div className="appContentWrapper">
      <div className="appHeader">{authenticated && <HeaderBar />}</div>
      <div className="appContent">{children}</div>
      {/* And a footer here, but not on the login route... */}
    </div>
  );

Layout.defaultProps = {
  children: null
};

Layout.propTypes = {
  children: PropTypes.node
};

const mapStateToProps = state => ({
  authenticated: state.auth.authenticated,
  userLoading: state.auth.userLoading
});

export default withRouter(connect(mapStateToProps)(Layout));
