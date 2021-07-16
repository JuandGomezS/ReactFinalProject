import React from 'react';
import {useStyles} from './style'
import {ItemCount} from '../itemCount'




export default function ItemContainer(props) { 
    const classes = useStyles();

    function haddleAdd(value) {
        console.log(`value: ${value}`);
    }

    return <div> 
        <p className={classes.Paragraph}>{props.greetings}</p>
        <ItemCount stock={10} initial={1} onAdd={haddleAdd} />;
    </div>
}