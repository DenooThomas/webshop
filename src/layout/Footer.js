import React from 'react'
import { createUseStyles } from 'react-jss'

import { flexRow } from 'assets/flexer'
import { Colors } from 'assets/colors'

import person_white_48 from "assets/images/person_48.png"
import chatbubble_white_48 from "assets/images/chatbubble_48.png"

 const useStyles = createUseStyles({
    service: {
        ...flexRow('nowrap', 'space-between', 'center'),
        color: Colors.white,
        width: '100%',
        backgroundColor: Colors.blue,
        padding: '32px 60px',
    },
    title: {
        width: '33.3%',
    },
    item : {
        ...flexRow('nowrap', 'center', 'center'),
        width: '33.3%',
        flex: 1, 
        padding: '0 20px',
        boxSizing: 'content-box',
        '& img':{
            display: 'block',
            width: 40,
            height: 40,
        },
    },
    textCont: {
        marginLeft: 20,
        fontSize: '0.9rem',
        '& p': {
            fontWeight: 200,
        }
    },
    nav: {
        ...flexRow('nowrap', 'flex-start', 'center'),
        padding: '12px 60px',
        fontSize: '0.95rem',
        fontWeight: 200,
    },
    navItem: {
        marginRight: 50,
    }
 })
 function Footer() {

    const classes = useStyles()
   return (
     <footer>
        <div className={classes.service}>
            <h2 className={classes.title}>Service & contact</h2>
            <div className={classes.item}>
                <img src={person_white_48} alt='profile icon'></img>
                <div className={classes.textCont}>
                    <p><strong>Access your account</strong></p>
                    <p>Track your order, pay invoices or return an article.</p>
                </div>
            </div>
            <div className={classes.item}>
                <img src={chatbubble_white_48} alt='service chat'></img>
                <div className={classes.textCont}>
                    <p><strong>Need assistance?</strong></p>
                    <p>We're here to help. Our customer service is availble day and night.</p>
                </div>
            </div>
        </div>
        <div className={classes.nav}>
            <div className={`${classes.navService} ${classes.navItem}`}>
                <p><strong>Customer service</strong></p>
                <ul>
                    <li>Contact</li>
                    <li>Delivery</li>
                </ul>
            </div>
            <div className={`${classes.navAbout} ${classes.navItem}`}>
                <p><strong>About swole.com</strong></p>
                <ul>
                    <li>Voordelen</li>
                    <li>News</li>
                </ul>
            </div>
            <div className={`${classes.navBis} ${classes.navItem}`}>
                <p><strong>Business</strong></p>
                <ul>
                    <li>Sell</li>
                    <li>Order in bulk</li>
                </ul>
            </div>
        </div>
     </footer>
   )
 }
 
 export default Footer