import React from 'react'
import Slider from "./slider/Slider"
import Categories from './Categories'
import PopularFetch from './popularFetch/PopularFetch'
import Newsletter from "./newsletter/Newsletter"
import Socials from "./socials/Socials"
import Footer from "../components/footer/Footer"

function Landing({onAddToCart}) {
    return (
        <div>
            <Slider/>
            <Categories/>
            <PopularFetch onAddToCart={onAddToCart}/>
            <Socials/>
            <Newsletter/>
            <Footer/>
            
            
        </div>
    )
}

export default Landing
