import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Body from "./components/Body/Body";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import AddToCart from "./components/cart/AddToCart";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          {" "}
          <Route exact path="/" element={<Body />} />{" "}
          <Route path="/add-to-cart" element={<AddToCart />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;