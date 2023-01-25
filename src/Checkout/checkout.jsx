import React from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import { ThemeProvider } from "@mui/system";
import { colors } from "../constant/constant";
import theme from "../theme";
import Header from "../Header/header";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
    const navigate = useNavigate();
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <Container sx={{ marginTop: "50px" }}>
          <Box>
            <Typography variant="h3">Your Order has been placed !</Typography>
          </Box>
          <Box
            display="flex"
            justifyContent={"space-between"}
            alignItems="center"
            marginBottom={"10px"}
            margin="50px"
          >
            <Button
              sx={{
                backgroundColor: `${colors.primaryColor}`,
                color: "#000",
              }}
              onClick={() => {
                navigate("/");
              }}
              varient="outlined"
            >
              Continue Shopping
            </Button>

           
          </Box>
        </Container>
      </ThemeProvider>
    </>
  );
};

export default Checkout;
