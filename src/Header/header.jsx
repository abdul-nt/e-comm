import * as React from "react";
import { Badge, Toolbar, Typography } from "@mui/material";
import { colors } from "../constant/constant";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import { useNavigate } from "react-router-dom";

const Header = ({ cartLength }) => {
  const navigate = useNavigate();

  return (
    <>
      <Toolbar
        sx={{
          padding: "20px",
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
          badgeContent={`${cartLength ? cartLength : 0}`}
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
