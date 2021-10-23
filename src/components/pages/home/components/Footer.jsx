import React from 'react'
import "./Footer.css"

function Footer() {
    return (
      <div>
        <div className="footer-container">
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
            <div className="footer-right">
              <img
                src=""
                alt="https://media.glamour.com/photos/5cc9bd1080911dec300bc131/master/pass/0501_nomakeup_river.jpg"
              />
            </div>
          </div>
          <div className="footer-right-container">
            <div className="footer-right">
              <p>LATEST NEWS</p>
              <h3>OUR NEW MAKEUP COLLECTION</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing
                <br /> elit. Excepturi, fugit.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Footer
