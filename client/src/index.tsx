import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { ApolloProvider } from "@apollo/react-hooks";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import ApolloClient from "apollo-boost";
import { Home } from "./routes/Home";
import { Register } from "./routes/Register";
import 'semantic-ui-css/semantic.min.css'

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
});




ReactDOM.render(
  <ApolloProvider client={client}>
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/register" component={Register} />
        <Route exact path="/">
          <App />
        </Route>
      </Switch>
    </Router>
  </ApolloProvider>,
  document.getElementById("root")
);
