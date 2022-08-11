import { useState, useEffect, useContext } from "react";

import Product from "../productCard/Product";
import "./style.css";
import { Container, Grid } from "@mui/material";

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
 
  const [cartProducts, setCartProducts] = useState(() => loadCartProducts());

  let [wishProducts, setWishProducts] = useState([]);
  console.log("cartProducts", cartProducts);
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

  useEffect(() => {
    localStorage.setItem("wish", JSON.stringify(wishProducts));
  }, [wishProducts]);

  const handleAddToWishes = (product) => {
    let existWish = wishProducts.find((itemWish) => itemWish.id === product.id);
    if (!existWish) {
      setWishProducts([...wishProducts, product]);
      setIsWish((prevState) => !prevState);
    } else {
      wishProducts = wishProducts.filter((item) => item.id != existWish.id);
      setWishProducts(wishProducts);
      setIsWish((prevState) => !prevState);
    }
  };

  return (
    <Container sx={{ marginTop: "1rem" }}>
      <Grid container spacing={3}>
        {loading ? "Loading..." : null}
        {products.map((product) => (
          <Grid item={true} key={product.id}>
            <Product
              id={product.id}
              image={product.cover}
              name={product.name}
              rating={product.rating}
              price={product.price}
              description={product.description}
              addToCart={handleAddToCart}
              addToWishes={handleAddToWishes}
              isWish={isWish}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Products;
