import React, { Component } from "react";
import "./App.css";
import Form from "./components/Form";
import Dashboard from "./components/Dashboard";
import Reviews from "./components/Reviews";
import { Provider } from "mobx-react";
import reviewStore from "./Store";

import DevTools from "mobx-react-devtools";

const stores = {
  reviewStore
};

class App extends Component {
  render() {
    return (
      <Provider {...stores}>
        <div className="container">
          <Form />
          <Dashboard />
          <Reviews />
          <DevTools />
        </div>
      </Provider>
    );
  }
}

export default App;
