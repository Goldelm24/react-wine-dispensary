import React from 'react';
import { Navbar } from '../Navbar';
import { makeStyles } from '@material-ui/core';

const useAbout = makeStyles({
    background: {
        backgroundImage: `linear-gradient(7deg, rgba(24,25,159,1) 0%, rgba(9,27,238,1) 0%, rgba(252,176,69,1) 100%);`,
        width: '100%',
        height: '100%',
        backgroundPosition: 'center',
        position: 'absolute',
        zIndex: -1,
    },
    main_text: {
        textAlign: 'center',
        position: 'relative',
        top: '40%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        color: 'white',
    },
    button_text: {
        color: 'white',
        textDecoration: 'none',
    },
});

export const Contact = () => {
    const classes = useAbout();  

    return (
    <>
        <Navbar />
        <div className={`${classes.background}`}>
            <div className={classes.main_text}>
                Contact us if you have any questions regarding our wines. Don't hesitate to reach us out, we are here to help you make the best decision.
            </div>
        </div>
    </>
  )
}
