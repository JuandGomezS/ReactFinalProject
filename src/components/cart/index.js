import React, { useState, useEffect } from "react";
import { useStyles } from "./style";
import { useCartContext } from "../../cartContext";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import HomeIcon from "@material-ui/icons/Home";

export default function Cart() {
  const [mostrar, setMostrar] = useState(true);
  const classes = useStyles();
  const { cartItems, cartQty, totalPrice, GetTotalPrice, deleteItem } =
    useCartContext();

  console.log("Qty:" + cartQty);
  console.log("Price:" + totalPrice);

  useEffect(() => {
    if (cartItems.length === 0) {
      setMostrar(false);
      console.log("TotalPerras");
    }
    GetTotalPrice();
  },[cartItems.length, GetTotalPrice]);

  return (
    <div className={classes.root}>
      <div style={{ visibility: mostrar ? "collapse" : "visible" }}>
        <p className={classes.p} style={{ padding: "8rem 0rem 0rem 0rem" }}>
          El carrito de compras está vacio
        </p>
        <p className={classes.p} style={{ padding: "8rem 0rem 0rem 0rem" }}>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Button color="inherit" className={classes.p}>
              <HomeIcon style={{ fontSize: "6rem" }} />
            </Button>
          </Link>
        </p>
      </div>

      <div style={{ visibility: mostrar ? "visible" : "collapse" }}>
        {cartItems.length > 0 &&
          cartItems.map((item, index) => (
            <p key={index} className={classes.p}>
              {item.name} X {item.qty} X {item.price}
              <Button className={classes.b} onClick={() => deleteItem(item)}>
                Eliminar
              </Button>
            </p>
          ))}
        <p className={classes.p}>Total: ${totalPrice}</p>
      </div>
    </div>
  );
}
