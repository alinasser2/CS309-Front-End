import React from "react";
import { useShoppingCart } from "./ShoppingCart";
import storeItems from "../Data/items.json";
import { Button } from "@mui/material";

function CartItem({ id = 3, quantity = 3 }) {
  console.log(id, quantity);
  const { removeFromCart } = useShoppingCart();
  const item = storeItems.find((item) => item.id === id);
  if (item == null) return null;
  return (
    <>
      <img
        src={item.imgUrl}
        alt="cart-img"
        style={{ width: 300, height: 300, marginTop: 80 }}
      />
      <div>
        <div style={{ fontSize: 30 }}>
          {item.name}

          {quantity > 1 && <span> x{quantity}</span>}
        </div>
        <div style={{ fontSize: 30 }}>{item.price + "$"}</div>
      </div>
      <div style={{ fontSize: 30 }}>
        {"TOTAL:" + item.price * quantity + "$"}
      </div>
      <Button
        variant="outline-danger"
        size="sm"
        onClick={() => removeFromCart(item.id)}
      >
        &times;
      </Button>
    </>
  );
}

export default CartItem;
