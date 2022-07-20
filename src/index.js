import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";
import Sale from "./pages/Sale.jsx";
import Skincare from "./pages/Skincare";
import Login from "./pages/login/index";
import Main from "./pages/main/index.jsx";
import ShoppingBag from "./pages/ShoppingBag.jsx";
import RegistrForm from "./pages/registration/index.jsx";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="login" element={<Login />}></Route>
      <Route path="signup" element={<RegistrForm />} />
      <Route path="/" element={<App />}>
        <Route index element={<Main />} />
        <Route path="sale" element={<Sale />} />
        <Route path="protected" element={<Skincare />} />
        <Route path="shoppingbag" element={<ShoppingBag />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
