import { useState } from "react";

import {
  Card,
  CardMedia,
  CardContent,
  Rating,
  Typography,
  Button,
  ButtonGroup,
  CardActions,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

import "./productCard.css";

const Product = ({ product }) => {
  const { id, image_link, title, name, rating, price } = product;
  const [isWish, setIsWish] = useState(false);
  const [cartProducts, setCartProducts] = useState([]);
  const addToCart = ({ product }) => {
    const { id, title, price } = product;
    console.log(id, title, price);
    // const existProduct = cartProducts.find((item) => item.id === product.id);

    localStorage.setItem("cart", "hoho");
  };

  const addToWishes = () => {
    setIsWish((prevState) => !prevState);
  };

  return (
    <Card sx={{ maxWidth: 300, paddingBottom: "1rem" }}>
      <CardMedia component="img" height="194" image={image_link} alt={title} />
      <CardContent className="card_content">
        <Typography variant="p" color="text.secondary">
          {name}
        </Typography>
        <Rating
          className="card_rating"
          name="half-rating"
          value={rating}
          precision={0.5}
        />
        <Typography variant="h5" color="#482880">
          {price} €
        </Typography>
      </CardContent>
      <CardActions>
        <ButtonGroup
          color="secondary"
          aria-label="medium secondary button group"
        >
          <Button onClick={addToCart}>ADD TO CART</Button>
          <Button onClick={addToWishes}>
            {isWish ? (
              <FavoriteIcon />
            ) : (
              <FavoriteBorderOutlinedIcon color="secondary" />
            )}
          </Button>
        </ButtonGroup>
      </CardActions>
    </Card>
  );
};

export default Product;
