import { ArrowDropDown } from "@mui/icons-material";
import { Box, Button, Menu, MenuItem, Typography } from "@mui/material";
import React, { FC, useState } from "react";

export const ProductionMenu: FC = () => {
  const [anchorMenu, setAnchorMenu] = useState<null | HTMLElement>(null);

  const openedMenu = Boolean(anchorMenu);

  const handleOpenMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorMenu(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorMenu(null);
  };

  return (
    <>
      <Button
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 0,
          textTransform: "none",
          color: "#0F2435",
          width: 150,
        }}
        id="production-menu-button"
        aria-controls={openedMenu ? "production-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={openedMenu ? "true" : undefined}
        onClick={handleOpenMenu}
        endIcon={<ArrowDropDown />}
      >
        <Typography variant="subtitle1">Продукция</Typography>
      </Button>
      <Menu
        id="production-menu"
        MenuListProps={{
          "aria-labelledby": "production-menu-button",
          sx: {
            width: 150,
          },
        }}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        sx={{
          width: 150,
        }}
        PaperProps={{
          sx: {
            width: 150,
            maxWidth: 150,
          },
        }}
        anchorEl={anchorMenu}
        open={openedMenu}
        onClose={handleCloseMenu}
      >
        <MenuItem>Коробки</MenuItem>
        <MenuItem>Пакеты</MenuItem>
        <MenuItem>Услуги</MenuItem>
        <MenuItem>Контакты</MenuItem>
      </Menu>
    </>
  );
};
