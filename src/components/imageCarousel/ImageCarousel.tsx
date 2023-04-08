import React, { ReactElement, useState } from "react";
import TouchHandler from "../TouchHandler";

interface Props {
  children: ReactElement[];
  className: string;
}

export default function ({ children, className }: Props) {
  const [position, setPosition] = useState(0);

  const handleLeftSwipe = () => {};

  const handleRightSwipe = () => {};

  return (
    <div className={className}>
      {children.map((child) => (
        <TouchHandler
          onLeftSwipe={handleLeftSwipe}
          onRightSwipe={handleRightSwipe}
        >
          {child}
        </TouchHandler>
      ))}
    </div>
  );
}
