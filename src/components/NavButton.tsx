import ImageButton from "./ImageButton";

interface Props {
  onClick: () => void;
}

export default function NavButton({ onClick }: Props) {
  return (
    <ImageButton
      onClick={onClick}
      className="navbar-btn"
      src="../../public/icons/menu.png"
    />
  );
}
