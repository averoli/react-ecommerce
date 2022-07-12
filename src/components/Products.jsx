import ProductCard from "./ProductCard";
import "./products.css";
import {
  Box,
  Card,
  CardMedia,
  CardContent,
  Grid,
  Rating,
  Typography,
} from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineOutlinedIcon from "@mui/icons-material/RemoveCircleOutlineOutlined";
import IconButton from "@mui/material/IconButton";

const Products = ({ cartProducts, setCartProducts, products }) => {
  const addProduct = (product) => {
    const existProduct = cartProducts.find((item) => item.id === product.id);
    // existProduct ? console.log("Exist") : console.log("NOT");
    if (existProduct)
      return setCartProducts(
        cartProducts.map((item) =>
          item.id === product.id
            ? { ...existProduct, qty: existProduct.qty + 1 }
            : existProduct
        )
      );
    return setCartProducts([...cartProducts, product]);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <h2>Products</h2>
      <Grid container spacing={1}>
        {products.map((product) => (
          <Grid item={true} key={product.id}>
            <ProductCard>
              <Card sx={{ maxWidth: 300 }}>
                <CardMedia
                  component="img"
                  height="194"
                  image={product.img}
                  alt={product.title}
                />
                <CardContent className="cardContent_box">
                  <Box>
                    <Typography variant="h5" color="text.secondary">
                      {product.title}
                    </Typography>
                    <Rating
                      className="card_rating"
                      name="half-rating"
                      value={product.rating}
                      precision={0.5}
                    />
                    <Typography variant="h5" color="info.dark">
                      {product.price} €
                    </Typography>
                  </Box>
                  <Box className="card_box_button">
                    <IconButton
                      color="primary"
                      onClick={() => addProduct(product)}
                    >
                      <RemoveCircleOutlineOutlinedIcon sx={{ fontSize: 30 }} />
                    </IconButton>
                    <div className="card_quantity">1</div>
                    <IconButton
                      color="primary"
                      onClick={() => addProduct(product)}
                    >
                      <AddCircleOutlineIcon sx={{ fontSize: 30 }} />
                    </IconButton>
                  </Box>
                </CardContent>
              </Card>
            </ProductCard>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Products;
