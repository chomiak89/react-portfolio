import React from "react";
import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";
import "../stylesheets/about.css";

//IMAGES
import developerText from "../images/about/developer-text.png";
import laptop from "../images/about/laptop.png";

export default function About() {
  return (
    <div className="aboutMainContainer">
      <div className="about-header-container">
        <div className="topline">
          <div className="topline-text">
            <h1>SOFTWARE ENGINEER</h1>
          </div>
        </div>
        <div className="corner-divider"></div>
        <div className="about-subheader">
          <div className="about-subheader-text">
            <h1>BASED IN SOUTH FLORIDA</h1>
          </div>
        </div>
        <div className="about-body">
          <div className="about-body-text">
            <p>HTML - CSS - JS - REACT - JAVA - PYTHON</p>
            <p>SQL - AWS - DOCKER - KUBERNETES - JENKINS</p>
            <p>COBOL - JCL - DB2</p>
          </div>
        </div>
      </div>
      <div className="aboutParallaxContainer">
        <ParallaxBanner className="aboutPB">
          <ParallaxBannerLayer
            className="aboutDevTextPBL"
            image={developerText}
            translateY={[10, 25]}
            shouldAlwaysCompleteAnimation="true"
          ></ParallaxBannerLayer>
          <ParallaxBannerLayer
            className="aboutLaptopPBL"
            image={laptop}
          ></ParallaxBannerLayer>
        </ParallaxBanner>
      </div>
    </div>
  );
}
