import { Button, Container, Grid } from "@mui/material";
import { colors, products } from "../../../constant/constant";
import styled from "@emotion/styled";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import { slideInBottom } from "../../../animations";
import SingleProduct from "../products/singleproduct/singleproduct"

export const ProductImage = styled("img")(({ src, theme }) => ({
  src: src,
  width: "100%",
  background: colors.grey,
  padding: "10px",
  [theme.breakpoints?.down("md")]: {
    width: "80%",
    padding: "24px",
  },
}));

export const AddToCart = styled(Button, {
  shouldForwardProp: (prop) => prop !== "show",
})(({ show, theme }) => ({
  width: "120px",
  fontSize: "12px",
  [theme.breakpoints?.up("md")]: {
    position: "absolute",
    bottom: "2%",
    width: "300px",
    padding: "10px 5px",
    animation:
      show &&
      `${slideInBottom} 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both`,
  },
  background: colors.grey,
  opacity: 0.9,
}));

const Products = ({ onCart, onAddCart, cartItems }) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <Container>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          justifyContent="center"
          sx={{ margin: `20px 4px 10px 4px` }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {products.map((product, index) => {
            return (
              <Grid
                item
                key={index}
                xs={2}
                sm={4}
                md={4}
                display="flex"
                flexDirection={"column"}
                alignItems="center"
              >
                <SingleProduct
                  onCart={onCart}
                  onAddCart={onAddCart}
                  product={product}
                  matches={matches}
                  cartItems={cartItems}
                />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </>
  );
};
export default Products;
