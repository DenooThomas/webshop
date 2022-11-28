import React from 'react'
import { createUseStyles } from 'react-jss'

import CategorySelector from './CategorySelector'
// import PriceSelector from './PriceSelector'

const useStyles = createUseStyles({
    filterCont: {
        width: 200,
    }
})

function Filter({selectCategory}) {

    const classes = useStyles()
  return (
    <div className={classes.filterCont}>
        <CategorySelector selectCategory={selectCategory}/>
        {/* <PriceSelector /> */}
    </div>
  )
}

export default Filter