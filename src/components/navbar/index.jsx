import React from "react";
import "./style.css";

function Navbar() {
  return (
    <div className="navbar">
      <ul className="left">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/f/f9/Food_Network_New_Logo.png"
          alt=""
        />
        <li id="home">Home</li>
        <li>About us</li>
        <li>Menu</li>
        <li>Features</li>
        <li>Contact us</li>
      </ul>

      <button>Booking Now</button>
    </div>
  );
}

export default Navbar;
