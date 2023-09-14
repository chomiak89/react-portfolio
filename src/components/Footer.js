import React from "react";
import "../stylesheets/footer.css";

//IMAGES
import test from "../images/footer/test.png";

export default function Footer() {
  return (
    <div className="footer-main-container">
      <h1>footer</h1>
      <div className="footer-clip-path"></div>
      <img className="footer-image" src={test}></img>
    </div>
  );
}
