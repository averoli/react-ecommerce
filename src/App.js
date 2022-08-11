import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Login from "./pages/login/index";
import ShoppingBag from "./pages/ShoppingBag.jsx";
import RegistrForm from "./pages/registration/index.jsx";
import NavBar from "./components/NavBar/index.jsx";
import Products from "./pages/Products/index.jsx";
import ProductPage from "./pages/ProductPage/ProductPage";
import Home from "./pages/Home";
import { CartContext } from "./CartContex";

import "./App.css";
import WishList from "./pages/WishList";

export const currency = "€";

function App() {
  const url =
    "https://my-json-server.typicode.com/averoli/e-commerce-db/products";

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <CartContext>
      <Routes>
        <Route path="*" element={<div>404 NOT FOUND</div>} />
        <Route path="login" element={<Login />}></Route>
        <Route path="signup" element={<RegistrForm />} />
        <Route path="/" element={<NavBar />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Products products={data} />} />
          <Route path="shop/:id" element={<ProductPage />} />
          <Route path="home" element={<Home />} />
          <Route path="shoppingbag" element={<ShoppingBag />} />
        </Route>
      </Routes>
    </CartContext>
  );
}

export default App;
