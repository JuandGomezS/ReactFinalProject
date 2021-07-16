import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import {useStyles} from './style'


export function ItemCount({ stock, initial, onAdd }) {
  
  const [count, setCount] = useState(initial);
  const [status, setStatus] = useState(false);
  const [disable, setDisable] = useState(false);

  function push() {
    if (count < stock) {
      setCount(count + 1);
      setDisable(false);
    }
  }

  function drop() {
    if (count > 0) {
      setCount(count - 1);
      setDisable(false);
    }
  }

  React.useEffect(() => {
    setStatus(stock > 0 && count > 0 && count <= stock);
  }, [count]);

  function pushCart() {
    if (status) {
      onAdd(count);
      setDisable(true);
    }
  }
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <ButtonGroup color="primary" aria-label="outlined primary button group">
        <Button className={classes.button1} onClick={drop}>-</Button>
        <input className={classes.counterInput} type="text" value={count} />
        <Button className={classes.button2} onClick={push}>+</Button>
      </ButtonGroup>
      <Button variant="outlined" disabled={disable} className={classes.pushCartButton} onClick={pushCart}>push al carrito</Button>
    </div>
  );
}