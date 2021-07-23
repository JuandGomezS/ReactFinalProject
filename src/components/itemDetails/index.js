import React, { useState, useEffect} from "react";
import { useStyles } from "./style";
import { useParams } from 'react-router-dom';
import ItemDetailsTemplate from "../itemDetailsTemplate";

export default function ItemDetails() {
  const [items, setItems] = useState([]);

  const {id}= useParams();



 

  useEffect(() => {
    const call = async () => {
      const products = await fetch("/datos/data.json");
      let result = await products.json();

      if (id) {
        result= result.filter(element => element.id === id);
        
      }
      setItems(result);
    };
    call();
  }, [id]);




  const classes = useStyles();

  return (
    <div className={classes.root}>
      
          {items && items.map((element) => <ItemDetailsTemplate data={element} />)}
     
    </div>
    
  );
}
