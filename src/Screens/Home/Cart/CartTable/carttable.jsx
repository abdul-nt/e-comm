import {
  Box,
  Button,
  ButtonGroup,
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
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from "@mui/icons-material/Delete";
import { colors, quantityRange } from "../../../../constant/constant";

export const CartTable = ({ onAdd, removeItem, cartItems, cartLength }) => {
  const handleChange = (element, e) => {
    if (e.target.value > quantityRange.max) return;
    if (e.target.value > 0) {
      onAdd(element, e.target.value);
    } else {
      removeItem(element.id, "multiple");
    }
  };

  return (
    <>
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
                                variant="outlined"
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
    </>
  );
};
