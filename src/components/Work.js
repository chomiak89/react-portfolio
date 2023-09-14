import React from "react";
import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";
import "../stylesheets/work.css";

//IMAGES
import brewlist from "../images/work/brewlist.png";

export default function Work() {
  return (
    <div className="work-main-container">
      <div className="work-positioning-container">
        <div className="work-parallax-container">
          <ParallaxBanner className="work-pb-container">
            <ParallaxBannerLayer className="work-left-line-divider"></ParallaxBannerLayer>
          </ParallaxBanner>
          <div className="projects-main-container">
            <div className="projects-header">
              <h1>PROJECTS</h1>
            </div>
            <div className="projects-container">
              <div className="project">
                <div className="project-image"></div>
                <h1>Brew List</h1>
              </div>
              <div className="project">
                <div className="project-image"></div>
                <h1>PR1</h1>
              </div>
              <div className="project">
                <div className="project-image"></div>
                <h1>PR1</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
