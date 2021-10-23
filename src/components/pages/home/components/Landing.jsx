import React from 'react'
import Slider from './Slider'
import Categories from './Categories'
import PopularFetch from './PopularFetch'
import Newsletter from './Newsletter'

function Landing({onAddToCart}) {
    return (
        <div>
            <Slider/>
            <Categories/>
            <PopularFetch onAddToCart={onAddToCart}/>
            <Newsletter/>
            
            
        </div>
    )
}

export default Landing
