import React, { FC, PropsWithChildren } from "react";
import { Box } from "@mui/material";
import { Footer } from "../Footer";
import { Header } from "../Header";

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Header />
      {children}
      <Footer />
    </Box>
  );
};

export default Layout;
