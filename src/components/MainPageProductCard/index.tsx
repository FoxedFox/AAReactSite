import { Button, Typography, styled } from "@mui/material";
import { relative } from "path";
import React, { FC } from "react";

interface IMainPageProductCard {
  image?: string;
  name: string;
  price: string;
}
export const MainPageProductCard: FC<IMainPageProductCard> = ({ name, price, image }) => {
  return (
    <CardContainer>
      <CardImageContainer />
      <CardInfoContainer>
        <ProductNameContainer>
          <NameContainer>{name}</NameContainer>
          <Typography>от {price} ₽</Typography>
        </ProductNameContainer>
        <ProductNameButton>
          <Button variant="contained">Заказать звонок</Button>
        </ProductNameButton>
      </CardInfoContainer>
    </CardContainer>
  );
};

const CardContainer = styled("div")(() => ({
  border: "1.5px solid #FF5C00",
  boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.1)",
  borderRadius: "20px",
  height: 374,
  minWidth: 350,
  maxWidth: "30%",
}));

const CardImageContainer = styled("div")(({ theme }) => ({
  height: 218,
  backgroundColor: "#ffffff",
  borderTopRightRadius: 20,
  borderTopLeftRadius: 20,
}));

const CardInfoContainer = styled("div")(({ theme }) => ({
  background: "#F5F2EB",
  padding: "20px 40px",
  height: 152,
  borderBottomRightRadius: 20,
  borderBottomLeftRadius: 20,
}));

const ProductNameContainer = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: theme.spacing(5),
}));

const NameContainer = styled("div")(() => ({
  lineHeight: "24px",
  display: " -webkit-box",
  " -webkit-box-orient": "vertical",
  "-webkit-line-clamp": 2 /* number of lines to show */,
  maxHeight: "64px",
  overflow: "hidden",
  //whiteSpace: "nowrap",
  textOverflow: "ellipsis",
  width: "170px",
  fontWeight: "700",
  fontSize: "20px",
}));
const ProductNameButton = styled("div")(({ theme }) => ({
  position: "relative",
  bottom: theme.spacing(2.5),
}));
