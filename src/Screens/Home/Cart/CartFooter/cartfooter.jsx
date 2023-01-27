import { Box, Button } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { colors } from "../../../../constant/constant";

export const CartFooter = ({ length, onCart }) => {
  const [cartLength, setCartLength] = useState(length);
  const navigate = useNavigate();
  return (
    <>
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

        {cartLength > 0 && (
          <Button
            sx={{
              backgroundColor: `${colors.primaryColor}`,
              color: "#000",
            }}
            varient="outlined"
            onClick={() => {
              localStorage.removeItem("cart");
              navigate("/checkout");
            }}
          >
            Checkout
          </Button>
        )}
        {cartLength > 0 && (
          <Button
            sx={{
              backgroundColor: `${colors.primaryColor}`,
              color: "#000",
            }}
            varient="outlined"
            onClick={() => {
              localStorage.removeItem("cart");
                setCartLength(0);
              onCart();
            }}
          >
            Empty Cart
          </Button>
        )}
      </Box>
    </>
  );
};
