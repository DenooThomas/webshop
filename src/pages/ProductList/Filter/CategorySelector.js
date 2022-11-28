import React, { useContext } from 'react'
import { createUseStyles } from 'react-jss'
import { ProductContext } from 'context/ProductContext'
import { flexColumn } from 'assets/flexer'

const useStyles = createUseStyles({
    categorySelectorCont: {
        ...flexColumn('nowrap', 'flex-start', 'flex-start'),
    },
    categoryCont: {
        marginBottom: 5,

        '& input': {
            marginRight: 5,
        },
        '& label': {
            textTransform: 'capitalize'
        },
    }
})
function CategorySelector({selectCategory}) {
    const {categories} = useContext(ProductContext)

    const classes = useStyles()
  return (
    <div className={classes.categorySelectorCont}>
        {categories && categories.map(category => {
            return (
            <div key={category} className={classes.categoryCont}>
            <input onClick={(e) => selectCategory(e.target.value)} type='checkbox' id={category} value={category} />
            <label htmlFor={category}>{category}</label>
            </div>)
        })}
    </div>
  )
}

export default CategorySelector