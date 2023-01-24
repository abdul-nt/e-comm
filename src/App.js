import { Box, Container, Stack, Typography } from "@mui/material";
import { useEffect } from "react";
import { colors } from "./constant/constant";
import { ThemeProvider } from "@mui/system";
import Header from "./Header/header";
import Home from "./Home/home";
import Products from "./Products/product";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import theme from "./theme";
import Cart from "./Cart/cart";
import HomePage from "./Screens/Home/HomePage";

function App() {
  useEffect(() => {
    document.title = "E-Comm";
  });

  return (
    <>
      {/* <ThemeProvider theme={theme}>
        <Header />
        <Container
          disableGutters
          maxWidth="100px"
          sx={{ background: `${colors.background}` }}
        >
          <Stack>
            <Home />
            <Box display="flex" justifyContent="center" sx={{ p: 4 }}>
              <Typography variant="h4">Our Cards</Typography>
            </Box>
            <Products />
          </Stack>
        </Container> */}
        <Router>
          <Routes>
          <Route path={"/"} element={<HomePage />} />
            <Route path={"/cart"} element={<Cart />} />
          </Routes>
        </Router>
      {/* </ThemeProvider> */}
    </>
  );
}

export default App;
