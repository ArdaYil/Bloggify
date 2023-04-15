import { Link } from "react-router-dom";

interface Props {
  className?: string;
}

export default function Title({ className = "" }: Props) {
  return (
    <Link to="/" className={`main-title ${className}`}>
      Blogify
    </Link>
  );
}
