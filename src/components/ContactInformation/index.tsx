import { Typography, styled } from "@mui/material";
import React from "react";

export const ContactInformation: React.FC = () => {
  return (
    <Container>
      <Item>
        <Typography variant="h6"> Москва, улица Нарвская, 15А, строение 5 </Typography>{" "}
      </Item>
      <Item>
        <Typography variant="h6">Время работы: 10.00-19.00 по рабочим дням</Typography>
      </Item>
      <Item>
        <StyledLink href="tel:+74997077891">
          <Typography variant="h6">8(499) 707-78-91</Typography>
        </StyledLink>
        <StyledLink href="tel:+79995743949">
          <Typography variant="h6">8(999) 574-39-49</Typography>
        </StyledLink>
        <StyledLink href="tel:+79252695072">
          <Typography variant="h6">8(925) 269-50-72</Typography>
        </StyledLink>
      </Item>
    </Container>
  );
};

const Container = styled("div")(({ theme }) => ({
  display: "flex",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    gap: theme.spacing(4),
  },
  [theme.breakpoints.up("md")]: {},
}));

const Item = styled("div")(({ theme }) => ({
  flex: "0 0 33.3%",
  paddingRight: theme.spacing(5),
  [theme.breakpoints.down("md")]: {
    // paddingBottom: theme.spacing(4),
  },
}));

const StyledLink = styled("a")(({}) => ({
  textDecoration: "none",
  color: "#000000",
}));
