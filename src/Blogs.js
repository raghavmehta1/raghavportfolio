import React from "react"
import "./styles.css"
import { FaLocationArrow } from "react-icons/fa";
import download from './download.jpeg';

export default function RecentProject() {
  return (
    
    <div className="recent-project-1">
        <div className="title-4">
        <p className="work">Blog</p>
        <p className="recent-project"><b>Read my blog</b></p>
      </div>
      <div className="group-246">
        <div className="works">
          <div className="group-524">
            <div className="project-01">
              <div className="txt">
                <div className="title">
                  <p className="ux-case-study"><b> ux case study</b></p>
                  <p className="bally-website-research">
12 examples of portfolio website
                  </p>
                </div>
              </div>

            </div>
            <div className="project-02">
              <div className="txt-1">
                <div className="title-1">
                  <p className="ux-case-study-1">UX case study</p>
                  <p className="bally-website-research-1">
                  12 examples of portfolio website
                  </p>
                  <img>
                  
                  </img>
                </div>
                <FaLocationArrow />

              </div>
              <FaLocationArrow />

            </div>
          </div>
          <div className="group-082">
            <div className="project-03">
              <div className="txt-2">
                <div className="title-2">
                  <p className="ux-case-study-2">UX case study</p>
                  <p className="bally-website-research-2">
                  12 examples of portfolio website
                  </p>
                </div>
                <FaLocationArrow />

              </div>
              <FaLocationArrow />

            </div>
            <div className="project-04">
              <div className="txt-3">
                <div className="title-3">
                  <p className="ux-case-study-3">UX case study</p>
                  <p className="bally-website-research-3">
                  12 examples of portfolio website
                  </p>
                </div>

              </div>
                <FaLocationArrow />
            </div>
          </div>
        </div>
        <div className="button-1">
          <div className="button">
            <p className="load-more">Load more</p>
<FaLocationArrow />

          </div>
        </div>
      </div>
      
    </div>
  )
}
