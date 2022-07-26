import { useState, useEffect } from "react";
import Product from "../productCard/Product";
import "./style.css";
import { Box, Container, Grid } from "@mui/material";

const Products = ({ products }) => {
  const loadCartProducts = () => {
    const items = localStorage.getItem("cart");
    if (items) {
      try {
        return JSON.parse(items);
      } catch (error) {
        return [];
      }
    } else {
      return [];
    }
  };
  const [isWish, setIsWish] = useState(false);
  const [wishList, setWishList] = useState([]);
  const [cartProducts, setCartProducts] = useState(() => loadCartProducts());
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartProducts));
  }, [cartProducts]);

  function handleAddToCart(product) {
    let existProduct = cartProducts.find((item) => item.id === product.id);

    if (existProduct) {
      const items = cartProducts.map((item) => {
        if (item.id === product.id) {
          item.quantity = item.quantity + 1;
        }
        return item;
      });
      setCartProducts(items);
    } else {
      setCartProducts([
        ...cartProducts,
        {
          ...product,
          quantity: 1,
        },
      ]);
    }
  }

  const handleAddToWishes = (id) => {
    setIsWish((prevState) => !prevState);
  };

  return (
    <Container>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Box sx={{ flexGrow: 1 }}>
              <h2>Products</h2>
              <Grid container spacing={3}>
                {loading ? "Loading..." : null}
                {products.map((product) => (
                  <Grid item={true} key={product.id}>
                    <Product
                      image={product.cover}
                      name={product.name}
                      rating={product.rating}
                      price={product.price}
                      addToCart={() => handleAddToCart(product)}
                      addToWishes={() => handleAddToWishes(product.id)}
                      isWish={isWish}
                    />
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Products;
