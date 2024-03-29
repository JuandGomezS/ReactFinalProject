import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import {useStyles} from './style';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { useCartContext } from '../../cartContext';


export function ItemCount({ stock, initial, onAdd, name, price}) {
  
  const [count, setCount] = useState(initial);
  const [status, setStatus] = useState(false);
  const [disable, setDisable] = useState(false);



  const { addItem } = useCartContext();

  function push() {
    if (count < stock) {
      setCount(count + 1);
      setDisable(false);
    }
  }

  function drop() {
    if (count > 1) {
      setCount(count - 1);
      setDisable(false);
    }
  }

  React.useEffect(() => {
    setStatus(stock > 0 && count > 0 && count <= stock);

  }, [count,stock]);

  function pushCart() {
    if (status) {
      onAdd(count);
      addItem(name, count, price);
      setDisable(true);
    }
  }
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <p className={classes.stock}>STOCK: {stock} </p>
      <ButtonGroup color="primary" aria-label="outlined primary button group">
        <Button className={classes.button1} onClick={drop}>-</Button>
        <input className={classes.counterInput} type="text" value={count} />
        <Button className={classes.button2} onClick={push}>+</Button>
      </ButtonGroup>
      <Button variant="outlined" disabled={disable} className={classes.pushCartButton} onClick={pushCart}><AddShoppingCartIcon/></Button>
    </div>
  );
}