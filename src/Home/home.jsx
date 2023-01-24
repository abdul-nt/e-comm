import React from "react";
import Carousel from "react-material-ui-carousel";
import "../style/banner.scss";

import { bannerItems, colors } from "../constant/constant";
import { Banner } from "./Banner/banner";
import { Box } from "@mui/material";
import Products from "../Products/product";

const Home = () => {
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

  return (
    <>
      <Box margin={"50px"} bgcolor="grey" border={`2px solid ${colors.primaryColor}`}>
        <Carousel
          className="Example"
          {...sliderSettings}
        >
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

      
      <Products/>
    </>
  );
};

export default Home;
