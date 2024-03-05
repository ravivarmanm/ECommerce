import React from "react";
import { useSelector } from "react-redux";
import "./_cart.scss";
import EmptyCart from "./EmptyCart";
import FilledCart from "./FilledCart";

const Cart = () => {
  const cart = useSelector((state) => state.cr);
  return (
    <div>{cart.cartItems.length === 0 ? <EmptyCart /> : <FilledCart />}</div>
  );
};

export default Cart;
