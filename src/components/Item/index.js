import React from "react";
import {useStyles} from './style'
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import SearchIcon from '@material-ui/icons/Search';



export default function ItemTemplate(props) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardHeader title= {props.data.name} classes={{ title: classes.headerTitle}} />
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
      </CardContent>
        <IconButton aria-label="add to favorites" className={classes.icon}>
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="details" className={classes.icon}>
          <SearchIcon />
        </IconButton>
        <IconButton aria-label="share" className={classes.icon}>
          <AddShoppingCartIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
