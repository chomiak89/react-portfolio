import React from "react";
import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";
import "../stylesheets/work.css";

//IMAGES

export default function Work() {
  return (
    <div className="work-main-container">
      <div className="work-parallax-container">
        <ParallaxBanner className="work-pb-container">
          <ParallaxBannerLayer>
            <h1>test</h1>
          </ParallaxBannerLayer>
          <ParallaxBannerLayer className="work-left-line-divider"></ParallaxBannerLayer>
        </ParallaxBanner>
      </div>
    </div>
  );
}
