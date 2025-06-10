import React from "react";
import food from "../../assets/food.png";
import "./style.css";

function Header() {
  return (
    <div className="header">
      <div className="header-left">
        <div>
          <h1>Making time a good time</h1>
          <h1>by making food the good</h1>
          <h1>food.</h1>
        </div>

        <p>
          There are many things are needed to start the Fast Food Business. You
          need not only Just Food Stalls with Persons but also specialized
          equipment,
        </p>
        <div className="header-btns">
          <button className="order_now">Order Now</button>
          <button className="food_details">Food Details</button>
        </div>
      </div>
      <img src={food} alt="" />
    </div>
  );
}

export default Header;
