import React from 'react'
import "./Banner.css"
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import "./slider-animations.css";
import { Link} from "react-router-dom"


function Banner({forSale}) {
  const content = [
    {
      title: "SHOP OUR FAIR & LIGHT SKIN CATEGORY",
      description:
        "Tip: For fair skin tones, these are the two shades you should use when it comes to highlighter, while champagne, pale gold and pink highlighters complement light skin tones best. But be careful with pearlescent sheen—too much can leave you looking like an ice-princess. Just a touch will do!",
      link: "/fairskin",
      image: "https://i.imgur.com/6jSjfl8.jpg",
      
    },
    {
      title: "SHOP OUR MEDIUM SKIN CATEGORY",
      description:
        "Tip: The trick with medium skin tones is to stay away from highlighters that are too pink. Look for peach shades and creamy beige hues. Apply along on your cheekbones and brow bones for a look to remember.",
      link: "/mediumskin",
      image: "https://i.imgur.com/2SdYAqX.jpg",
      
    },
    {
      title: "SHOP OUR DARK SKIN CATEGORY",
      description:
        "Tip: Darker skin tones get the best out of gold and bronze highlighters. The richer your skin tone is, the more saturated you gold makeup can be. Try a few before you take them home—the wrong shade can leave a grey cast.",
      link: "/darkskin",
      image: "https://i.imgur.com/LrztOZs.jpg",
      
    },
  ];
    return (
      <Slider className="slider-wrapper" autoplay={2000}>
        {content.map((item, index) => (
          <div
            key={index}
            className="slider-content"
            style={{
              background: `url('${item.image}') no-repeat center center / cover `
              
            }}
          >
            <div className="inner">
              <h1>{item.title}</h1>
              <p>{item.description}</p>
              <Link to={item.link}>
              <button className="popular-btn">Shop Now</button>
              </Link>
            </div>
            
          </div>
        ))}
      </Slider>
    );
}

export default Banner
