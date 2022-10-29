import { flexColumn } from "assets/flexer"
import { createUseStyles } from "react-jss"

const useStyles = createUseStyles({
    priceSelectorCont: {
        ...flexColumn('nowrap', 'flex-start', 'flex-start'),
    }
})

function PriceSelector() {

    const classes = useStyles()
  return (
    <div className={classes.priceSelectorCont}>
        <label htmlFor='minPrice'>Minimum price</label>
        <input type='number' id='minPrice'></input>
        <label htmlFor='maxPrice'>Maximum price</label>
        <input type='number' id='maxPrice'></input>
    </div>
  )
}

export default PriceSelector