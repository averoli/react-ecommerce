import { useLocation, useParams } from "react-router-dom";
import {
  Button,
  ButtonGroup,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { ProductImage } from "../../ui/Image";
import { AddButton } from "../../ui/Button";
import { currency } from "../../App";
const ProductPage = () => {
  let params = useParams();
  let location = useLocation();
  const { id, name, image, description, price } = location.state.from;

  return (
    <Container sx={{ position: "relative" }}>
      <Grid container spacing={2}>
        <Grid item sm={4}>
          <ProductImage src={image} alt={name} width="100" />
        </Grid>
        <Grid item xs={12} sm={8}>
          <h2>{name}</h2>
          <Typography variant="p" color="#424242">
            {description}
          </Typography>
          <Typography variant="h5" color="#482880">
            {price}
            {currency}
          </Typography>
          <ButtonGroup
            color="secondary"
            aria-label="medium secondary button group"
          >
            <AddButton>ADD TO CART</AddButton>
            <Button>
              <FavoriteIcon />
            </Button>
          </ButtonGroup>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProductPage;
