import React from 'react'
import { createUseStyles } from 'react-jss'

import CategorySelector from './CategorySelector'
import PriceSelector from './PriceSelector'

const useStyles = createUseStyles({
    filterCont: {
        
    }
})

function Filter() {

    const classes = useStyles()
  return (
    <div className={classes.filterCont}>
        <CategorySelector />
        <PriceSelector />
    </div>
  )
}

export default Filter