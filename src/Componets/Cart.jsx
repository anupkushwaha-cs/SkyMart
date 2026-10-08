import React, { useContext } from "react";
import CartCard from "./CartCard";
import { MyStore } from "../Context/AppContaxts";

const Cart = () => {

  let {cartItems}=useContext(MyStore);

  return (
    <div>
        {cartItems.map((elem)=>{
            return <CartCard key={elem.id} product={elem}/>
        })}
    </div>
  )
}

export default Cart;