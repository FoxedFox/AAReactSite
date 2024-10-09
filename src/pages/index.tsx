import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Button, Tab, Tabs, styled } from "@mui/material";
import { MainPageProductCard } from "../components/MainPageProductCard";
import { StyledContainer } from "../styles";

export default function Home() {
  const [selectedTab, setSelectedTab] = React.useState(0);

  const handleChangeTab = (event: React.SyntheticEvent, newValue: number) => {
    setSelectedTab(newValue);
  };

  return (
    <StyledContainer maxWidth="xl">
      <Box
        sx={{
          my: 4,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <CategoryTab>
          <Typography variant="h4" textAlign="center">
            Продукция
          </Typography>
          <Tabs value={selectedTab} onChange={handleChangeTab} variant="scrollable">
            <Tab label="Вся продукция" />
            <Tab label="Коробки" />
            <Tab label="Пакеты" />
            <Tab label="POS-материалы" />
            <Tab label="офисная полиграфия" />
          </Tabs>
        </CategoryTab>
        <ItemsContainer>
          <MainPageProductCard name="Из микрогрофро- картона" price="10 000" />
          <MainPageProductCard name="Как себя ведет длинное название очень длинное название" price="10 000" />
          <MainPageProductCard name="Как себя ведет длинное название очень длинное название" price="10 000" />
          <MainPageProductCard name="Как себя ведет длинное название очень длинное название" price="10 000" />
          <MainPageProductCard name="Как себя ведет длинное название очень длинное название" price="10 000" />
          <MainPageProductCard name="Как себя ведет длинное название очень длинное название" price="10 000" />
        </ItemsContainer>
      </Box>
    </StyledContainer>
  );
}

const CategoryTab = styled("div")(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(13),
  marginBottom: theme.spacing(5),
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    gap: theme.spacing(3),
  },
}));

const ItemsContainer = styled("div")(({ theme }) => ({
  display: "flex",
  gap: "64px 32px",
  justifyContent: "space-between",
  flexWrap: "wrap",
}));

const TabsTitle = styled(Typography)(({}) => ({
  alignItems: "center",
}));
