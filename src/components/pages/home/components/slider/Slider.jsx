import React from 'react'
import "./Slider.css"
import mainVideo from "../../images/mainVideo.mp4"





function Slider() {
    return (
      <div>
        <div className="hero-container">
          <video autoPlay loop muted>
            <source src={mainVideo} type="video/mp4" />
          </video>

          <h1 className="reveal-text">
            {/* <span>S</span>
            <span>H</span>
            <span>A</span>
            <span>D</span>
            <span>E</span>
            <span>S</span> */}
            SHADES
            </h1>
          <p>Wear the right foundation for your skin.</p>
        </div>
      </div>
    );
}

export default Slider
