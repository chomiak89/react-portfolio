import React from "react";
import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";
import "../stylesheets/work.css";

//IMAGES

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
                <div className="project-image project-1">
                  <div className="project-image-overlay"></div>
                  <div className="project-image-text fadeIn-left">
                    <h3>view project</h3>
                  </div>
                </div>
                <h1>Brew List</h1>
              </div>
              <div className="project">
                <div className="project-image project-2">
                  <div className="project-image-overlay"></div>
                  <div className="project-image-text fadeIn-left">
                    <h3>view project</h3>
                  </div>
                </div>
                <h1>Coming soon...</h1>
              </div>
              <div className="project">
                <div className="project-image project-3">
                  <div className="project-image-overlay"></div>
                  <div className="project-image-text fadeIn-left">
                    <h3>view project</h3>
                  </div>
                </div>
                <h1>Coming soon...</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
