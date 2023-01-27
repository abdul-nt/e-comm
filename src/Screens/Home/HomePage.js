import Home from "./home";
import MainLayout from "../../mainlayout/mainlayout";
import theme from "../../theme";
import { ThemeProvider } from "@mui/system";


const HomePage = () => {
  return (
    <ThemeProvider theme={theme}>
      <MainLayout>
        <Home />
      </MainLayout>
    </ThemeProvider>
  );
};

export default HomePage;
