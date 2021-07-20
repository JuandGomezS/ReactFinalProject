import React, { useState } from "react";
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
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import CardActionArea from '@material-ui/core/CardActionArea';
import { ItemCount } from "../itemCount";




export default function ItemTemplate(props) {
  const [details, setDetails] = useState(false);

  const handleOpen = () => {
    setDetails(true);
  };

  function haddleAdd(value) {
    console.log(`value: ${value}`);
  }

  const handleClose = () => {
    setDetails(false);
  };
  const classes = useStyles();

  const body = (
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
              <Typography variant="body2" color="rgb(242, 146, 9)" component="p">
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
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              className={classes.price}
            >
              ${props.data.price}
            </Typography>
          </CardContent>
          <IconButton aria-label="add to favorites" className={classes.icon}>
            <FavoriteIcon />
          </IconButton>
          <IconButton
            aria-label="details"
            className={classes.icon}
            onClick={handleOpen}
          >
            <SearchIcon />
          </IconButton>
          <IconButton aria-label="share" className={classes.icon}>
            <AddShoppingCartIcon />
          </IconButton>
        </CardActions>
      </Card>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={details}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={details}>
          {body}
        </Fade>
      </Modal>
    </>
  );
}
