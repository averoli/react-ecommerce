import { useState, useEffect } from "react";

import Products from "../Products/index";
import ShoppingCart from "../ShoppingCart";
import { Box, Grid } from "@mui/material/";

import products from "../../data";

const Main = () => {

    const url = "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline"
  const [cartProducts, setCartProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        console.log(response);
        const { data } = await response.json();
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [url]);

  let json = JSON.stringify(products);
  console.log(json);

  return (
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
  );
};

export default Main;
