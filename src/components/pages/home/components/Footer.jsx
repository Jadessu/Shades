import React from 'react'
import "./Footer.css"

function Footer() {
    return (
      <div className=" container footer-container">
        <div className="footer-left-container">
          <div className="footer-left">
            <p>NEW ARRIVAL</p>
            <h3>
              NEW LORIAN EVENING <br />
              DRESS DESIGN
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing <br />
              elit. Ut id officiis, ipsum quasi quos maxime?
            </p>
          </div>
          <div className="footer-left-2">
            <img
              src="https://www.byrdie.com/thmb/2f6zOauor7R_BUK4i6uNeKux1Y0=/1000x1000/filters:no_upscale():max_bytes(150000):strip_icc()/coffee_2-8e7a576f79c94670b8ebe745bebcdc74.jpg"
              width="100px"
              alt=""
            />
          </div>
          <div className="footer-left-3">
            <i class="fab fa-instagram"></i>
          </div>
        </div>
        <div className="footer-right-container">
          <div className="footer-right">
            <div className="latest-news">
              <p>LATEST NEWS</p>
              <span>Arrow</span>
            </div>
            <h3>OUR NEW MAKEUP COLLECTION</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing
              <br /> elit. Excepturi, fugit.
            </p>
          </div>
          <div className="footer-right-2"></div>
        </div>
      </div>
    );
}

export default Footer
