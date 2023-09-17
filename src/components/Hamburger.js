import React from "react";

// STYLES
import "../stylesheets/hamburger.css";

export default function Hamburger({ isOpen }) {
  return (
    <div className="hamburger-main">
      <div
        className="hamburger-sub hamburger-piece-1"
        style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0)" }}
      ></div>
      <div
        className="hamburger-sub hamburger-piece-2"
        style={{
          transform: isOpen ? "translateX(100%)" : "translateX(0)",
          opacity: isOpen ? "0" : "1",
        }}
      ></div>
      <div
        className="hamburger-sub hamburger-piece-3"
        style={{ transform: isOpen ? "rotate(-45deg)" : "rotate(0)" }}
      ></div>
    </div>
  );
}
