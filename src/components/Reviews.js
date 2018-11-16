import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import reviewStore from ".././Store";
import List from "./List";

export class Reviews extends Component {
  render() {
    return (
      <div className="reviewsWrapper">
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-header">
                <i className="fa fa-comments" /> Reviews
              </div>
              <ul className="list-group list-group-flush">
                {reviewStore.reviewList.map((e, i) => (
                  <List key={i} data={e} />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default inject("reviewStore")(observer(Reviews));
