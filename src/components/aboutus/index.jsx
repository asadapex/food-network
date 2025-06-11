import React from "react";
import opa from "../../assets/opa.jpg";
import "./style.css";

function About() {
  return (
    <div className="about">
      <img src={opa} alt="" />

      <div className="about-left">
        <p
          style={{
            color: "#DC780B",
            fontFamily: "sans-serif",
            letterSpacing: "2px",
          }}
        >
          ABOUT US
        </p>

        <div>
          <h2>Food Stalls with Persons but to</h2>
          <h2>Product marketing plane</h2>
          <h2>catlogues etc to.</h2>
        </div>

        <div>
          <p>
            There are many things are needed to start the Fast Food Business.
          </p>
          <p>You need not only Just Food Stalls with Persons but also</p>
          <p>equipment make your marketing plane Effective.</p>
        </div>

        <div className="about-btn">
          <button>Read More</button>
        </div>
      </div>
    </div>
  );
}

export default About;
