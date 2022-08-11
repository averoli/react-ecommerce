import { Link } from "react-router-dom";
import {
  Card,
  CardMedia,
  CardContent,
  Rating,
  Typography,
  ButtonGroup,
  CardActions,
} from "@mui/material";
import { AddButton, WishButton } from "../../ui/Button";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { currency } from "../../App";

import "./productCard.css";

const Product = (book) => {
  const {
    id,
    image,
    name,
    rating,
    price,
    description,
    addToCart,
    addToWishes,
    isWish,
  } = book;
  return (
    <Card sx={{ maxWidth: 300, paddingBottom: "1rem" }}>
      <Link
        to={`/shop/${id}`}
        key={id}
        state={{ from: { id, image, name, description, price } }}
      >
        <CardMedia component="img" height="300" image={image} alt={name} />
      </Link>

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
        <Typography variant="h5" color="#67595E">
          {price} {currency}
        </Typography>
      </CardContent>
      <CardActions>
        <ButtonGroup
          color="secondary"
          aria-label="medium secondary button group"
        >
          <AddButton onClick={() => addToCart(book)}>ADD TO CART</AddButton>
          <WishButton onClick={() => addToWishes(book)}>
            {isWish ? (
              <FavoriteIcon color="rose" />
            ) : (
              <FavoriteBorderOutlinedIcon color="rose" />
            )}
          </WishButton>
        </ButtonGroup>
      </CardActions>
    </Card>
  );
};

export default Product;
