import { useState } from "react";
import Product from "../productCard/Product";
import "./style.css";
import { Box, Container, Grid } from "@mui/material";

const Products = ({ products }) => {
  const [loading, setLoading] = useState(false);
console.log(products);
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
                    <Product product={product} />
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
