import React from "react"
import CategoryFetch from "../../../CategoryFetch"
import { FairSkin, MediumSkin, DarkSkin} from "../../../requests"
import "./Trial.css"

export const fetchFairSkin = () => {
    return (
      <div>
        <div className="category-banner banner1">
          <h1>FAIR SKIN</h1>
          <p>We have got you covered.</p>
          <div className="skin-pallete">
              <div className="palette fair-palette-1"></div>
              <div className="palette fair-palette-2"></div>
              <div className="palette fair-palette-3"></div>
              <div className="palette fair-palette-4"></div>
          </div>
        </div>
        <CategoryFetch fetchUrl={FairSkin} />
      </div>
    );
}
export const fetchMediumSkin = () => {
    return (
      <div>
        <div className="category-banner banner2">
          <h1>MEDIUM SKIN</h1>
          <p>We have got you covered.</p>
          <div className="skin-pallete">
              <div className="palette medium-palette-1"></div>
              <div className="palette medium-palette-2"></div>
              <div className="palette medium-palette-3"></div>
              <div className="palette medium-palette-4"></div>
          </div>
        </div>
        <CategoryFetch fetchUrl={MediumSkin} />
      </div>
    );
}
export const fetchDarkSkin = () => {
    return (
      <div>
        <div className="category-banner banner3">
          <h1>DARK SKIN</h1>
          <p>We have got you covered.</p>
          <div className="skin-pallete">
              <div className="palette dark-palette-1"></div>
              <div className="palette dark-palette-2"></div>
              <div className="palette dark-palette-3"></div>
              <div className="palette dark-palette-4"></div>
          </div>
        </div>
        <CategoryFetch fetchUrl={DarkSkin} />
      </div>
    );
}

