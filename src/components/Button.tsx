interface Props {
  onClick?: () => void;
  children?: string;
  className?: string;
}

export default function Button({
  onClick,
  children = "",
  className = "",
}: Props) {
  const handleClick = () => {
    if (onClick) onClick();
  };

  const prefixedClassName = `--${className}`;

  return (
    <button onClick={handleClick} className={"btn" + prefixedClassName}>
      {children}
    </button>
  );
}
