import React from "react";
import { useShoppingCart } from "./ShoppingCart";
import storeItems from "../Data/items.json";
import {Button} from "@mui/material";


function CartItem ({ id=3, quantity=2}) {
console.log(id,quantity);
  const { removeFromCart } = useShoppingCart();
  const item = storeItems.find((item) => item.id === id);
  if (item == null) return null;
  return (
      <>
      <img
        src={item.imgUrl}
        alt="cart-img"
      />
      <div >
        <div>
          {item.name}
          {quantity > 1 && (
            <span> x{quantity}</span>
          )}
        </div>
        <div>
          {item.price+"$"}
        </div>
      </div>
      <div>{"TOTAL:"+item.price * quantity+"$"}</div>
      <Button
        variant="outline-danger"
        size="sm"
        onClick={() => removeFromCart(item.id)}
      >
        &times;
      </Button>
 </>
  );
};

export default CartItem;