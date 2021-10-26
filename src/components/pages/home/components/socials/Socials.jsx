import React from 'react'
import "./Socials.css"

function Socials() {
    return (
      <div>
        <div className="socials-background">
          <div className="container">
            <section id="instagram">
              <h2>Follow Us On Instragram</h2>
              <div className="grid__gallery">
                <div id="img1" className="img__gallery">
                  <img src="https://images.unsplash.com/photo-1541088120351-d566aa6ac53f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80" />
                  <div className="hover__effect">
                    <i className="fab fa-instagram"></i>
                  </div>
                </div>
                <div id="img2" className="img__gallery">
                  <img src="https://images.unsplash.com/photo-1503236823255-94609f598e71?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1469&q=80" />
                  <div className="hover__effect">
                    <i className="fab fa-instagram"></i>
                  </div>
                </div>
                <div id="img3" className="img__gallery">
                  <img src="https://images.unsplash.com/photo-1583241800698-e8ab01830a07?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" />
                  <div className="hover__effect">
                    <i className="fab fa-instagram"></i>
                  </div>
                </div>
                <div id="img4" className="img__gallery">
                  <img src="https://images.unsplash.com/photo-1571875257727-256c39da42af?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80" />
                  <div className="hover__effect">
                    <i className="fab fa-instagram"></i>
                  </div>
                </div>
                <div id="img5" className="img__gallery">
                  <img src="https://images.unsplash.com/photo-1522108098940-de49801b5b40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80" />
                  <div className="hover__effect">
                    <i className="fab fa-instagram"></i>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    );
}

export default Socials
