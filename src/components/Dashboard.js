import React from "react";
import reviewStore from ".././Store";

import { inject, observer } from "mobx-react";

function Dashboard() {
  return (
    <div className="dashboardSection">
      <div className="row">
        <div className="col-md-6">
          <div className="card text-white bg-primary mb-6">
            <div className="card-body">
              <div className="row">
                <div className="col-md-6">
                  <i className="fa fa-comments fa-5x" />
                </div>
                <div className="col-md-6 text-right">
                  <p id="reviewCount">{reviewStore.reviewCount}</p>
                  <p className="announcement-text">Reviews</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card text-white bg-success mb-6">
            <div className="card-body">
              <div className="row">
                <div className="col-md-6">
                  <i className="fa fa-star fa-5x" />
                </div>
                <div className="col-md-6 text-right">
                  <p id="averageScores">
                    {reviewStore.averageScore ? reviewStore.averageScore : 0}
                  </p>
                  <p className="announcement-text">Average Scores</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default inject("reviewStore")(observer(Dashboard));
