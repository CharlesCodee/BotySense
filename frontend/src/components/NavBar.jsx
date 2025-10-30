import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div className="containerNavBar">
      <div className="links">
        <NavLink to="/">
          <div className="logo">
            <img className="boty" src="/images/BotySense.webp" alt="logo" />
          </div>
        </NavLink>
        <NavLink to="Shampooings">
          <h3>Shampooing</h3>
        </NavLink>
        <NavLink to="Cremes">
          <h3>Crèmes</h3>
        </NavLink>

        <NavLink to="Rouges">
          <h3>rouge à lèvre</h3>
        </NavLink>
        <NavLink to="Colorations">
          <h3>colorations</h3>
        </NavLink>
        <NavLink to="Panier">
          <img className="panier" src="/images/paniers.png" alt="" />
        </NavLink>
      </div>
    </div>
  );
}

export default NavBar;
