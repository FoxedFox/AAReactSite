import { Container, Typography, styled } from "@mui/material";
import React from "react";
import { StyledContainer } from "../../styles";

export const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <StyledContainer maxWidth="xl">
        <FooterContainer>
          <FooterSection>
            <FooterTitle variant="h4">Контакты</FooterTitle>
            <FooterItem>
              <FooterItemText variant="h6">
                Москва, улица Нарвская, 15А, строение 5
              </FooterItemText>
            </FooterItem>
            <FooterItem>
              <FooterItemText variant="h6">
                <StyledLink href="tel:+74997077891">
                  8 (499) 707-78-91
                </StyledLink>
              </FooterItemText>
              <FooterItemText variant="h6">
                <StyledLink href="tel:+79995743949">
                  8 (999) 574-39-49
                </StyledLink>
              </FooterItemText>
              <FooterItemText variant="h6">
                <StyledLink href="tel:+79252695072">
                  8 (925) 269-50-72
                </StyledLink>
              </FooterItemText>
            </FooterItem>
            <FooterItem>
              <FooterItemText
                variant="h6"
                sx={{ textDecoration: "none", color: "white" }}
              >
                <StyledLink href="mailto:mail@ivanpack.ru?subject=Запрос с сайта">
                  mailto:mail@ivanpack.ru
                </StyledLink>
              </FooterItemText>
            </FooterItem>
          </FooterSection>
          <FooterSection>
            <FooterTitle variant="h4">Время работы</FooterTitle>
            <FooterItem>
              <FooterItemText variant="h6">
                10.00-19.00 <br /> по рабочим дням
              </FooterItemText>
            </FooterItem>
          </FooterSection>
          <FooterSection>
            <FooterTitle variant="h4">Полезная информация</FooterTitle>
            <FooterItem>
              <FooterItemText variant="h6" sx={{ cursor: "pointer" }}>
                Требования к файлам
              </FooterItemText>
            </FooterItem>
            <FooterItem>
              <FooterItemText variant="h6" sx={{ cursor: "pointer" }}>
                Каталог штампов
              </FooterItemText>
            </FooterItem>
          </FooterSection>
        </FooterContainer>
      </StyledContainer>
    </StyledFooter>
  );
};

const StyledFooter = styled("footer")(({ theme }) => ({
  background: "#0F2435",
  color: "#ffffff",
  // padding: theme.spacing(6),
  [theme.breakpoints.down("md")]: {
    paddingTop: theme.spacing(1.5),
    paddingRight: theme.spacing(2.5),
    paddingBottom: theme.spacing(4.5),
    paddingLeft: theme.spacing(2.5),
  },
  [theme.breakpoints.up("md")]: {
    paddingTop: theme.spacing(6),
    paddingRight: theme.spacing(2),
    paddingBottom: theme.spacing(4.25),
    paddingLeft: theme.spacing(2),
  },
}));

const FooterContainer = styled("div")(({ theme }) => ({
  display: "flex",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    width: "100%",
  },
  [theme.breakpoints.up("md")]: {
    justifyContent: "space-between",
  },
}));

const FooterSection = styled("div")(({ theme }) => ({
  flex: "0 0 306px",
  [theme.breakpoints.down("md")]: {
    flex: "0 0 100%",
    marginBottom: theme.spacing(6.5),
  },
  [theme.breakpoints.up("md")]: {
    flex: "0 0 210px",
  },
  [theme.breakpoints.up("lg")]: {
    flex: "0 0 278px",
  },
}));

const FooterTitle = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(6),
  [theme.breakpoints.down("md")]: {
    marginBottom: theme.spacing(2.25),
  },
  [theme.breakpoints.down("lg")]: {
    ...theme.typography.h5,
  },
}));

const FooterItem = styled("div")(() => ({ theme }) => ({
  marginBottom: theme.spacing(4),
  [theme.breakpoints.down("md")]: {
    marginBottom: theme.spacing(1.5),
  },
}));

const FooterItemText = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down("lg")]: {
    ...theme.typography.body1,
  },
}));

const StyledLink = styled("a")(({}) => ({
  textDecoration: "none",
  color: "white",
}));
