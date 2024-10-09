import { Container, styled } from "@mui/material";

export const StyledContainer = styled(Container)(({ theme }) => ({
  padding: 0,
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.up("md")]: {
    width: 768,
  },
  [theme.breakpoints.up("lg")]: {
    width: 1010,
  },
  [theme.breakpoints.up("xl")]: {
    width: 1214,
  },
}));
