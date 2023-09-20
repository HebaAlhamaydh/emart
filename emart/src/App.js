// import "./App.css";

import Navbar from "./component/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import Home from "./component/Home";
import { Routes, Route } from "react-router-dom";
import Product from "./component/Product";
import Products from "./component/Products";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/products/:id" element={<Products />} />
      </Routes>
    </div>
  );
}

export default App;
