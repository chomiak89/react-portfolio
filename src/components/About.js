import React from "react";
import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";
import "../stylesheets/about.css";

//IMAGES
import line from "../images/about/line.png";
import developerText from "../images/about/developer-text.png";

export default function About() {
  return (
    <div className="aboutMainContainer">
      <div className="aboutParallaxContainer">
        <ParallaxBanner className="aboutPB">
          <ParallaxBannerLayer
            className="aboutDevTextPBL"
            image={developerText}
            translateY={[15, 25]}
          ></ParallaxBannerLayer>
          <ParallaxBannerLayer
            className="aboutTransitionPBL"
            image={line}
          ></ParallaxBannerLayer>
          <ParallaxBannerLayer className="aboutSeTextPBL">
            <h1>SOFTWARE ENGINEER</h1>
          </ParallaxBannerLayer>
          <ParallaxBannerLayer className="aboutBodyTextPBL">
            <h1>BASED IN SOUTH FLORIDA</h1>
            <p>HTML - CSS - JS - REACT - JAVA - PYTHON</p>
            <p>SQL - AWS - DOCKER - KUBERNETES - JENKINS</p>
            <p>COBOL - JCL - DB2</p>
          </ParallaxBannerLayer>
        </ParallaxBanner>
      </div>
    </div>
  );
}
