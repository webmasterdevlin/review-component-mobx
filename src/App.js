import React, { Component } from "react";
import "./App.css";
import { decorate, observable, action, computed } from "mobx";
import Form from "./components/Form";
import Dashboard from "./components/Dashboard";
import Reviews from "./components/Reviews";
import Store from "./Store";
import DevTools from "mobx-react-devtools";

decorate(Store, {
  reviewList: observable,
  addReview: action,
  removeReview: action,
  loadListOfReviews: action,
  averageScore: computed,
  reviewCount: computed
});

const reviewStore = new Store();

class App extends Component {
  render() {
    return (
      <div className="container">
        <Form store={reviewStore} />
        <Dashboard store={reviewStore} />
        <Reviews store={reviewStore} />

        <DevTools />
      </div>
    );
  }
}

export default App;
