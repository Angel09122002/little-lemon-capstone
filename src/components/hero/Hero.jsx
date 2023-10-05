import React from "react";
import "../../styles/hero.css";
import Heroimg from "../../assets/heroimg.jpg";
import { NavLink } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero-background">
      <div className="hero-container">
        <div className="section-left">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            we are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>

          {/*change <a>to set the routes */}
          <a href="reservation">
            <button className="btn-hero">Reserve a Table</button>
          </a>
        </div>
        <div className="section-right">
          <div className="img-box">
            <img src={Heroimg} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
