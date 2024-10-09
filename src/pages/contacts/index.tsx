/* eslint-disable react/no-unescaped-entities */
import { ContactInformation } from "@/components/ContactInformation";
import { ContactMap } from "@/components/ContactMap";
import { ContactForm } from "@/components/ContactForm";
import { StyledContainer } from "@/styles";
import { Box, Container, Typography } from "@mui/material";
import React, { FC } from "react";

const ContactsPage: FC = () => {
  return (
    <StyledContainer maxWidth="xl">
      <Box
        sx={{
          my: 4,
          display: "flex",
          flexDirection: "column",
          gap: 4.5,
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          Контакты
        </Typography>
        <ContactInformation />
        <ContactMap />
        <ContactForm />
      </Box>
    </StyledContainer>
  );
};

export default ContactsPage;
