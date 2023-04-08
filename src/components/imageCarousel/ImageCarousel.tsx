import React, { ReactElement, useState } from "react";
import { CLIENT_RENEG_LIMIT } from "tls";
import TouchHandler from "../TouchHandler";

interface Props {
  children: ReactElement[];
  className: string;
}

export default function ({ children, className }: Props) {
  const [position, setPosition] = useState(0);

  const handleLeftSwipe = () => {
    console.log("Left Swipe");
  };

  const handleRightSwipe = () => {
    console.log("Right Swipe");
  };

  return (
    <div className={className}>
      {children.map((child) => (
        <TouchHandler
          key={child.key}
          onLeftSwipe={handleLeftSwipe}
          onRightSwipe={handleRightSwipe}
        >
          {child}
        </TouchHandler>
      ))}
    </div>
  );
}
