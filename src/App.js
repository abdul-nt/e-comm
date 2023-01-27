import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from "./Screens/Home/Cart";
import Checkout from "./Screens/Home/Checkout/checkout";
import HomePage from "./Screens/Home/HomePage";

function App() {
  useEffect(() => {
    document.title = "E-Comm";
  });

  return (
    <>
      <Router>
        <Routes>
          <Route path={"/"} element={<HomePage />} />
          <Route path={"/cart"} element={<Cart />} />
          <Route path={"/checkout"} element={<Checkout />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
