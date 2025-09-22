// import { useCart } from "../context/CartContext";
import React from "react";
// import CartItem from "../components/CartItem";
import Navbar from "../components/Navbar";
import ShopHeader from "../components/shopProductGrid";
import Footer from "../components/Footer";
import Cart_s from "../components/Cart_s";

const Cart = () => {
//   const { cart } = useCart();

  return (
    <>
      <Navbar />
      <ShopHeader />
      <Cart_s />
      <Footer />
    </>
  );
};

export default Cart;
