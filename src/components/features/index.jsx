import React from "react";
import "./style.css";

function Features() {
  return (
    <div className="features">
      <p
        style={{
          fontFamily: "sans-serif",
          letterSpacing: "2px",
          color: "#DC780B",
          display: "flex",
          justifyContent: "center",
          fontSize: "16px",
          marginTop: "100px",
        }}
      >
        FEATURES
      </p>
      <h2
        style={{
          fontFamily: "Philosopher",
          display: "flex",
          justifyContent: "center",
          marginTop: "10px",
        }}
      >
        Food with a New Passion
      </h2>

      <div className="feature-cards">
        <div className="feature-card">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRelg-VivTJ5gRbuHqX7NjRf4TsF9uAQs2CNA&s"
            alt=""
          />
          <h3>Quality Food</h3>
          <p style={{ fontFamily: "sans-serif" }}>
            It can be a very secure path to earn good money and make you very
            successful creative entrepreneur.
          </p>
        </div>
        <div className="feature-card">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRelg-VivTJ5gRbuHqX7NjRf4TsF9uAQs2CNA&s"
            alt=""
          />
          <h3>Food Delivery</h3>
          <p style={{ fontFamily: "sans-serif" }}>
            It can be a very secure path to earn good money and make you very
            successful creative entrepreneur.
          </p>
        </div>
        <div className="feature-card">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRelg-VivTJ5gRbuHqX7NjRf4TsF9uAQs2CNA&s"
            alt=""
          />
          <h3>Super Taste</h3>
          <p style={{ fontFamily: "sans-serif" }}>
            It can be a very secure path to earn good money and make you very
            successful creative entrepreneur.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Features;
