import React from "react";
import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";
import "../stylesheets/about.css";

//IMAGES
import developerText from "../images/about/developer-text.png";
import laptop from "../images/about/laptop.png";
import test from "../images/about/test.png";

export default function About() {
  return (
    <div className="aboutMainContainer">
      <div className="about-header-container">
        <div className="topline"></div>
        <div className="corner-divider"></div>
      </div>
      <div className="about-parallax-container">
        <ParallaxBanner className="about-parallax-banner">
          <div className="about-text-container">
            {/* test */}
            <div className="about-header">
              <div className="about-header-text">
                <h1>SOFTWARE ENGINEER</h1>
              </div>
            </div>
            {/* end test */}

            <div className="about-subheader">
              <div className="about-subheader-text">
                <h1>BASED IN SOUTH FLORIDA</h1>
              </div>
            </div>
            <div className="about-body">
              <div className="about-body-text">
                <p>
                  <span>HTML</span> CSS <span>JS</span> REACT <span>JAVA</span>{" "}
                  PYTHON
                </p>
                <p>
                  <span>SQL</span> AWS <span>DOCKER</span> KUBERNETES{" "}
                  <span>JENKINS</span>
                </p>
                <p>
                  <span>COBOL</span> JCL <span>DB2</span>
                </p>
              </div>
            </div>
          </div>
          <ParallaxBannerLayer
            className="about-dev-text-PBL"
            image={developerText}
            translateY={[15, 45]}
            shouldAlwaysCompleteAnimation="true"
          ></ParallaxBannerLayer>
          <ParallaxBannerLayer
            className="about-laptop-PBL"
            image={laptop}
            translateY={[15, -7]}
            scale={[0.9, 0.9, "easeOutCubic"]}
            shouldAlwaysCompleteAnimation="true"
          ></ParallaxBannerLayer>

          <ParallaxBannerLayer className="left-line-divider"></ParallaxBannerLayer>
          <ParallaxBannerLayer
            className="left-line-divider-deco"
            image={test}
          ></ParallaxBannerLayer>
        </ParallaxBanner>
      </div>
    </div>
  );
}
