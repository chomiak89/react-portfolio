import React from "react";
import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";
import "../stylesheets/about.css";

//IMAGES
import test from "../images/about/test.png";

export default function About() {
  return (
    <div className="aboutMainContainer">
      <div className="aboutParallaxContainer">
        <ParallaxBanner className="aboutPB">
          <ParallaxBannerLayer
            className="aboutTransitionPBL"
            image={test}
          ></ParallaxBannerLayer>
        </ParallaxBanner>
      </div>
    </div>
  );
}
