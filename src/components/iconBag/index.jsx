import { Badge } from "@mui/material/";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { styled } from "@mui/material/styles";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

const IconBag = (props) => {
  return (
    <>
      <StyledBadge badgeContent={props.length} color="secondary">
        <ShoppingCartIcon />
      </StyledBadge>
    </>
  );
}

export default IconBag;
