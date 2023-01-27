import { useEffect, useState } from "react";
import { Container } from "@mui/material";
import { ThemeProvider } from "@mui/system";
import Header from "../../../Components/Header/header";
import theme from "../../../theme";
import { quantityRange } from "../../../constant/constant";
import { CartSummary } from "./CartSummary/cartsummary";
import { CartTable } from "./CartTable/carttable";
import { CartFooter } from "./CartFooter/cartfooter";

const Cart = () => {
  const [cartItems, setCartItems] = useState();
  const [cartLength, setCartLength] = useState(0);

  useEffect(() => {
    onCart();
  }, []);

  const onCart = () => {
    try {
      let data = JSON.parse(localStorage.getItem("cart"));
      setCartItems(data);
      setCartLength(data.length);
    } catch (e) {
      console.log("e", e);
    }
  };

  const totalPrice = (item) => {
    let price = 0;
    price = item.quantity * item.price;
    return price;
  };

  const onAdd = (values, quantity) => {
    let existingItem = cartItems.find((obj) => obj.id === values.id);
    if (existingItem.quantity === quantityRange.max) return;
    if (existingItem) {
      if (quantity) {
        existingItem.quantity = quantity;
      } else {
        existingItem.quantity += 1;
      }

      existingItem.tax =
        ((existingItem.price * 1.23) / 100) * existingItem.quantity;

      existingItem.totalPrice = totalPrice(existingItem) + existingItem.tax;

      let existingItemIndex = cartItems.findIndex(
        (obj) => obj.id === existingItem.id
      );

      cartItems[existingItemIndex].quantity = existingItem.quantity;
      cartItems[existingItemIndex].tax = existingItem.tax;
      cartItems[existingItemIndex].totalPrice = existingItem.totalPrice;
      localStorage.setItem("cart", JSON.stringify(cartItems));
    } else {
      cartItems.push({
        id: values.id,
        name: values.name,
        price: values.price,
        image: values.image,
        description: values.description,
        quantity: values.quantity,
        totalPrice: values.price + (values.price * 1.23) / 100,
        tax: (values.price * 1.23) / 100,
      });

      localStorage.setItem("cart", JSON.stringify(cartItems));
    }
    onCart();
  };

  const removeItem = (itemID, action) => {
    let existingItem = cartItems.find((obj) => obj.id === itemID);
    if (action === "single") {
      if (existingItem) {
        existingItem.quantity = existingItem.quantity - 1;
        existingItem.tax =
          ((existingItem.price * 1.23) / 100) * existingItem.quantity;
        existingItem.totalPrice = totalPrice(existingItem) + existingItem.tax;

        let existingItemIndex = cartItems.findIndex(
          (obj) => obj.id === existingItem.id
        );
        let quantity = (cartItems[existingItemIndex].quantity =
          existingItem.quantity);
        if (quantity > 0) {
          cartItems[existingItemIndex].quantity = existingItem.quantity;
          cartItems[existingItemIndex].tax = existingItem.tax;
          cartItems[existingItemIndex].totalPrice = existingItem.totalPrice;
          localStorage.setItem("cart", JSON.stringify(cartItems));
        } else {
          let data = cartItems.filter((item) => item.id !== itemID);
          localStorage.setItem("cart", JSON.stringify(data));
          setCartItems(data);
        }
      } else {
        let data = cartItems.filter((item) => item.id !== itemID);
        localStorage.setItem("cart", JSON.stringify(data));
        setCartItems(data);
      }
    } else {
      let data = cartItems.filter((item) => item.id !== itemID);
      localStorage.setItem("cart", JSON.stringify(data));
      setCartItems(data);
    }

    onCart();
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <Header cartLength={cartLength} />
        <Container sx={{ marginTop: "50px" }}>
          <CartTable
            onAdd={onAdd}
            removeItem={removeItem}
            cartItems={cartItems}
            cartLength={cartLength}
          />

          <CartSummary cartLength={cartLength} cartItems={cartItems} />

          <CartFooter length={cartLength} onCart={onCart} />
        </Container>
      </ThemeProvider>
    </>
  );
};

export default Cart;
