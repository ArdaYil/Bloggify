import Direction from "../enums/Direction";

interface Props {
  direction?: Direction;
  className?: string;
  onClick?: () => void;
}

export default function Arrow({
  direction = Direction.RIGHT,
  className,
  onClick,
}: Props) {
  const text = Direction[direction].toLowerCase();

  return (
    <img
      onClick={onClick}
      src="../../public/icons/arrow.png"
      className={`arrow--${text} ${className}`}
    />
  );
}
