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

export const About = () => {
    const classes = useAbout();

    return (
        <>
        <Navbar />
        <div className={`${classes.background}`}>
            <div className={classes.main_text}>
                We have been open since 1965, providing our customers with the best wines of all categories because we care about having the best of the best
            </div>
        </div>
        </>
  )
}
