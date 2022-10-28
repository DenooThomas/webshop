import { useContext } from 'react'
import {Link} from "react-router-dom"
import {createUseStyles} from 'react-jss'

import {flexRow} from "assets/flexer"
import { CartContext } from 'context/CartContext'
import cart_white_24 from "assets/images/cart_white_24.png"
import { Colors } from 'assets/colors'

const useStyles = createUseStyles({
  header: {
    ...flexRow('nowrap', 'center', 'center'),
    width: '100%',
    backgroundColor: Colors.blue,
    padding: '12px 60px',
    marginBottom: 35,
  },
  headerCont: {
    ...flexRow('nowrap', 'space-between', 'center'),
    width: '100%',
  },
  home: {
    color: Colors.white,
    fontWeight: '900',
    fontSize: '2.5rem'
  },
  linkCont: {
    ...flexRow('nowrap', 'space-between', 'center')
  },
  link: {
    color: Colors.white,
    fontWeight: '200',
  },
  cartCont: {
    position: 'relative',
    
    '& span': {
      width: '1.4rem',
      height: '1.4rem',
      lineHeight: '1.4rem',
      position: 'absolute',
      top: 0,
      left: 0,
      borderRadius: '50%',
      backgroundColor: Colors.yellow,
      color: Colors.blue,
      fontSize: '0.8rem',
      transform: 'translate(-10px, -10px)',
      textAlign: 'center'
    }
  }

})

function Header() {
  
  const {cart} = useContext(CartContext)
  const classes = useStyles()
  return (
    <nav className={classes.header}>
        <div className={classes.headerCont}>
          <Link className={`${classes.home}`} to={'/'}>bol.com</Link>
          <Link className={classes.link} to={'productlist'}>Product List</Link>
          <Link className={classes.link} to={'cart'}>
            <div className={classes.cartCont}>
              <span>{cart.length}</span>
              <img src={cart_white_24} alt='cart'></img>
            </div>
          </Link>
        </div>
    </nav>
  )
}

export default Header