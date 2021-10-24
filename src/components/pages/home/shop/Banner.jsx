import React from 'react'
import "./Banner.css"

function Banner({forSale}) {
    return (
      <div className="shop-container">
        <div className="shop-left">
          <div className="shop-left-container">
            <div className="shop-title">
              black Up Matifying Fluid Foundation
            </div>
            <div className="shop-description">
              The new Matifying Fluid Foundation formula keeps all its
              historical benefits: <br/>a fluid texture that stretches easily, a
              medium coverage that adapts to skin with blemishes<br/> and a very
              natural finish!
            </div>
            <div className="shop-price">$29.00 </div>
            <div className="shop-button">
              <button>Add to cart</button>
               <div className = "price"><h1>Was <s>$499</s> Now $199</h1></div>
            </div>
          </div>
        </div>
        <div className="shop-right">
          <img
            src="https://www.hera.com/int/en/products/__icsFiles/afieldfile/2020/01/07/20191220_final_facedesigningblusher_01_pdp_thumb.png"
            alt="imagemine"
          />
        </div>
      </div>
    );
}

export default Banner
