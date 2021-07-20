import React from 'react';
/* import {useStyles} from './style' */
import ItemList from '../ItemList';




export default function ItemContainer(props) { 
    /* const _classes = useStyles(); */

    /* function haddleAdd(value) {
        console.log(`value: ${value}`);
    } */

    return <div> 
        {/* <p className={classes.Paragraph}>{props.greetings}</p>
        <ItemCount stock={10} initial={1} onAdd={haddleAdd} />; */}
        <ItemList/>
    </div>
}