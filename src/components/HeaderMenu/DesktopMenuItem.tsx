import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import { Box, Button, Menu, MenuItem, Typography, styled } from "@mui/material";
import Link from "next/link";
import React, { FC, useMemo, useState } from "react";

export interface IDesktopMenuItemElement {
  url: string;
  title: string;
  id: string;
}
interface IDesktopMenuItem {
  id: string;
  title: string;
  items: IDesktopMenuItemElement[];
}
export const DesktopMenuItem: FC<IDesktopMenuItem> = ({ id, title, items }) => {
  const [anchorMenu, setAnchorMenu] = useState<null | HTMLElement>(null);

  const openedMenu = Boolean(anchorMenu);

  const handleOpenMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorMenu(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorMenu(null);
  };

  const buttonId = useMemo(() => `${id}-menu-button`, []);
  const menuId = useMemo(() => `${id}-menu`, []);
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
        id={buttonId}
        aria-controls={openedMenu ? menuId : undefined}
        aria-haspopup="true"
        aria-expanded={openedMenu ? "true" : undefined}
        onClick={handleOpenMenu}
        endIcon={openedMenu ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
      >
        <Typography variant="subtitle1">{title}</Typography>
      </Button>
      <Menu
        id={menuId}
        MenuListProps={{
          "aria-labelledby": buttonId,
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
        {items.map(({ id, title, url }) => (
          <StyledLink href={url} key={id}>
            <StyledMenuItem onClick={handleCloseMenu}>{title}</StyledMenuItem>
          </StyledLink>
        ))}
      </Menu>
    </>
  );
};

const StyledLink = styled(Link)({
  textDecoration: "none",
  color: "#0F2435",
});

const StyledMenuItem = styled(MenuItem)({
  fontSize: 14,
});
