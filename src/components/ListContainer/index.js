import React from 'react';
/* import {useStyles} from './style' */
import ItemList from '../ItemList';
import { useParams } from 'react-router-dom';
import {useStyles} from './style';




export default function ItemContainer(props) { 
    
    const {id} = useParams();
    const classes = useStyles();

    return (
        <div className={classes.root}> 
            <ItemList id={id}/>
        </div>

    )
       
}