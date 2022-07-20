import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";

const ShoppingBag = ({ cartProduct }) => {
  console.log(cartProduct);
  return (
    <>
      <h2>Shopping Bag</h2>

      {/* <Box>
      {(cartProduct.length === 0 && <p>Shopping cart is empty</p>) || (
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          {cartProduct.map((itemCart) => (
            <ListItem key={itemCart.id}>
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" src={itemCart.img} />
              </ListItemAvatar>
              <ListItemText secondary={itemCart.title} />
              <ListItemText>{itemCart.qty}</ListItemText>
              <ListItemText primary={`${itemCart.price} €`} />
            </ListItem>
          ))}
        </List>
      )}
    </Box> */}
      <ListItem>
        <ListItemText primary="TOTAL" />

        <ListItemText>1 €</ListItemText>
      </ListItem>
    </>
  );
};

export default ShoppingBag;
