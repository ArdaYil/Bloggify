import { Link } from "react-router-dom";
import MenuItemInterface from "../interfaces/MenuItemInterface";
import Menu from "./Menu";
import NavButton from "./NavButton";
import { useState } from "react";
import NavSideBar from "./NavSideBar";
import Title from "./Title";

export default function NavBar() {
  const menuItems: MenuItemInterface[] = [
    { page: "/login", text: "Log in", class: "nav-bar__menu-item menu-item" },
  ];

  const [navOpen, setNavOpen] = useState(false);

  const handleNavOpen = () => setNavOpen(true);
  const handleNavClose = () => setNavOpen(false);

  return (
    <nav className="nav-bar">
      <NavSideBar
        onMenuClose={handleNavClose}
        menuItems={menuItems}
        navOpen={navOpen}
      />
      <NavButton onClick={handleNavOpen} />
      <Title className="footer__title" />
      <Menu menuItems={menuItems} />
    </nav>
  );
}
