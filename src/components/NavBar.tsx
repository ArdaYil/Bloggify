import { Link } from "react-router-dom";
import MenuItemInterface from "../interfaces/MenuItemInterface";
import Menu from "./Menu";

export default function NavBar() {
  const menuItems: MenuItemInterface[] = [
    { page: "/login", text: "Log in", class: "nav-bar__menu-item menu-item" },
  ];

  return (
    <nav className="nav-bar">
      <Link to="/" className="main-title">
        Blogify
      </Link>
      <Menu menuItems={menuItems} />
    </nav>
  );
}
