import * as React from "react";
import { Badge, Toolbar, Typography } from "@mui/material";
import { colors } from "../constant/constant";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Header = () => {
  const navigate = useNavigate();
  const [items, setItems] = useState();

  useEffect(() => {
    onCart();
  }, [items]);

  const onCart = () => {
    try {
      let data = JSON.parse(localStorage.getItem("cart"));
      setItems(data?.length);
    } catch (e) {
      console.log("e", e);
    }
  };

  return (
    <>
      <Toolbar
        sx={{
          padding: "20px",
          //   justifyContent: "center",

          backgroundColor: `${colors.primaryColor}`,
        }}
      >
        <Typography
          color={`${colors.black}`}
          sx={{ fontWeight: "bold", cursor: "pointer" }}
          variant={"h2"}
          onClick={() => {
            navigate("/");
          }}
        >
          Gift
        </Typography>
        <Typography
          color={`${colors.white}`}
          sx={{ fontWeight: "bold", cursor: "pointer" }}
          variant={"h2"}
          onClick={() => {
            navigate("/");
          }}
        >
          Cards
        </Typography>

        <Badge
          sx={{
            marginLeft: "auto",
          }}
          badgeContent={`${items ? items : 0}`}
        >
          <LocalMallIcon
            sx={{
              height: "50px",
              width: "50px",
              // marginLeft: "auto",
              cursor: "pointer",
            }}
            onClick={() => {
              navigate("/cart");
            }}
          />
        </Badge>
      </Toolbar>
    </>
  );
};
export default Header;
