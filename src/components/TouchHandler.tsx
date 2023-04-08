import React from "react";
import { Fragment, ReactElement, useEffect, useRef } from "react";

interface Props {
  onLeftSwipe: () => void;
  onRightSwipe: () => void;
  children: ReactElement;
}

interface TouchPosition {
  x?: number;
  y?: number;
}

const horizontalSwipeBoundary = 20;

export default function TouchHandler({
  children,
  onLeftSwipe,
  onRightSwipe,
}: Props) {
  const childRef = useRef(null);

  useEffect(() => {
    const childNode = childRef.current;

    console.log(childNode);

    const touchStartPos: TouchPosition = {};

    const touchWithinChild = (x: number, y: number) => {};

    document.addEventListener("touchstart", (e) => {
      const { clientX, clientY } = e.touches[0];

      touchStartPos.x = clientX;
      touchStartPos.y = clientY;
    });

    document.addEventListener("touchend", (e) => {});
  }, []);

  const child = React.Children.only(children);

  return React.cloneElement(child, { ref: childRef });
}
