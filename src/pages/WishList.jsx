import { useState, useEffect } from "react";
import { currency } from "../App";
import {
  Box,
  Dialog,
  DialogContent,
  Button,
  ButtonGroup,
  Container,
  Paper,
  Typography,
} from "@mui/material/";
import { AddButton, WishButton } from "../ui/Button";

const WishList = ({ open, handleClose }) => {
  const getWishes = JSON.parse(localStorage.getItem("wish")) || [];
  const [wishes, setWishes] = useState(getWishes);

  return (
    <Dialog
      open={open}
      // TransitionComponent={Transition}
      // keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogContent>
        <Container>
          {wishes?.length === 0 && (
            <Typography>OUR FAVORITE PRODUCTS AT A GLANCE.</Typography>
          )}
          {wishes.map((wish) => (
            <Paper
              key={wish.id}
              elevation={3}
              sx={{
                p: 1,
                bgcolor: "",
                display: "flex",
                m: 2,
                "& > :not(style)": {
                  m: 1,
                },
              }}
            >
              <Box>{wish.name}</Box>
              <Box>
                {wish.price} {currency}
              </Box>
              <ButtonGroup
                color="secondary"
                aria-label="medium secondary button group"
              >
                <AddButton>ADD TO CART</AddButton>
                <WishButton>DELETE</WishButton>
              </ButtonGroup>
            </Paper>
          ))}
        </Container>
      </DialogContent>
    </Dialog>
  );
};

export default WishList;
