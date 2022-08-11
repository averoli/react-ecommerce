import { styled } from "@mui/material/styles";

const MainButton = styled("button")`
  display: inline-flex;
  min-width: 40px;
  justify-content: center;
  align-items: center;
  padding: 5px 15px;
  border: 1px solid #3D5B59;
  background-color: transparent;
  color: #3D5B59;
  cursor: pointer;
  :hover {
    text-decoration: none;
    background-color: #EED6D3;
    border: 1px solid #3D5B59;
  }
`;

export const AddButton = styled(MainButton)`
  border-radius: 4px 0 0 4px;
`;

export const WishButton = styled(MainButton)`
  border-radius: 0 4px 4px 0;
  border-left: 0;
  :hover {
    background-color: transparent;
  }
`;
