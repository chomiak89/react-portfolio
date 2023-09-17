import { React, useState } from "react";

//COMPONENTS
import Hamburger from "./Hamburger";

// STYLES
import "../stylesheets/nav.css";

export default function Nav() {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  };

  return (
    <div className="nav-bar-container">
      <div className="nav-bar">
        <h1>KC</h1>
        <ul style={{ display: hamburgerOpen ? "inline" : "none" }}>
          <li>
            <a href="#">LINKEDIN</a>
          </li>
          <li>
            <a href="#">GITHUB</a>
          </li>
          <li>
            <a href="#">EMAIL</a>
          </li>
        </ul>
        <div className="nav-hamburger" onClick={toggleHamburger}>
          <Hamburger isOpen={hamburgerOpen}></Hamburger>
        </div>
      </div>
    </div>
  );
}
