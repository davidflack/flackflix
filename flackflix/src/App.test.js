import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, withRouter } from "react-router-dom";
import App from "./App";

it("renders without crashing", () => {
  const div = document.createElement("div");
  const AppWithRouter = withRouter(App);
  ReactDOM.render(
    <Router>
      <AppWithRouter />
    </Router>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
