import React from "react";
import classes from "./CartTotal.module.scss";

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

interface CartTotalProps {
  cartItems: CartItem[];
}

const CartTotal: React.FC<CartTotalProps> = ({ cartItems }) => {
  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className={classes.cartTotal}>
      <div className="d-flex justify-content-between">
        <h3>Your Cart</h3>
        <p>Total Items: {totalItems}</p>
      </div>
      <div className="mt-5">
        <div className="d-flex justify-content-between">
          <h6>Subtotal: </h6>
          <p>&#8377; {totalPrice.toFixed(2)}</p>
        </div>
        <div className="d-flex justify-content-between">
          <h6>Shipping Charges: </h6>
          <p>&#8377; 100</p>
        </div>
        <div className="d-flex justify-content-between">
          <h6>GST (18%):</h6>
          <p>&#8377; {(totalPrice * 0.18).toFixed(2)}</p>
        </div>
        <div className="d-flex justify-content-between">
          <h5>Grand Total:</h5>
          <p>&#8377; {(totalPrice * 1.1).toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

export default CartTotal;
