import React, { startTransition } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import Sale from "./components/Sale"
import Skincare from "./components/Skincare"
import LoginForm from "./components/loginForm/index"


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="sale" element={<Sale />} />
      <Route path="skincare" element={<Skincare />} />
      <Route path="login" element={<LoginForm />} />
    </Routes>
  </BrowserRouter>
);
