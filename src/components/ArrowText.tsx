import { Link } from "react-router-dom";

interface Props {
  to: string;
  children: string;
}

export default function ArrowText({ to, children }: Props) {
  return (
    <Link className="arrow-text" to={to}>
      {children}
    </Link>
  );
}
