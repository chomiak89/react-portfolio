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
        <ul>
          <li>LinkedIn</li>
          <li>
            <span>Instagram</span>
          </li>
          <li>Email</li>
        </ul>
        <p>Copyright 2023 - Kamil Chomiak</p>
      </div>
    </div>
  );
}
