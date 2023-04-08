import MenuItemInterface from "../interfaces/MenuItemInterface";
import { Link } from "react-router-dom";
import ImageButton from "./ImageButton";

interface Props {
  menuItems: MenuItemInterface[];
  navOpen: boolean;
  onMenuClose: () => void;
}

export default function ({ menuItems, onMenuClose, navOpen }: Props) {
  const navOpenClass = navOpen ? " open" : "";

  return (
    <div className={"nav-sidebar" + navOpenClass}>
      <header className="nav-sidebar__header">
        <h1 className="main-title">Blogify</h1>
        <ImageButton
          onClick={onMenuClose}
          src="../../public/icons/close.png"
          className="nav-sidebar__close-btn"
        />
      </header>
      <footer className="nav-sidebar__footer">
        {menuItems.map((menuItem) => (
          <Link
            key={menuItem.text}
            className="nav-sidebar__nav-item"
            to={menuItem.page}
          >
            {menuItem.text}
          </Link>
        ))}
      </footer>
    </div>
  );
}
