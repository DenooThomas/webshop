import React from 'react'
import { createUseStyles } from 'react-jss'

import { flexRow } from 'assets/flexer'
import star_full from "assets/images/star_full_12.png"
// import star_half from "assets/images/star_half_12.png"

const useStyles = createUseStyles({
    ratingCont: {
        ...flexRow('nowrap', 'flex-start', 'center'),
        marginBottom: 10,

        '& div':{
            ...flexRow('nowrap', 'flex-start', 'center'),

            '& img': {
                width: 12,
                height: 12
            },
        },
        '& p': {
            marginLeft: 5,
            fontSize: '0.8rem',
        },
    },
})

function Rating({rate, count}) {

    const roundedRating = (Math.round(rate * 2) / 2).toFixed(1)
    const stars = []
    for(let i = 0; i<5; i++){
        if(i < roundedRating){
            stars.push(<img src={star_full} alt='star rating' key={i}></img>)
        } else {
            stars.push(<div style={{height: '12px', width: '12px'}} key={i}/>)
        }
    }
    
    const classes = useStyles()
  return (
    <div className={classes.ratingCont}>
        <div>{stars.length > 0 && stars}</div>
        <p>({count})</p>
    </div>
  )
}

export default Rating