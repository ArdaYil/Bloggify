import { Link } from "react-router-dom";
import MenuItemInterface from "../interfaces/MenuItemInterface";

interface Props {
  menuItems: MenuItemInterface[];
}

export default function Menu({ menuItems }: Props) {
  return (
    <div className="nav-bar__menu">
      {menuItems.map((item) => (
        <Link key={item.text} className={item.class} to={item.page}>
          {item.text}
        </Link>
      ))}
    </div>
  );
}
