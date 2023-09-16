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
            <a href="#">LinkedIn</a>
          </li>
          <li>
            <a href="#">
              <span>GITHUB</span>
            </a>
          </li>
          <li>
            <a href="#">Email</a>
          </li>
        </ul>
        <p>Copyright 2023 - Kamil Chomiak</p>
      </div>
    </div>
  );
}
