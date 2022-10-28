import React from 'react'

import star_full from "assets/images/star_full_12.png"
import star_half from "assets/images/star_half_12.png"

function RatingStars({rate}) {
    const roundedRating = (Math.round(rate * 2) / 2).toFixed(1)
    const stars = []
    for(let i = 0; i<5; i++){
        if(i < roundedRating){
            stars.push(<img src={star_full} alt='star rating' key={i}></img>)
        } else {
            stars.push(<div style={{height: '12px', width: '12px'}} key={i}/>)
        }
    }
    return stars
}

export default RatingStars



