import { Box, Typography } from "@mui/material";
import { colors } from "../../../../constant/constant";

export const CartSummary = ({ cartLength, cartItems }) => {
  return (
    <>
      {cartLength > 0 && (
        <Box
          marginTop={"20px"}
          padding="20px"
          sx={{
            border: "2px solid",
            borderColor: colors.primaryColor,
            borderRadius: "20px",
          }}
        >
          <Box
            borderBottom={`1px solid ${colors.primaryColor}`}
            marginBottom={"20px"}
            component={"div"}
          >
            <Typography variant="h4" sx={{ fontWeight: "bold" }}>
              Cart Summary
            </Typography>
          </Box>

          <Box
            display="flex"
            maxWidth={"45000px"}
            justifyContent={"space-between"}
            alignItems="center"
          >
            <Typography variant="h6">Total Price</Typography>
            <Typography variant="h6" fontWeight={400}>
              {cartItems?.reduce(
                (sum, { price, quantity }) =>
                  (Number(sum) + price * quantity).toFixed(2),
                0
              )}
            </Typography>
          </Box>

          <Box
            display="flex"
            justifyContent={"space-between"}
            alignItems="center"
            marginTop="10px"
            marginBottom={"10px"}
          >
            <Typography variant="h6">Total Quantity</Typography>
            <Typography variant="h6" fontWeight={400}>
              {cartItems?.reduce(
                (sum, { quantity }) =>
                  (Number(sum) + Number(quantity))?.toFixed(2),
                0
              )}
            </Typography>
          </Box>

          <Box
            display="flex"
            justifyContent={"space-between"}
            alignItems="center"
            marginTop="10px"
            marginBottom={"10px"}
          >
            <Typography variant="h6">Total Tax</Typography>
            <Typography variant="h6" fontWeight={400}>
              {cartItems?.reduce(
                (a, { tax }) => (Number(a) + tax).toFixed(2),
                0
              )}
            </Typography>
          </Box>

          <Box
            display="flex"
            justifyContent={"space-between"}
            alignItems="center"
            marginBottom={"10px"}
          >
            <Typography variant="h6">Total Price with Tax</Typography>
            <Typography variant="h6" fontWeight={400}>
              {cartItems?.reduce(
                (a, { tax, price, quantity }) =>
                  (Number(a) + tax + price * quantity).toFixed(2),
                0
              )}
            </Typography>
          </Box>

          <Box
            display="flex"
            justifyContent={"space-between"}
            alignItems="center"
            marginBottom={"10px"}
          >
            <Typography variant="h6">Shipping Fees LKR</Typography>
            <Typography variant="h6" fontWeight={400}>
              500.00
            </Typography>
          </Box>

          <Box
            display="flex"
            justifyContent={"space-between"}
            alignItems="center"
            marginBottom={"10px"}
            borderBottom={`1px solid ${colors.primaryColor}`}
            borderTop={`1px solid ${colors.primaryColor}`}
          >
            <Typography variant="h6">Total Amount</Typography>
            <Typography variant="h6" fontWeight={400}>
              {cartItems?.reduce(
                (sum, { totalPrice }) => (Number(sum) + totalPrice).toFixed(2),
                500
              )}
            </Typography>
          </Box>
        </Box>
      )}
    </>
  );
};
