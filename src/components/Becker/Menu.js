import React from "react";
import "../../pages/assets/css/main.css";

const Menu = () => {
  return (
    <header>
      <div class="nav-toggle">
        <p>Menu</p>
        <span></span>
      </div>
      <ul class="nav">
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#three-slide">Work</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </header>
  );
};

export default Menu;
