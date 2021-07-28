import React, { useState } from "react";
import { useStyles } from "./style";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActionArea from "@material-ui/core/CardActionArea";
import { ItemCount } from "../itemCount";
import Typography from "@material-ui/core/Typography";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

export default function ItemDetailsTemplate(props) {
  const [quantity, setQuantity] = useState(0);
  const [viCount, setViCount] = useState("visible");
  const [viButton, setViButton] = useState("collapse");
  const classes = useStyles();

  function haddleAdd(value) {
    setQuantity(value);

    if (value > 0) {
      setViButton("visible");
      setViCount("collapse");
    } else {
      setViButton("collapse");
      setViCount("visible");
    }
  }

  console.log("Cantidad: " + quantity);

  return (
    <div className={classes.paper}>
      <div className={classes.left}>
        <Card className={classes.rootDetails}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt={props.data.description}
              height="100%"
              image={props.data.route}
              title={props.data.name}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {props.data.name}
              </Typography>
              <Typography
                variant="body2"
                color="rgb(242, 146, 9)"
                component="p"
              >
                {props.data.description}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
      <div className={classes.right}>
        <div style={{ visibility: viCount }}>
          <Typography gutterBottom variant="h5" component="h2">
            PRECIO: ${props.data.price}
          </Typography>
        </div>
        <div className={classes.contenedor}>
          <div style={{ visibility: viCount }}>
            <ItemCount stock={props.data.stock} initial={1} onAdd={haddleAdd}/>
          </div>
          <Link to="/cart">
            <Button style={{ visibility: viButton }} className={classes.endBuy}>
              Terminar tu compra
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
