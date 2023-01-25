import Home from "../../Home/home";
import MainLayout from "../../mainlayout/Mainlayout";
import theme from "../../theme";
import { ThemeProvider } from "@mui/system";
import Header from "../../Header/header";
import { useState } from "react";
import { useEffect } from "react";
import Checkout from "../../Checkout/checkout";

const HomePage = () => {
  return (
    <ThemeProvider theme={theme}>
      <MainLayout>
        <Home />
      </MainLayout>
    </ThemeProvider>
  );
};

export default HomePage;
