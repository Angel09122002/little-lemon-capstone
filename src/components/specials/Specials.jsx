import React from "react";
import "../../styles/special.css";
import SpecialsCards from "../specials/SpecialCards";

const Specials = () => {
  return (
    <div className="specials-container">
      <div className="special-title">
        <h1>This Week's Specials</h1>
        <div className="btn-container">
          <button className="btn-menu">Online Menu</button>
        </div>
      </div>
      <SpecialsCards/>
    </div>
  );
};

export default Specials;
