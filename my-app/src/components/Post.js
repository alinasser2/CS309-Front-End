import React from "react";
import { Link } from "react-router-dom";
import {
  Typography,
  Grid,
  CssBaseline,
  Container,
  link,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Button,
  CardActions,
} from "@mui/material";

import useShoppingCart from "../Pages/ShoppingCart";
function Post({
  imgURL,
  painte_name,
  id,
  price,
  handleClick,
  handleAdd,
  ...rest
}) {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();
  const quantity = getItemQuantity(id);
  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <Link to={handleClick}>
            <CardMedia
              style={{ marginTop: "90px" }}
              component="img"
              height="20%"
              image="https://sep.yimg.com/ty/cdn/madisonartshop/most-famous-paintings-2.jpg?t=1660737943&"
              alt={painte_name}
            />
          </Link>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {painte_name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              price {price + "$"}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <div>
            {quantity === 0 ? (
              <Button
                style={{ width: "200%", color: "black" }}
                onClick={() => increaseCartQuantity(id)}
              >
                Add product to Card
              </Button>
            ) : (
              <div style={{ display: "grid" }}>
                <div style={{ display: "flex" }}>
                  <Button
                    variant="outlined"
                    style={{
                      width: "90px",
                      height: "50px",
                      marginTop: "20px",
                      marginLeft: "0px",
                      marginBottom: "2px",
                      fontSize: "25px",
                      color: "black",
                    }}
                    onClick={() => decreaseCartQuantity(id)}
                  >
                    -
                  </Button>
                  <span
                    style={{
                      fontSize: "25px",
                      marginTop: "20px",
                      marginRight: "7px",
                      marginLeft: "7px",
                      color: "black",
                    }}
                  >
                    {quantity} in cart
                  </span>
                  <Button
                    variant="outlined"
                    style={{
                      width: "90px",
                      height: "50px",
                      marginTop: "20px",
                      marginLeft: "1px",
                      marginBottom: "2px",
                      fontSize: "25px",
                      color: "black",
                    }}
                    onClick={() => increaseCartQuantity(id)}
                  >
                    +
                  </Button>
                </div>
                <Button
                  variant="outlined"
                  style={{ color: "black" }}
                  onClick={() => removeFromCart(id)}
                >
                  Remove
                </Button>
              </div>
            )}
          </div>
        </CardActions>
      </Card>
    </>
  );
}

export default Post;
