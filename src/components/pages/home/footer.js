import React from 'react'

function Footer() {
    return (
      <div>
        <footer>
          <div className="arrival">
            <div className="arrival-text">
              <h3>New Arrival</h3>
              <h2>
                {" "}
                NEW LORIAN EVENING <br /> DRESS DESIGN
              </h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                <br /> Et molestiae corporis nemo quaerat ea dicta repudiandae !
              </p>
            </div>
            <div className="card-image"></div>
          </div>
          <div className="news">
            <div className="news-info">
              <h3>LATEST NEWS</h3>
              <h2>OUR NEW DRESS COLLECTION</h2>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                <br /> Vero, inventore?
              </p>
              <div className="button"> click here</div>
            </div>
          </div>
        </footer>
      </div>
    );
}

export default Footer
