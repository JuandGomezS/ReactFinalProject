import { Grid } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import ItemTemplate from "../Item";
import {useStyles} from './style'

export default function ItemList() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    call();
  }, []);

  const call = async () => {
    const products = await fetch("datos/data.json");
    const result = await products.json();
    setItems(result);
  };
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={2} direction="row" justifyContent="center" alignItems="center">
          {items && items.map((element) => <Grid item xs={3}><ItemTemplate data={element} /></Grid>)}
      </Grid>
    </div>
  );
}
