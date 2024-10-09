import { StyledContainer } from "@/styles";
import { Typography, styled, useMediaQuery, useTheme } from "@mui/material";
import { GetStaticPaths, GetStaticProps } from "next";
import React, { FC } from "react";
import { MobileProductionItem } from "@/components/ProductionItem/MobileProductionItem";
import { DesktopProductionItem } from "@/components/ProductionItem/DesktopProductionItem";

interface IProductionPage {
  product: IProduction;
}
const Production: FC<IProductionPage> = ({ product }) => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <StyledContainer maxWidth="xl">
      <Typography variant="h3" marginBottom={3}>
        {product.title}
      </Typography>
      <Typography variant="body1" marginBottom={4.5}>
        {product.description}
      </Typography>
      <ProductItemsContainer>
        {isMobile && product.items.map((item) => <MobileProductionItem key={item.name} item={item} />)}
        {isDesktop && product.items.map((item) => <DesktopProductionItem key={item.name} item={item} />)}
      </ProductItemsContainer>
    </StyledContainer>
  );
};

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: [
    { params: { id: "boxes" } },
    { params: { id: "packages" } },
    { params: { id: "pos-materials" } },
    { params: { id: "polygraphy" } },
  ],
  fallback: false,
});

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const product = productions[params?.id as string];

  return { props: { product } };
};

export interface IProductionItem {
  name: string;
  url: string;
  imageUrl: string;
}
export interface IProduction {
  title: string;
  description: string;
  items: IProductionItem[];
}
export interface IProductions {
  [key: string]: IProduction;
}
const productions: IProductions = {
  boxes: {
    title: "Коробки",
    description:
      "Коробка, это универсальная упаковка, выгодно представляющая ваш товар. Вы можете заказать в компании Арт Авангард коробки любого дизайна и конфигурации. Наши дизайнеры помогут разработать конструктив и посоветуют подходящую постпечатную отделку. Ниже представлены некоторые из возможных вариантов коробок.",
    items: [
      {
        name: "Крышка-дно",
        imageUrl: "/boxes/testImage.png",
        url: "/production/boxes/krishka_dno",
      },
      {
        name: "С магнитами",
        imageUrl: "/packages/package_1.jpg",
        url: "/production/boxes/s_magnitami",
      },
      {
        name: "Микрогофрокартон",
        imageUrl: "/packages/package_2.jpg",
        url: "/production/boxes/microgofrokarton",
      },
      {
        name: "Гофрокартон",
        imageUrl: "/packages/package_3.jpg",
        url: "/production/boxes/gofrokarton",
      },
      {
        name: "Пеналы",
        imageUrl: "/packages/package_4.jpg",
        url: "/production/boxes/penaly",
      },
      {
        name: "Слимованные",
        imageUrl: "/packages/package_1.jpg",
        url: "/production/boxes/slimovannye",
      },
      {
        name: "Тубусы",
        imageUrl: "/packages/package_2.jpg",
        url: "/production/boxes/tubusy",
      },
      {
        name: "Для сигар",
        imageUrl: "/packages/package_3.jpg",
        url: "/production/boxes/dlya_sigar",
      },
      {
        name: "VIP-коробки",
        imageUrl: "/packages/package_4.jpg",
        url: "/production/boxes/vip_korobki",
      },
    ],
  },
  packages: {
    title: "Пакеты",
    description: "наши пакеты самые охуенные в мире",
    items: [],
  },
  "pos-materials": {
    title: "POS-материалы",
    description: "наши POS-материалы самые охуенные в мире",
    items: [],
  },
  polygraphy: {
    title: "Полиграфия",
    description: "наша полиграфия самые охуенные в мире",
    items: [],
  },
};

export default Production;

const ProductItemsContainer = styled("div")(({ theme }) => ({
  display: "flex",
  rowGap: theme.spacing(4.5),
  flexWrap: "wrap",
  justifyContent: "space-between",
  marginBottom: theme.spacing(7.5),
}));
