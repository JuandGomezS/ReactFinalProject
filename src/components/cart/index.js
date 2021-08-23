import React, { useState, useEffect, Label } from "react";
import { useStyles } from "./style";
import { useCartContext } from "../../cartContext";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import HomeIcon from "@material-ui/icons/Home";
import {getFirestore} from "../../firebase";
import firebase from "firebase/app";
import CartItemTemplate from "../cartItemTemplate";


export default function Cart() {
  const [mostrar, setMostrar] = useState(true);
  const [confirmation, setConfirmation] = useState();
  const [disable, setDisable] = useState(true);
  const classes = useStyles();
  const { cartItems, totalPrice, GetTotalPrice} = useCartContext();
  const [userInfo, setUserInfo] = useState({
    name: " ",
    phone: " ",
    email: " "  
   });



  const createOrder= () => {
    const newOrder = { 
      buyer: userInfo,
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



  const print= (event)=>{

    if (!event.currentTarget.contains(event.relatedTarget)) {
      setUserInfo({
        ...userInfo,   
        [event.target.id]: event.target.value,
      })
      
    }
    
  }

  

  useEffect(() => {
    if (cartItems.length === 0) {
      setMostrar(false);
    }

    if(userInfo.name !== " " && userInfo.email !== " " && userInfo.phone !== " " ){
      setDisable(false)
      console.log(userInfo.name + " " + userInfo.email)
    }
    
    GetTotalPrice();
  }, [cartItems.length, GetTotalPrice, userInfo.name, userInfo.email, userInfo.phone]);

  console.log(disable)

  return (
    <div className={classes.root}>
      <div style={{ display: mostrar ? "none" : "contents" }}>
        <div className={classes.box1}>
            <p className={classes.p} style={{ padding: "6rem 0rem 0rem 0rem" }}>
              El carrito de compras está vacio
            </p>
            <p className={classes.p} style={{ padding: "4rem 0rem 0rem 0rem" }}>
              <Link to="/" style={{ textDecoration: "none" }}>
                <Button color="inherit" className={classes.p}>
                  <HomeIcon style={{ fontSize: "6rem" }} />
                </Button>
              </Link>
            </p>
        </div>          
      </div>

      <div style={{ display: mostrar ? "contents" : "none" }}>

        <div className={classes.box2}>
          <div className={classes.ebox}>
            {cartItems.length > 0 && cartItems.map((element) =>  
              <div className={classes.box}>
                <CartItemTemplate data={element}/>
              </div>    
            )}
          </div>

          <div className={classes.inputBox}>
            <label for="name" className={classes.label}>Nombre:</label>
            <input type="text" placeholder="Nombre" className={classes.input} id="name" onBlur={print} />

            <label for="email" className={classes.label}>Correo:</label>
            <input type="text" placeholder="Correo" className={classes.input} id="email" onBlur={print}/>

            <label for="phone" className={classes.label}>Celular:</label>
            <input type="number" placeholder="Número celular" className={classes.input} id="phone" onBlur={print}/>
          </div>

          <p className={classes.p}>Total: ${totalPrice}</p>
          <Button className={classes.b} disabled={disable} onClick={createOrder}>Confirmar Compra</Button>
          {confirmation && <p className={classes.p}>Confirmación de compra: {confirmation}</p>}
        </div>

      </div>
    </div>
  );
}
