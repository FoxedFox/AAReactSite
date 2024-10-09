import { IProductionItem } from "@/pages/production/[id]";
import { Button, styled } from "@mui/material";
import React from "react";
import NextLink from "next/link";

interface IMobileProductionItem {
  item: IProductionItem;
}
export const MobileProductionItem: React.FC<IMobileProductionItem> = ({ item }) => {
  return (
    <NextLink
      style={{
        width: "100%",
      }}
      href={item.url}
    >
      <Button
        sx={{
          width: "100%",
        }}
        variant="outlined"
      >
        {item.name}
      </Button>
    </NextLink>
  );
};

const MobileProductionItemContainer = styled("div")(({ theme }) => ({
  width: "100%",
  height: 36,
  border: "1px solid #FF5C00",
  justifyContent: "center",
  alignItems: "center",
}));
