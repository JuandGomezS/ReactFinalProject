import React, { useState, useEffect } from "react";
import { useStyles } from "./style";
import { useCartContext } from "../../cartContext";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import HomeIcon from "@material-ui/icons/Home";
import {getFirestore} from "../../firebase";
import firebase from "firebase/app";

export default function Cart() {
  const [mostrar, setMostrar] = useState(true);
  const classes = useStyles();
  const { cartItems, totalPrice, GetTotalPrice, deleteItem } = useCartContext();
  const [confirmation, setConfirmation] = useState();



  const createOrder= () => {
    const newOrder = { 
      buyer: {
        name: "John",
        phone: "123",
        email: "john@test.com"      
      },
      cartItems: cartItems,
      date: firebase.firestore.Timestamp.fromDate(new Date()),
      total: totalPrice
    }

    const db = getFirestore();
    const collection = db.collection("orders");
    const query = collection.add(newOrder);
    query.then((response) => {
      console.log("Order created");
      setConfirmation(response.id);
    })
    .catch ((err)=>{
      console.log("Error creating order");
      console.log(err);
    })
  }

  useEffect(() => {
    if (cartItems.length === 0) {
      setMostrar(false);
      console.log("TotalPerras");
    }
    GetTotalPrice();
  }, [cartItems.length, GetTotalPrice]);

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
        <button className={classes.b} onClick={createOrder}>Confirmar Compra</button>
        {confirmation && <p className={classes.p}>Confirmación de compra: {confirmation}</p>}}
      </div>
      
    </div>
  );
}
