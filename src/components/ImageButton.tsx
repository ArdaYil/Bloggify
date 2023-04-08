interface Props {
  src: string;
  onClick: () => void;
  className?: string;
  size?: string;
}

export default function ImageButton({
  src,
  className = "",
  size = "sm",
  onClick,
}: Props) {
  return (
    <img
      onClick={onClick}
      src={src}
      className={className + " image-btn--" + size}
    />
  );
}
