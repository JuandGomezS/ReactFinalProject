import React from "react";
import { useStyles } from "./style";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActionArea from "@material-ui/core/CardActionArea";
import { ItemCount } from "../itemCount";
import Typography from "@material-ui/core/Typography";




export default function ItemDetailsTemplate(props) {


  const classes = useStyles();

  function haddleAdd(value) {
    console.log(`value: ${value}`);
  }


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
        <div>
          <Typography gutterBottom variant="h5" component="h2">
            PRECIO: ${props.data.price}
          </Typography>
        </div>
        <div>
          <ItemCount stock={10} initial={1} onAdd={haddleAdd} />
        </div>
      </div>
    </div>
  );
}
