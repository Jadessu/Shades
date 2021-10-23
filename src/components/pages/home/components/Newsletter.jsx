import React from 'react'
import "./Newsletter.css"

function Newsletter() {
    return (
      <div>
        <div className="news-container">
          <div className="news-title">
            <h2>Newsletter</h2>
          </div>
          <div className="news-description">
            Get timely updates from your favorite products.
          </div>
          <div className="news-input">
            <input className="my-input" placeholder="Your email" />
            <button className="news-button">
              <i class="fas fa-paper-plane"></i>
            </button>
          </div>
        </div>
      </div>
    );
}

export default Newsletter
