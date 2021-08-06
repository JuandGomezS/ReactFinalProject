import { Grid } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import ItemTemplate from "../Item";
import {useStyles} from './style';
import './style.css';
import {getFirestore} from "../../firebase";

export default function ItemList({id}) {
  const [items, setItems] = useState([]);

  const db = getFirestore();

  const getData = async () => {
    db.collection("productos").onSnapshot((querySnapshot) => {
      let result = [];
      querySnapshot.forEach((doc) => {
        result.push({ ...doc.data(), id: doc.id });
      });
      if(id){
        result= result.filter(element => element.type === id);
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
      <Grid container spacing={2} direction="row" justifyContent="center" alignItems="flex-start">
          {items && items.map((element) => <Grid item xs={3}><ItemTemplate data={element} /></Grid>)}
      </Grid>
    </div>
  );
}
