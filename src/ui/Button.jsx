import { styled } from "@mui/material/styles";

const MainButton = styled("button")`
  display: inline-flex;
  min-width: 40px;
  justify-content: center;
  align-items: center;
  padding: 5px 15px;
  border: 1px solid rgba(156, 39, 176, 0.5);
  background-color: transparent;
  color: #9c27b0;
  cursor: pointer;
  :hover {
    text-decoration: none;
    background-color: rgba(156, 39, 176, 0.04);
    border: 1px solid #9c27b0;
  }
`;

export const AddButton = styled(MainButton)`
  border-radius: 4px 0 0 4px;
`;

export const WishButton = styled(MainButton)`
  border-radius: 0 4px 4px 0;
  border-left: 0;
`;
