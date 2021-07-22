import { Grid } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import ItemTemplate from "../Item";
import { useStyles } from "./style";
import { useParams } from "react-router-dom";

export default function ItemCategory() {
  const [items, setItems] = useState([]);

  const { id } = useParams();

  console.log(id);



  useEffect(() => {
    const call = async () => {
        const products = await fetch("/datos/data.json");
        let result = await products.json();
    
        if (id) {
          result = result.filter((x) => x.type === id);
        }

        setItems(result);
      };
    call();
  }, [id]);

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={2}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        {items && items.map((element) => (
            <Grid item xs={3}>
              <ItemTemplate data={element} />
            </Grid>
          ))}
      </Grid>
    </div>
  );
}
