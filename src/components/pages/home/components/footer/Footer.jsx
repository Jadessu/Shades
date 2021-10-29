import React from 'react'
import "./Footer.css"

function Footer() {
    return (
      <div className="footer-background">
        <div className=" container footer-container">
          <div className="footer-left-container">
            <div className="footer-left">
              <p>NEW ARRIVAL</p>
              <h3>
                OUR NEW HOURGLASS <br />
                VANISH SEAMLESS SET
              </h3>
              <p>
                A Revolutionary foundation stick with the coverage of a
                concealer,
                <br /> the fluidity of a liquid , and the weightlessness of a
                powder in a longwearing waterproof formula for undetectable full
                coverage.
              </p>
            </div>
            <div className="footer-left-2">
              <img
                src="https://thebeautylookbook.com/wp-content/uploads/2016/07/Hourglass2BVanish2BSeamless2BFinish2BFoundation2Band2BBrush2BReviewed.jpg"
               
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
                <span>
                  <i class="fas fa-long-arrow-alt-right"></i>
                </span>
              </div>
              <h3>OUR NEW MAKEUP COLLECTION</h3>
              <p>
                Follow us on instagram for our new makeup
                <br /> collection and tips.
              </p>
            </div>
            <div className="footer-right-2"></div>
          </div>
        </div>
      </div>
    );
}

export default Footer
