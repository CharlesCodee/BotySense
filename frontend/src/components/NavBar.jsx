import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="containerNavBar">
      <div className="nav-content">
        {/* Logo */}
        <NavLink to="/" className="logo" onClick={closeMenu}>
          <img className="boty" src="/images/BotySense.webp" alt="logo" />
        </NavLink>

        {/* Burger icon */}
        <div
          className={`burger ${menuOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Links */}
        <div className={`links ${menuOpen ? "active" : ""}`}>
          <NavLink to="Shampooings" onClick={closeMenu}>
            <h3>Shampooing</h3>
          </NavLink>
          <NavLink to="Cremes" onClick={closeMenu}>
            <h3>Crèmes</h3>
          </NavLink>
          <NavLink to="Rouges" onClick={closeMenu}>
            <h3>Rouge à lèvres</h3>
          </NavLink>
          <NavLink to="Colorations" onClick={closeMenu}>
            <h3>Colorations</h3>
          </NavLink>
          <NavLink to="Panier" onClick={closeMenu}>
            <img className="panier" src="/images/paniers.png" alt="panier" />
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
