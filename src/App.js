import { useState, useEffect, useContext } from "react";
import { Routes, Route } from "react-router-dom";

import Skincare from "./pages/Skincare";
import Login from "./pages/login/index";
import ShoppingBag from "./pages/ShoppingBag.jsx";
import RegistrForm from "./pages/registration/index.jsx";
import NavBar from "./components/NavBar/index.jsx";
import Products from "./pages/Products/index.jsx";
import { CartContext } from "./CartContex";

import "./App.css";

function App() {
  const url =
    "https://my-json-server.typicode.com/averoli/e-commerce-db/products";

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
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
        <Route path="login" element={<Login />}></Route>
        <Route path="signup" element={<RegistrForm />} />
        <Route path="/" element={<NavBar />}>
          <Route index element={<Products products={data} />} />
          <Route path="protected" element={<Skincare />} />
          <Route path="shoppingbag" element={<ShoppingBag />} />
        </Route>
      </Routes>
    </CartContext>
  );
}

export default App;
