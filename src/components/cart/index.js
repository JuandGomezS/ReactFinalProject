import React from 'react';
import { useStyles } from "./style";

export default function Cart () {
    const classes = useStyles();




    return (
        <div className={classes.root}>
            <p className={classes.p}>Holi soy el cart</p>
        </div>
        
    );
}