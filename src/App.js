import { useState } from "react";
import "./App.css";
import Products from "./components/Products.jsx";
import ShoppingCart from "./components/ShoppingCart.jsx";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import products from "./data";
import NavBar from "./components/NavBar/NavBar";

function App() {
  const [cartProducts, setCartProducts] = useState([]);
  let json = JSON.stringify(products);
  console.log(json);

  return (
    <>
      <NavBar />
      <Box sx={{ flexGrow: 1 }} className="box_main">
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Products
              cartProducts={cartProducts}
              setCartProducts={setCartProducts}
              products={products}
            />
          </Grid>

          <Grid item xs={4}>
            <ShoppingCart cartProduct={cartProducts} />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default App;
