import { IconButton, Menu, MenuItem } from "@mui/material";
import React, { FC, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";

export const MobileMenu: FC = () => {
  const [anchorMobileMenu, setAnchorMobileMenu] = useState<null | HTMLElement>(
    null
  );

  const openedMobileMenu = Boolean(anchorMobileMenu);

  const handleOpenMobileMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorMobileMenu(event.currentTarget);
  };

  const handleCloseMobileMenu = () => {
    setAnchorMobileMenu(null);
  };
  return (
    <>
      <IconButton
        id="mobile-menu-button"
        aria-controls={openedMobileMenu ? "mobile-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={openedMobileMenu ? "true" : undefined}
        onClick={handleOpenMobileMenu}
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="mobile-menu"
        MenuListProps={{
          "aria-labelledby": "mobile-menu-button",
        }}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        anchorEl={anchorMobileMenu}
        open={openedMobileMenu}
        onClose={handleCloseMobileMenu}
      >
        <MenuItem>Коробки</MenuItem>
        <MenuItem>Пакеты</MenuItem>
        <MenuItem>Услуги</MenuItem>
        <MenuItem>Контакты</MenuItem>
      </Menu>
    </>
  );
};
