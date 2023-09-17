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
            <a href="http://www.linkedin.com/in/kamil-chomiak" target="_blank">
              LINKEDIN
            </a>
          </li>
          <li>
            <a href="https://github.com/chomiak89" target="_blank">
              GITHUB
            </a>
          </li>
          <li>
            <a href="mailto: kamil.chomiak@outlook.com">EMAIL</a>
          </li>
        </ul>
        <div className="nav-hamburger" onClick={toggleHamburger}>
          <Hamburger isOpen={hamburgerOpen}></Hamburger>
        </div>
      </div>
    </div>
  );
}
