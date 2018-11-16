import React from "react";
import StarRatingComponent from "react-star-rating-component";
import { inject, observer } from "mobx-react";
import reviewStore from "../Store";

const List = ({ data }) => {
  return (
    <button
      className="list-group-item"
      onClick={e => {
        e.preventDefault();
        reviewStore.removeReview(data.id);
      }}
    >
      <li>
        <div className="float-left">{data.review}</div>
        <div className="float-right">
          <StarRatingComponent name="reviewRate" starCount={data.stars} />
        </div>
      </li>
    </button>
  );
};

export default inject("reviewStore")(observer(List));
