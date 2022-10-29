import React from 'react'
import { createUseStyles } from 'react-jss'

import { Colors } from 'assets/colors'

const useStyles = createUseStyles({
    sortingSelectorCont: {
        height: '100%',
        border: `1px solid ${Colors.grey}`
    }
})


function SortingSelector() {

    const classes = useStyles()
  return (
    <select className={classes.sortingSelectorCont} name='SortingSelector' id='SortingSelector'>
        <option value='popularity'>Popularity</option>
        <option value='price0'>Price low - high</option>
        <option value='price1'>Price high - low</option>
        <option value='rating'>Rating</option>
    </select>
  )
}

export default SortingSelector