import React, { useEffect } from "react";
import "./Navbar.css";

const Navbar = () => {
  useEffect(() => {
    const list = document.querySelectorAll(".list");

    function activeLink() {
      list.forEach((item) => item.classList.remove("active"));
      this.classList.add("active");
    }

    list.forEach((item) => item.addEventListener("click", activeLink));

    return () => {
      // Cleanup: remove event listeners when the component is unmounted
      list.forEach((item) => item.removeEventListener("click", activeLink));
    };
  }, []); // Empty dependency array ensures that this effect runs only once after the initial render

  return (
    <div className="navigation">
      <ul>
        <li className="list active">
          <a href="#">
            <span className="icon">
              <ion-icon name="home-outline"></ion-icon>
            </span>
            <span className="text">Home</span>
          </a>
        </li>

        <li className="list">
          <a href="#">
            <span className="icon">
              <ion-icon name="person-outline"></ion-icon>
            </span>
            <span className="text">Profile</span>
          </a>
        </li>

        <li className="list">
          <a href="#">
            <span className="icon">
              <ion-icon name="chatbubble-outline"></ion-icon>
            </span>
            <span className="text">Contact</span>
          </a>
        </li>

        <li className="list">
          <a href="#">
            <span className="icon">
              <ion-icon name="newspaper-outline"></ion-icon>
            </span>
            <span className="text">Work</span>
          </a>
        </li>

        <div className="indicator"></div>
      </ul>
    </div>
  );
};

export default Navbar;
