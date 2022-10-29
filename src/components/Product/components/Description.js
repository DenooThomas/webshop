import React from 'react'
import {createUseStyles} from "react-jss"

import { Colors } from 'assets/colors'

const useStyles = createUseStyles({
    description: {
        marginRight: 40,
        '& p':{
            position: 'relative',
            '&::after': {
                content: '" More"',
                position: 'absolute',
                width: 100,
                height: 100,
                color: Colors.blue
            }
        }
    }
})

function Description({description}) {

    const classes = useStyles()
  return (
    <div className={classes.description}>
        <p>{description.substring(0, 155)}..</p>
    </div>
  )
}

export default Description