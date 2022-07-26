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

const Product = ({
  image,
  name,
  rating,
  price,
  addToCart,
  addToWishes,
  isWish,
}) => {
  return (
    <Card sx={{ maxWidth: 300, paddingBottom: "1rem" }}>
      <CardMedia component="img" height="300" image={image} alt={name} />
      <CardContent className="card_content">
        <Typography variant="h6" color="text.secondary">
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
