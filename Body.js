import React from "react";
import RestaurentCard from "./RestaurentCard";

const Body = () => {
  return (
    <div className="body">
      <div className="search">
        <input type="search" placeholder="Search Your Food" />
      </div>
      <div className="res-container">
        <RestaurentCard />
        <RestaurentCard />
        <RestaurentCard />
        <RestaurentCard />
        <RestaurentCard />
        <RestaurentCard />
        <RestaurentCard />
        <RestaurentCard />
      </div>
    </div>
  );
};

export default Body;
