import { useEffect, useState } from "react";
import {
  Box,
  Button,
  ButtonGroup,
  Container,
  FormControl,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import { ThemeProvider } from "@mui/system";
import Header from "../../../Components/Header/header";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from "@mui/icons-material/Delete";
import theme from "../../../theme";
import { colors, quantityRange } from "../../../constant/constant";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
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
        existingItem.quantity = existingItem.quantity + 1;
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

  const handleChange = (element, e) => {
    if (e.target.value > quantityRange.max) return;
    if (e.target.value > 0) {
      onAdd(element, e.target.value);
    } else {
      removeItem(element.id, "multiple");
    }
    // onAdd(element, e.target.value);
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
          <TableContainer component={Paper}>
            <Table
              sx={{ minWidth: 650, border: `2px solid ${colors.primaryColor}` }}
              aria-label="simple table"
            >
              <TableHead>
                <TableRow>
                  <TableCell></TableCell>
                  <TableCell>Product Details</TableCell>
                  <TableCell align="center">Quantities</TableCell>
                  <TableCell align="center"></TableCell>
                  <TableCell align="center">Price</TableCell>
                  <TableCell align="center">Tax</TableCell>
                  <TableCell align="center">Total</TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {cartLength === 0 ? (
                  <TableRow>
                    <TableCell align="center">
                      <Typography variant="h4">Your Cart is Empty</Typography>
                    </TableCell>
                  </TableRow>
                ) : (
                  <>
                    {cartItems?.map((element, index) => {
                      return (
                        <TableRow
                          key={index}
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                          }}
                        >
                          <TableCell
                            component="th"
                            scope="row"
                            sx={{ width: "20px" }}
                          >
                            <img
                              src={element?.image}
                              alt={element?.name}
                              style={{ height: "100px", width: "100px" }}
                            />
                          </TableCell>
                          <TableCell
                            component="th"
                            scope="row"
                            sx={{ fontWeight: "bold" }}
                          >
                            {element?.name}
                          </TableCell>
                          <TableCell align="right">
                            <Box
                              sx={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                "& > *": {
                                  m: 1,
                                },
                              }}
                            >
                              <ButtonGroup
                                variant="outlined"
                                aria-label="outlined button group"
                              >
                                <Button
                                  onClick={() => {
                                    removeItem(element.id, "single");
                                  }}
                                  variant="contained"
                                >
                                  <RemoveIcon />
                                </Button>
                                <FormControl>
                                  <TextField
                                    sx={{ width: "60px" }}
                                    InputProps={{
                                      inputProps: {
                                        min: quantityRange.min,
                                        max: quantityRange.max,
                                      },
                                    }}
                                    type="number"
                                    variant="filled"
                                    value={element.quantity}
                                    onChange={(e) => {
                                      handleChange(element, e);
                                    }}
                                  />
                                </FormControl>
                                <Button
                                  onClick={() => {
                                    onAdd(element);
                                  }}
                                  variant="contained"
                                >
                                  <AddIcon />
                                </Button>
                              </ButtonGroup>
                            </Box>
                          </TableCell>
                          <TableCell>
                            <Button
                              onClick={() => {
                                removeItem(element.id, "mulitple");
                              }}
                              variant="contained"
                            >
                              <DeleteIcon />
                            </Button>
                          </TableCell>
                          <TableCell align="center">{element?.price}</TableCell>
                          <TableCell align="center">
                            {element?.tax?.toFixed(2)}&nbsp;(1.23%)
                          </TableCell>
                          <TableCell align="center" sx={{ fontWeight: "bold" }}>
                            {element.totalPrice >= 0
                              ? element.totalPrice?.toFixed(2)
                              : element.price}
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  </>
                )}
              </TableBody>
            </Table>
          </TableContainer>
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
                    (sum, { totalPrice }) =>
                      (Number(sum) + totalPrice).toFixed(2),
                    500
                  )}
                </Typography>
              </Box>
            </Box>
          )}

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
        </Container>
      </ThemeProvider>
    </>
  );
};

export default Cart;
