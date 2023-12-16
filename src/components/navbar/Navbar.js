import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav class="slidemenu">
      <input
        type="radio"
        name="slideItem"
        id="slide-item-1"
        class="slide-toggle"
        checked
      />
      <label for="slide-item-1">
        <span class="material-symbols-outlined icon">home</span>
        <p>Home</p>
      </label>
      <input
        type="radio"
        name="slideItem"
        id="slide-item-2"
        class="slide-toggle"
      />
      <label for="slide-item-2">
        <span class="material-symbols-outlined icon">spoke</span>
        <p>About</p>
      </label>

      <input
        type="radio"
        name="slideItem"
        id="slide-item-3"
        class="slide-toggle"
      />
      <label for="slide-item-3">
        <span class="icon material-symbols-outlined">contract</span>
        <p>Work</p>
      </label>
      <input
        type="radio"
        name="slideItem"
        id="slide-item-4"
        class="slide-toggle"
      />
      <label for="slide-item-4">
        <span class="material-symbols-outlined icon">perm_phone_msg</span>
        <p>Contact</p>
      </label>
      <div class="clear"></div>
      <div class="slider">
        <div class="bar"></div>
      </div>
    </nav>
  );
};

export default Navbar;
