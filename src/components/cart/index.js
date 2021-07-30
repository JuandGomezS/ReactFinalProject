import React from 'react';
import { useStyles } from "./style";
import { useCartContext } from '../../cartContext';

export default function Cart () {
    const classes = useStyles();
    const { cartItems } = useCartContext();
    console.log(cartItems);
    return (
      <div className={classes.root}>
        <h1>Cart</h1>
        {cartItems.length > 0 &&
          cartItems.map((item, index) => (
            <p key={index} className={classes.p}>
              {item.name} X {item.qty}
            </p>
          ))}
      </div>
    );
}