import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { Stack, Tooltip, Typography, Box, Button } from "@mui/material";
import { colors } from "../constant/constant";
import { slideInBottom } from "../animations";

export const Product = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  [theme.breakpoints.up("md")]: {
    position: "relative",
  },
  
}));

export const ProductImage = styled("img")(({ src, theme }) => ({
  src: `url(${src})`,
  width: "100%",
  background: colors.primaryColor,
  maxHeight:"500px",
  border:"5px",
  borderColor:colors.primaryColor,

  objectFit:"cover",
  [theme.breakpoints.down("md")]: {
    width: "80%", 
    padding: '24px',
  },
}));

export const ProductAddToCart = styled(Button, {
  shouldForwardProp: (prop) => prop !== "show",
})(({ show, theme }) => ({
  width: "120px",
  fontSize: "15px",
  fontWeight:"bold",
  [theme.breakpoints.up("md")]: {
    position: "absolute",    
    bottom: "5%",
    width: "300px",
    padding: "10px 5px",
    animation:
      show &&
      `${slideInBottom} 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both`,
  },
  background: colors.primaryColor,
  opacity: 0.9,
}));


export default function SingleProduct({ product, matches }) {



  const [showOptions, setShowOptions] = useState(false);

  const handleMouseEnter = () => {
    setShowOptions(true);
  };
  const handleMouseLeave = () => {
    setShowOptions(false);
  };
  return (
    <>
      <Product onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <ProductImage src={product.image} />
        
        {(showOptions || matches) && (
          <ProductAddToCart show={showOptions} variant="contained">
            Add to cart
          </ProductAddToCart>
        )}
       
      </Product>
      
    </>
  );
}
