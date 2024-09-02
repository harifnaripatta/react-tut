import React from "react";
import RestaurentCard from "./RestaurentCard";

const Body = () => {
  restaurants = [
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
  ];
  return (
    <div className="body">
      <div className="search">
        <input type="search" placeholder="Search Your Food" />
      </div>
      <div className="res-container">
        <RestaurentCard
          resName="Meghana Foods"
          cuisine="Biriyani, North Indian, Asian"
        />
        <RestaurentCard resName="KFC" cuisine="Burger,Fast Food" />
        <RestaurentCard />
        <RestaurentCard />
      </div>
    </div>
  );
};

export default Body;
