import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from "./screens/home/cart";
import Checkout from "./screens/home/checkout/checkout";
import HomePage from "./screens/home/homepage";

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
