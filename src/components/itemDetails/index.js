import React, { useState, useEffect} from "react";
import { useStyles } from "./style";
import { useParams } from 'react-router-dom';
import ItemDetailsTemplate from "../itemDetailsTemplate";
import {getFirestore} from "../../firebase";

export default function ItemDetails() {
  const [items, setItems] = useState([]);

  const {id}= useParams();

  const db = getFirestore();

  const getData = async () => {
    db.collection("productos").onSnapshot((querySnapshot) => {
      let result = [];
      querySnapshot.forEach((doc) => {
        result.push({ ...doc.data(), id: doc.id });
      });
      if(id){
        result= result.filter(element => element.id === id);
      }
      setItems(result);
    });
  };

  useEffect(() => {
    getData();
  });




  const classes = useStyles();

  return (
    <div className={classes.root}>
      
          {items && items.map((element) => <ItemDetailsTemplate data={element} />)}
     
    </div>
    
  );
}
