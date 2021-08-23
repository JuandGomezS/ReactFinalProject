import React from "react";
import { useStyles } from "./style";
import Card from "@material-ui/core/Card";
import { useCartContext } from "../../cartContext";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import DeleteIcon from '@material-ui/icons/Delete';




export default function CartItemTemplate(props) {
    const {deleteItem } = useCartContext();


  const classes = useStyles();

 


  return (
    <>
      <Card className={classes.root}>
        <CardHeader
          title={props.data.name}
          classes={{ title: classes.headerTitle }}
        />
        <CardMedia
          className={classes.media}
          image={props.data.route}
          title=""
        />
        <CardActions disableSpacing className={classes.iconContainer}>
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p" className={classes.price}>
              ${props.data.price}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p" className={classes.price}>
              Cantidad: {props.data.qty}
            </Typography>
          </CardContent>
          <IconButton aria-label="add to favorites" className={classes.icon} onClick={() => deleteItem(props.data)}>
            <DeleteIcon/>
          </IconButton>
        </CardActions>
      </Card>
    </>
  );
}