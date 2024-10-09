import { ArrowDropDown } from "@mui/icons-material";

import {
  Box,
  Button,
  Typography,
  styled,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import { MobileMenu } from "./MobileMenu";
import Link from "next/link";
import { ProductionMenu } from "./ProductionMenu";
import { DesktopMenuItem, IDesktopMenuItemElement } from "./DesktopMenuItem";

const productionItems: IDesktopMenuItemElement[] = [
  {
    id: "boxes",
    url: "/production/boxes",
    title: "Коробки",
  },
  {
    id: "packages",
    url: "/production/packages",
    title: "Пакеты",
  },
  {
    id: "pos-materials",
    url: "/production/pos-materials",
    title: "POS-материалы",
  },
  {
    id: "polygraphy",
    url: "/production/polygraphy",
    title: "Полиграфия",
  },
];

const servicesItems: IDesktopMenuItemElement[] = [
  {
    id: "felling",
    url: "/services/felling",
    title: "Вырубка, биговка",
  },
  {
    id: "embossing",
    url: "/services/embossing",
    title: "Тиснение, конгрев",
  },
  {
    id: "kashirovka",
    url: "/services/kashirovka",
    title: "Кашировка",
  },
  {
    id: "lamination",
    url: "/services/lamination",
    title: "Ламинация",
  },
  {
    id: "varnishing",
    url: "/services/varnishing",
    title: "УФ-лакирование",
  },
  {
    id: "manual-operation",
    url: "/services/manual-operation",
    title: "Ручные операции",
  },
];
export const HeaderMenu = () => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <StyledMenu>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "100%",
        }}
      >
        <Box>
          <StyledNextLink href="/">Logo</StyledNextLink>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            gap: theme.spacing(4),
          }}
        >
          {!isMobile && (
            <>
              {/* <MenuItem>
                <Typography variant="subtitle1">Продукция</Typography>
                <ArrowDropDown />
              </MenuItem> */}
              <DesktopMenuItem
                id="production"
                title="Продукция"
                items={productionItems}
              />
              <DesktopMenuItem
                id="services"
                title="Услуги"
                items={servicesItems}
              />
              {/* <MenuItem>
                <Typography variant="subtitle1">Услуги</Typography>
                <ArrowDropDown />
              </MenuItem> */}
              <StyledNextLink href="/contacts">
                <Typography
                  variant="subtitle1"
                  sx={{ color: "rgba(0, 0, 0, 0.87)" }}
                >
                  Контакты
                </Typography>
              </StyledNextLink>
            </>
          )}
          <Typography variant="subtitle1">
            <StyledLink href="tel:+74997077891">+7 (499) 707-78-91</StyledLink>
          </Typography>
          {isDesktop && (
            <Button color="primary" variant="outlined">
              ЗАКАЗАТЬ ЗВОНОК
            </Button>
          )}
          {isMobile && <MobileMenu />}
        </Box>
      </Box>
    </StyledMenu>
  );
};

const StyledMenu = styled("div")(({ theme }) => ({
  backgroundColor: "#ffffff",
  height: 64,
  boxShadow: "4px 4px 30px 0px #0000000D",
  borderRadius: 16,
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
  marginBottom: theme.spacing(12.25),
  marginTop: theme.spacing(4),
  [theme.breakpoints.down("lg")]: {
    height: 60,
  },
  [theme.breakpoints.down("md")]: {
    height: 38,
    marginTop: theme.spacing(1.75),
  },
  [theme.breakpoints.down("sm")]: {},
}));

const MenuItem = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(0),
}));

const StyledLink = styled("a")(({}) => ({
  textDecoration: "none",
  color: "rgba(0, 0, 0, 0.87)",
}));

const StyledNextLink = styled(Link)(({}) => ({
  textDecoration: "none",
}));
