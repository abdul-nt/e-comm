import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { colors } from "../constant/constant";
import Header from "../Header/header";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import married1 from "../assets/married1.webp";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { ThemeProvider } from "@mui/system";
import theme from "../theme";
import Home from "../Home/home";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

const Cart = () => {
  return (
    <>
      {/* <Header /> */}
      <ThemeProvider theme={theme}>
        <Header />
        <Container
          // disableGutters
          // maxWidth="100px"
          sx={{ marginTop: "50px" }}
        >
          <TableContainer component={Paper}>
            <Table
              sx={{ minWidth: 650, border: `2px solid ${colors.primaryColor}` }}
              aria-label="simple table"
            >
              <TableHead>
                <TableRow >
                  <TableCell></TableCell>
                  <TableCell >Product Details</TableCell>
                  <TableCell align="center">Quantities</TableCell>
                  <TableCell align="center">Price</TableCell>
                  <TableCell align="center">Total</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell
                      component="th"
                      scope="row"
                      sx={{ width: "20px" }}
                    >
                      <img
                        src={married1}
                        style={{ height: "100px", width: "100px" }}
                      />
                    </TableCell>
                    <TableCell
                      component="th"
                      scope="row"
                      sx={{ fontWeight: "bold" }}
                    >
                      {row.name}
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
                          <Button variant="contained"> <RemoveIcon/> </Button>
                          <Button>1</Button>
                          <Button variant="contained"><AddIcon/></Button>
                        </ButtonGroup>
                      </Box>
                    </TableCell>
                    <TableCell align="right">Price</TableCell>
                    <TableCell align="right">Total</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Container>
      </ThemeProvider>
    </>
  );
};

export default Cart;
