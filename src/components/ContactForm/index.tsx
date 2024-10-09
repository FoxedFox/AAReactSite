//import styled from "@emotion/styled";
import { Typography, TextField, Button, styled } from "@mui/material";
import React from "react";

export const ContactForm: React.FC = () => {
  return (
    <Container>
      <Typography variant="h4" align="center">
        Остались вопросы? Свяжитесь с нами!
      </Typography>
      <ContactPropsInfo>
        <ContactProps>
          <TextField id="standard-basic1" fullWidth label="Ввести ФИО" variant="standard" />
          <TextField required id="standard-basic2" fullWidth label="Ввести телефон" variant="standard" />
          <TextField id="standard-basic3" fullWidth label="Ввести E-mail" variant="standard" />
        </ContactProps>
        <TextField
          id="standard-basic4"
          inputProps={{ maxLength: 10 }}
          fullWidth
          label="Описание заказа"
          variant="standard"
        />
      </ContactPropsInfo>
      <Button variant="contained">Отправить</Button>
    </Container>
  );
};

const Container = styled("div")(({ theme }) => ({
  border: "2px solid #FF5C00",
  borderRadius: "20px",
  paddingTop: theme.spacing(2.25),
  paddingRight: theme.spacing(5),
  paddingBottom: theme.spacing(2.25),
  paddingLeft: theme.spacing(5),
}));

const ContactPropsInfo = styled("div")(({ theme }) => ({
  marginBottom: theme.spacing(5),
}));
const ContactProps = styled("div")(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(3),
  marginBottom: theme.spacing(3),
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    gap: theme.spacing(3),
  },
  [theme.breakpoints.up("md")]: {},
  flex: "0 0 33.3%",
}));
