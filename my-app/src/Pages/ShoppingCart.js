import {createContext,useContext ,useState} from "react";
import CartItem from '../Pages/CartItem'
const ShoppingCart=createContext({});

const ShoppingCartProvider = () => {
 const [cartItems,setCartItems] =useState([]);
 cartItems.map(item => (
  <CartItem id={item.id} quantity={item.quantity} />
))

 const getItemQuantity = (id) => {
    // quatiom mark exist hangle useStateArray Empty
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  };
  
  const increaseCartQuantity = (id) => {
    setCartItems((currItems) => {
    //  find is for loop when find the Element
        if (currItems.find((item) => item.id === id) == null) {
        return [...currItems, { id, quantity: 1 }];
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  };
  const decreaseCartQuantity = (id) => {
    setCartItems((currItems) => {
    //  first if ,the element not equal id return all elements 
        if (currItems.find((item) => item.id === id)?.quantity === 1) {
        return currItems.filter((item) => item.id !== id);
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };
  const removeFromCart = (id) => {
//    the condititon if id not equal id return all elements
    setCartItems((currItems) => currItems.filter((item) => item.id !== id));
  };

 return(
  
  {cartItems, getItemQuantity,increaseCartQuantity,decreaseCartQuantity,removeFromCart}
 
  );
};

export default  ShoppingCartProvider ;
export const useShoppingCart = () => {
    return useContext(ShoppingCart);
  };