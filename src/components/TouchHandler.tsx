import React from "react";
import { Fragment, ReactElement, useEffect, useRef } from "react";

interface Props {
  onLeftSwipe: () => void;
  onRightSwipe: () => void;
  children: ReactElement;
}

interface TouchPosition {
  x: number;
  y: number;
}

const verticalSwipeBoundary = 20;
const minSwipeDistance = 20;

export default function TouchHandler({
  children,
  onLeftSwipe,
  onRightSwipe,
}: Props) {
  const childRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const childNode: HTMLElement | null = childRef.current;
    const touchStartPos: TouchPosition = { x: 0, y: 0 };
    const touchWithinChild = (xPos: number, yPos: number): boolean => {
      if (!childNode) return false;

      const { x, y } = childNode.getBoundingClientRect();
      const { clientWidth, clientHeight } = childNode;
      const endX = x + clientWidth;
      const endY = y + clientHeight;
      const horizontalBoundary = x < xPos && xPos < endX;
      const verticalBoundary = y < yPos && yPos < endY;

      return horizontalBoundary && verticalBoundary;
    };

    let touchDown = false;
    let canTouch = true;

    window.setInterval(() => {});

    document.addEventListener("touchstart", (e) => {
      const { clientX, clientY } = e.touches[0];

      if (!touchWithinChild(clientX, clientY)) return;
      if (!canTouch) return;

      canTouch = false;
      touchDown = true;

      setTimeout(() => (canTouch = true), 1000);

      touchStartPos.x = clientX;
      touchStartPos.y = clientY;
    });

    document.addEventListener("touchend", (e) => {
      // console.log(touchDown);
      if (touchDown == false) return;

      touchDown = false;

      const { clientX, clientY } = e.changedTouches[0];
      const distance = clientX - touchStartPos.x;
      const isLeft = distance > 0;
      const isRight = distance < 0;
      const horizontalDistance = Math.abs(distance);
      // console.log(clientY, touchStartPos.y);
      const withinVerticalMargin =
        clientY > touchStartPos.y - verticalSwipeBoundary &&
        clientY < touchStartPos.y + verticalSwipeBoundary;

      if (!withinVerticalMargin) return;
      if (isLeft && horizontalDistance >= minSwipeDistance)
        return onLeftSwipe();
      if (isRight && horizontalDistance >= minSwipeDistance)
        return onRightSwipe();
    });
  }, []);

  const child = React.Children.only(children);

  return React.cloneElement(child, { ref: childRef });
}
