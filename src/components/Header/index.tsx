import { Typography, styled, Button } from "@mui/material";
import React from "react";
import { StyledContainer } from "../../styles";
import { HeaderMenu } from "../HeaderMenu";
import { useRouter } from "next/router";

export const Header: React.FC = () => {
  const { pathname } = useRouter();

  const isIndexPage = pathname === "/";
  return (
    <StyledSection isIndexPage={isIndexPage}>
      <StyledContainer maxWidth="xl">
        <HeaderMenu />
        {isIndexPage && (
          <BannerTextContainer>
            <TextContainer>
              <Typography variant="h2" fontWeight={700} color="#FF5C00">
                Арт Авангард
              </Typography>
              <Typography variant="h4" color="#ffffff" marginBottom={3}>
                Почему выбирают нас
              </Typography>
              <Typography variant="body1" color="#ffffff">
                Мы реализуем любой проект, независимо от его сложности. Беремся за срочные и нестандартные заказы в
                течение нескольких часов после согласования технического задания. Мы сотрудничаем только с проверенными
                поставщиками и используем в работе материалы высокого качества. Поэтому заказчики всегда остаются
                довольны полученным результатом.
              </Typography>
            </TextContainer>
            <BannerButton>
              <Button size="large" variant="contained">
                Заказать звонок
              </Button>
            </BannerButton>
          </BannerTextContainer>
        )}
      </StyledContainer>
    </StyledSection>
  );
};

const StyledSection = styled("section")<{ isIndexPage: boolean }>(({ theme, isIndexPage }) => ({
  height: isIndexPage ? 642 : undefined,
  [theme.breakpoints.down("sm")]: {
    height: isIndexPage ? 456 : undefined,
  },
  [theme.breakpoints.down("md")]: {
    height: isIndexPage ? 520 : undefined,
  },
  background: isIndexPage
    ? "linear-gradient(90deg, rgba(15,36,53,1) 0%, rgba(15,36,53,1) 38%, rgba(184,187,187,1) 100%)"
    : undefined,
}));

const BannerTextContainer = styled("div")(({ theme }) => ({
  width: 510,
  display: "flex",
  flexDirection: "column",
}));

const TextContainer = styled("div")(({ theme }) => ({
  marginBottom: theme.spacing(6),
  [theme.breakpoints.down("sm")]: {
    // marginBottom: theme.spacing(3),
  },
  [theme.breakpoints.down("md")]: {
    marginBottom: theme.spacing(3),
  },
  [theme.breakpoints.up("md")]: {},
}));

const BannerButton = styled("div")(({ theme }) => ({
  // marginBottom: theme.spacing(10.5),
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.up("md")]: {},
}));
