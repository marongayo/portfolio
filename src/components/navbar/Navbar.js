import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const location = useLocation();

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
        <li className={`list ${location.pathname === "/" ? "active" : ""}`}>
          <Link to="/">
            <span className="icon">
              <ion-icon name="home-outline"></ion-icon>
            </span>
            <span className="text">Home</span>
          </Link>
        </li>

        <li
          className={`list ${location.pathname === "/profile" ? "active" : ""}`}
        >
          <Link to="/profile">
            <span className="icon">
              <ion-icon name="person-outline"></ion-icon>
            </span>
            <span className="text">Profile</span>
          </Link>
        </li>

        <li
          className={`list ${location.pathname === "/contact" ? "active" : ""}`}
        >
          <Link to="/contact">
            <span className="icon">
              <ion-icon name="chatbubble-outline"></ion-icon>
            </span>
            <span className="text">Contact</span>
          </Link>
        </li>

        <li className={`list ${location.pathname === "/work" ? "active" : ""}`}>
          <Link to="/work">
            <span className="icon">
              <ion-icon name="newspaper-outline"></ion-icon>
            </span>
            <span className="text">Work</span>
          </Link>
        </li>

        <div className="indicator"></div>
      </ul>
    </div>
  );
};

export default Navbar;
