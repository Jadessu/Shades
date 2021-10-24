import React from 'react'
import styled from "styled-components";
import "./Slider.css"
import mainVideo from "../../images/mainVideo.mp4"

// const Container = styled.div`
//   width: 100%;
//   height: 100vh;
//   display: flex;
//   position: relative;
//   overflow: hidden;
  
// `;



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
