import { IProductionItem } from "@/pages/production/[id]";
import { Typography, styled } from "@mui/material";
import React from "react";
import Image from "next/image";

interface IDesktopProductionItem {
  item: IProductionItem;
}

export const DesktopProductionItem: React.FC<IDesktopProductionItem> = ({ item }) => {
  return (
    <ProductItem key={item.name}>
      <ProductItemImageContainer>
        <Image
          style={{
            borderRadius: "20px 20px 0 0",
          }}
          alt={`коробка ${item.name}`}
          src={item.imageUrl}
          width={280}
          height={241}
        />
      </ProductItemImageContainer>
      <ProductItemNameContainer>
        <Typography variant="h6">{item.name}</Typography>
      </ProductItemNameContainer>
    </ProductItem>
  );
};

const ProductItem = styled("div")(({ theme }) => ({
  border: "1px solid #FF5C00",
  borderRadius: 20,
  flex: "0 0 280px",
  // height: 218,
}));

const ProductItemImageContainer = styled("div")(({ theme }) => ({
  borderRadius: "20px 20px 0 0",
}));

const ProductItemNameContainer = styled("div")(({ theme }) => ({
  borderRadius: "0 0 20px 20px",
  height: 78,
  backgroundColor: "#F5F2EB",
  padding: theme.spacing(1.5),
}));
