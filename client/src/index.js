import React from "react";
import ReactDOM from "react-dom";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import registerServiceWorker from "./registerServiceWorker";

import { Provider } from "react-redux";
import { ApolloProvider } from "react-apollo";
import client from "./config/apolloClient";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from "react-router-dom";

import store from "./redux/store";

import muiTheme from "./config/theme";

import PrivateRoute from "./components/PrivateRoute";

import Layout from "./components/Layout";
import Login from "./containers/Login";
import Items from "./containers/Items";
import ItemsContainer from "./containers/Items";
import Profile from "./containers/Profile";
import ProfileContainer from "./containers/Profile";
import ItemCardList from "./components/ItemCardList";
import ShareStepper from "./containers/Share";
import NotFound from "./containers/NotFound";

import "./index.css";
import {
  updateAuthState,
  userLoading
} from "./redux/modules/auth";
import { firebaseAuth } from "./config/firebase";
import LoginContainer from "./containers/Login/LoginContainer";

// local variable gotProfile's purpose is so the subscribe
// method is only run once.
let gotProfile = false;
store.subscribe(() => {
  const values = store.getState();
  if (
    values.authenticated !== "LOADING_PROFILE" &&
    !gotProfile
  ) {
    gotProfile = true;
    store.dispatch(userLoading(false));
  }
});

firebaseAuth.onAuthStateChanged(user => {
  if (user) {
    store.dispatch(updateAuthState(user));
  } else {
    store.dispatch(updateAuthState(false));
  }
});

const Boomtown = () => (
  <MuiThemeProvider muiTheme={muiTheme}>
    <Provider store={store}>
      <ApolloProvider client={client}>
        <Router>
          <Layout>
            <Switch>
              <Route exact path="/" component={LoginContainer} />
              <PrivateRoute
                exact
                path="/items"
                component={ItemsContainer}
              />
              <Route
                exact
                path="/profile/:userid"
                component={Profile}
              />
              <Route exact path="/*" component={NotFound} />
              <Route
                exact
                path="/share"
                component={ShareStepper}
              />
            </Switch>
          </Layout>
        </Router>
      </ApolloProvider>
    </Provider>
  </MuiThemeProvider>
);

ReactDOM.render(<Boomtown />, document.getElementById("root"));
registerServiceWorker();
