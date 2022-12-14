import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
import Form from "./containers/Form";
import "./formik-demo.css";

const App = () => (
  <div className="app">
    <Provider store={store}>
      <Form />
    </Provider>
  </div>
);

render(<App />, document.getElementById("root"));
