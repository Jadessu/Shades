import React from 'react'
import Slider from './Slider'
import Categories from './Categories'
import PopularFetch from './PopularFetch'

function Landing({onAddToCart}) {
    return (
        <div>
            <Slider/>
            <Categories/>
            <PopularFetch onAddToCart={onAddToCart}/>
            
        </div>
    )
}

export default Landing
