import React from "react";
import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";
import "../stylesheets/about.css";

//IMAGES
import developerText from "../images/about/developer-text.png";
import laptop from "../images/about/laptop.png";
import test from "../images/about/test.png";
import cloud from "../images/about/cloud.png";

export default function About() {
  return (
    <div className="about-main-container">
      <div className="about-header-container">
        <div className="topline"></div>
        <div className="corner-divider"></div>
      </div>
      <div className="about-parallax-container">
        <ParallaxBanner className="about-parallax-banner">
          <div className="about-text-container">
            <div className="about-header">
              <div className="about-header-text">
                <h1>SOFTWARE ENGINEER</h1>
              </div>
            </div>
            <div className="about-subheader">
              <div className="about-subheader-text">
                <h1>BASED IN SOUTH FLORIDA</h1>
              </div>
            </div>
            <div className="about-body">
              <div className="about-body-text">
                <p className="about-body-text-p1">HTML CSS JS REACT</p>
                <p className="about-body-text-p2">JAVA JUNIT PYTHON</p>
                <p className="about-body-text-p3">
                  <span>SQL</span> KUBERNETES <span>JENKINS</span> ANSIBLE
                  TERRAFORM
                </p>
                <p className="about-body-text-p4">
                  <span>COBOL</span> JCL SAS <span>DB2</span>
                </p>
                <p className="about-body-text-p5">
                  AWS LINUX GIT GITLAB DOCKER
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
            translateY={[20, 10]}
            scale={[0.9, 0.9, "easeOutCubic"]}
            shouldAlwaysCompleteAnimation="true"
          ></ParallaxBannerLayer>

          <ParallaxBannerLayer
            className="about-cloud-PBL"
            image={cloud}
            translateY={[30, -5]}
            scale={[0.7, 1, "easeOutCubic"]}
            shouldAlwaysCompleteAnimation="true"
          ></ParallaxBannerLayer>

          <ParallaxBannerLayer className="about-left-line-divider"></ParallaxBannerLayer>
          {/* <ParallaxBannerLayer
            className="left-line-divider-deco"
            image={test}
          ></ParallaxBannerLayer> */}
        </ParallaxBanner>
      </div>
    </div>
  );
}
