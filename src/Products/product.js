import { useState } from "react";
import { Box, Button, Container, Grid } from "@mui/material";
import { colors, products } from "../constant/constant";
import styled from "@emotion/styled";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import { slideInBottom } from "../animations";
import SingleProduct from "./singleproduct";

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

const Products = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const [showOptions, setShowOptions] = useState(false);

  const handleMouseEnter = () => {
    setShowOptions(true);
  };
  const handleMouseLeave = () => {
    setShowOptions(false);
  };

  console.log("products", products);

  const renderProducts = products.map((product) => (
    <Grid
      item
      key={product.id}
      xs={2}
      sm={4}
      md={4}
      display="flex"
      flexDirection={"column"}
      alignItems="center"
    >
      <SingleProduct product={product} matches={matches} />
    </Grid>
  ));

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
          {renderProducts}
        </Grid>
      </Container>
    </>
  );
};
export default Products;
