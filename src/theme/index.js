import { createTheme } from "@mui/material/styles";
import { darken, lighten } from "polished";
import { colors } from "../constant/constant";

export const DrawerWidth = 250;

const theme = createTheme({
  palette: {
    primary: {
      main: colors.primaryColor,
    },
    secondary: {
      main: colors.grey,
    },
  },

  components: {
    MuiButton: {
      defaultProps: {
        disableRipple: true,
        disableElevation: true,
      },
    },
    MuiTooltip: {
      defaultProps: {
        arrow: true,
      },
      styleOverrides: {
        tooltip: {
          background: colors.primaryColor,
        },
        arrow: {
          color: colors.primaryColor,
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          width: DrawerWidth,          
          background: colors.primaryColor,
          color: colors.grey,
          borderRadius: '0px 100px 0px 0px',
          borderRight: `1px solid ${colors.primaryColor}`
        }
      }
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: lighten(0.2, colors.primaryColor)
        }
      }
    },
    MyShopButton: {
      styleOverrides: {
        root: {
          color: colors.white,
        },
        primary: {
          background: colors.primaryColor,
          "&:hover": {
            background: lighten(0.05, colors.primaryColor),
          },
        },
        secondary: {
          background: `${colors.grey}`,
          "&:hover": {
            background: lighten(0.05, colors.primaryColor),
          },
        },
      },
    },
  },
});

export default theme;
