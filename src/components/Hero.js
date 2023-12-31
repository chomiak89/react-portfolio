import React from "react";
import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";
import "../stylesheets/hero.css";

//COMPONENTS
import Nav from "./Nav";

//IMAGES
import circle from "../images/hero/circle.png";
import gradient from "../images/hero/gradient.png";
import lines from "../images/hero/lines.png";
import palm from "../images/hero/palm.png";
import name from "../images/hero/name.png";
import triangle from "../images/hero/triangle.png";

export default function Hero() {
  return (
    <div className="hero-main-container">
      <Nav></Nav>
      <div className="heroParallaxContainer">
        <ParallaxBanner className="heroPB">
          <ParallaxBannerLayer image={gradient}></ParallaxBannerLayer>
          <ParallaxBannerLayer
            image={lines}
            translateY={[0, 25]}
            scale={[0.4, 0.8, "easeOutCubic"]}
          ></ParallaxBannerLayer>
          <ParallaxBannerLayer image={palm}></ParallaxBannerLayer>
          <ParallaxBannerLayer image={circle}></ParallaxBannerLayer>
          <ParallaxBannerLayer image={triangle}></ParallaxBannerLayer>
          <ParallaxBannerLayer image={name}></ParallaxBannerLayer>
        </ParallaxBanner>
      </div>
    </div>
  );
}
