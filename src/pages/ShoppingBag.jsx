import useCounter from "../hook/useCounter";

import { Box, Button, Container, Grid, Paper } from "@mui/material";

import { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";

const ShoppingBag = ({ value = 0 }) => {
  const [items, setItems] = useState([]);
  const { addValue, substractValue, resetValue } = useCounter(value);

  useEffect(() => {
    const fetchData = () => {
      const data = JSON.parse(localStorage.getItem("cart"));
      setItems(data);
    };
    fetchData();
  }, []);

  const handleDelete = (id) => {
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
  };

  return (
    <Container>
      <h2>Shopping Bag</h2>
      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
          {items.length === 0 && <h2>Shopping bag is empty</h2>}
          {items &&
            items.map((item) => (
              <Paper
                key={uuid()}
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
                <img src={item.cover} width="70px" />

                <Box
                  sx={{
                    width: 250,
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  {item.name}
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    textAlign: "center",
                    alignItems: "center",
                    color: "#482880",
                  }}
                >
                  {item.price}
                </Box>
                <Box>
                  <Button onClick={substractValue}>-</Button>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    {item.quantity}
                  </Box>
                  <Button onClick={() => addValue(item.quantity)}>+</Button>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    textAlign: "center",
                    alignItems: "center",
                  }}
                >
                  {item.quantity * item.price}
                </Box>
                <Button onClick={() => handleDelete(item.id)}>x</Button>
              </Paper>
            ))}
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper
            elevation={3}
            sx={{
              p: 2,
              bgcolor: "",
              display: "flex",
              justifyContent: "space-between",
              m: 2,
            }}
          >
            <Box>Total:</Box>
            <Box> €</Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ShoppingBag;
