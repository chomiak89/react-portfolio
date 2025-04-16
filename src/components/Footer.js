import React from "react";
import "../stylesheets/footer.css";

//IMAGES
import test from "../images/footer/test.png";

export default function Footer() {
  return (
    <div className="footer-main-container">
      <div className="footer-clip-path"></div>
      <div className="footer-image-container">
        <img className="footer-image" src={test}></img>
      </div>
      <div className="footer-content-container">
        <ul className="footer-links-list">
          <li>
            <a href="http://www.linkedin.com/in/kamil-chomiak" target="_blank">
              LinkedIn
            </a>
          </li>
          <li>
            <a href="https://github.com/chomiak89" target="_blank">
              <span>GITHUB</span>
            </a>
          </li>
          <li>
            <a href="mailto: kamil.chomiak@outlook.com">Email</a>
          </li>
        </ul>
        <p>Copyright 2025 {"\u00A9"} Kamil Chomiak</p>
      </div>
    </div>
  );
}
