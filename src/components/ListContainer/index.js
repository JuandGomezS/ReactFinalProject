import React from 'react';
/* import {useStyles} from './style' */
import ItemList from '../ItemList';
import { useParams } from 'react-router-dom'




export default function ItemContainer(props) { 
    
    const {id} = useParams();

    return (
        <div> 
            <ItemList id={id}/>
        </div>

    )
       
}