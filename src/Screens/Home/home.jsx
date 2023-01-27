import React from "react";
import Carousel from "react-material-ui-carousel";
import "../../style/banner.scss";

import { bannerItems, colors } from "../../constant/constant";
import { Banner } from "./Banner/banner";
import { Box } from "@mui/material";
import Products from "./Products/product";
import Header from "../../Components/Header/header";
import { useState } from "react";
import { useEffect } from "react";

const Home = () => {
  const [cartLength, setCartLength] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const sliderSettings = {
    autoPlay: true,
    animation: "fade",
    indicators: false,
    duration: 3000,
    navButtonsAlwaysVisible: false,
    navButtonsAlwaysInvisible: false,
    cycleNavigation: true,
    fullHeightHover: true,
    swipe: true,
  };

  useEffect(() => {
    onCart();
  }, []);

  const onCart = () => {
    try {
      let data = JSON.parse(localStorage.getItem("cart"));
      setCartItems(data);
      setCartLength(data?.length);
    } catch (e) {
      console.log("e", e);
    }
  };

  const onAddCart = (() => {
    const fieldValue = localStorage.getItem("cart");
    return fieldValue === null ? [] : JSON.parse(fieldValue);
  })();

  return (
    <>
      <Header cartLength={cartLength} />
      <Box
        margin={"50px"}
        bgcolor="grey"
        border={`2px solid ${colors.primaryColor}`}
      >
        <Carousel className="Example" {...sliderSettings}>
          {bannerItems.map((item, index) => {
            return (
              <Banner
                item={item}
                key={index}
                contentPosition={item.contentPosition}
              />
            );
          })}
        </Carousel>
      </Box>

      <Products onCart={onCart} onAddCart={onAddCart} cartItems={cartItems}/>
    </>
  );
};

export default Home;
