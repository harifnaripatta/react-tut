import React from "react";

const RestaurentCard = ({ resName, cuisine }) => {
  return (
    <div className="res-card">
      <img
        src="https://mayurapa.com/wp-content/uploads/2022/05/chicken-biriyani.jpg"
        alt="food image"
      />
      <h3>{resName}</h3>
      <h4>{cuisine}</h4>
      <h4>4.4 stars</h4>
      <h4>38 minutes</h4>
    </div>
  );
};

export default RestaurentCard;
