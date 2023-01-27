import React, { useState } from "react";
import styled from "@emotion/styled";
import { Box, Button } from "@mui/material";
import { colors } from "../constant/constant";
import { slideInBottom } from "../animations";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

export const Product = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  [theme.breakpoints.up("md")]: {
    position: "relative",
  },
}));

export const ProductImage = styled("img")(({ src, theme }) => ({
  src: `url(${src})`,
  width: "100%",
  background: colors.primaryColor,
  maxHeight: "500px",
  border: "5px",
  borderColor: colors.primaryColor,

  objectFit: "cover",
  [theme.breakpoints.down("md")]: {
    width: "80%",
    padding: "24px",
  },
}));

export const ProductAddToCart = styled(Button, {
  shouldForwardProp: (prop) => prop !== "show",
})(({ show, theme }) => ({
  width: "120px",
  fontSize: "15px",
  fontWeight: "bold",
  [theme.breakpoints.up("md")]: {
    position: "absolute",
    bottom: "5%",
    width: "300px",
    padding: "10px 5px",
    animation:
      show &&
      `${slideInBottom} 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both`,
  },
  background: colors.primaryColor,
  opacity: 0.9,
}));

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function SingleProduct({ onCart,onAddCart, product, matches, cartItems }) {
  const [showOptions, setShowOptions] = useState(false);
  const [show, setShow] = useState(false);
  const [addToCart, setAddToCart] = useState(false);

  const handleMouseEnter = () => {
    setShowOptions(true);
  };
  const handleMouseLeave = () => {
    setShowOptions(false);
  };

  const handleClose = () => {
    setShow(false);
    setAddToCart(false);
  };

  return (
    <>
      <Product onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <ProductImage src={product.image} />

        {(showOptions || matches) && (
          <ProductAddToCart
            onClick={(e) => {
              let existingItem = cartItems?.find(
                (obj) => obj.id === product.id
              );
              if (existingItem) {
                setShow(true);
              } else {
                onAddCart.push({
                  id: product.id,
                  name: product.name,
                  price: product.price,
                  image: product.image,
                  description: product.description,
                  quantity: product.quantity + 1,
                  totalPrice: product.price + (product.price * 1.23) / 100,
                  tax: (product.price * 1.23) / 100,
                });
                localStorage.setItem("cart", JSON.stringify(onAddCart));
                setAddToCart(true);
              }

              onCart();
            }}
            show={showOptions}
            variant="contained"
          >
            Add to cart
          </ProductAddToCart>
        )}
        <Snackbar open={show} autoHideDuration={2000} onClose={handleClose}>
          <Alert
            onClose={handleClose}
            severity="success"
            sx={{ width: "100%" }}
          >
            Product Already in Cart !
          </Alert>
        </Snackbar>
        <Snackbar
          open={addToCart}
          autoHideDuration={2000}
          onClose={handleClose}
        >
          <Alert
            onClose={handleClose}
            severity="success"
            sx={{ width: "100%" }}
          >
            Addes to Cart !
          </Alert>
        </Snackbar>
      </Product>
    </>
  );
}
