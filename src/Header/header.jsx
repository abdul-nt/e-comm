import * as React from "react";
import {
  Box,
  Toolbar,
  Typography,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  Divider,
} from "@mui/material";
import { colors } from "../constant/constant";
import LocalMallIcon from "@mui/icons-material/LocalMall";

const Header = () => {
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
          sx={{ fontWeight: "bold" }}
          variant={"h2"}
        >
          Gift
        </Typography>
        <Typography
          color={`${colors.white}`}
          sx={{ fontWeight: "bold" }}
          variant={"h2"}
        >
          Cards
        </Typography>
        <LocalMallIcon
          sx={{
            height: "50px",
            width: "50px",
            marginLeft: "auto",
          }}
        />
      </Toolbar>
    </>
  );
};
export default Header;