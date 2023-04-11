import React, { CSSProperties, RefObject } from "react";
import { Fragment, ReactElement, useEffect, useRef } from "react";
import _ from "lodash";

interface Props {
  onLeftSwipe: () => void;
  onRightSwipe: () => void;
  style: CSSProperties;
  children: ReactElement;
  className?: string;
  refProp: RefObject<HTMLElement>;
  dependencies: any[];
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
  className,
  style,
  dependencies,
  refProp,
}: Props) {
  useEffect(() => {
    const childNode: HTMLElement | null = refProp.current;
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

    const touchStart = (e: TouchEvent) => {
      const { clientX, clientY } = e.touches[0];

      if (!touchWithinChild(clientX, clientY)) return;
      if (!canTouch) return;

      canTouch = false;
      touchDown = true;

      setTimeout(() => (canTouch = true), 1000);

      touchStartPos.x = clientX;
      touchStartPos.y = clientY;
    };

    const touchEnd = (e: TouchEvent) => {
      if (touchDown == false) return;

      touchDown = false;

      const { clientX, clientY } = e.changedTouches[0];
      const distance = clientX - touchStartPos.x;
      const isLeft = distance > 0;
      const isRight = distance < 0;
      const horizontalDistance = Math.abs(distance);
      const withinVerticalMargin =
        clientY > touchStartPos.y - verticalSwipeBoundary &&
        clientY < touchStartPos.y + verticalSwipeBoundary;

      if (!withinVerticalMargin) return;
      if (isLeft && horizontalDistance >= minSwipeDistance)
        return onLeftSwipe();
      if (isRight && horizontalDistance >= minSwipeDistance)
        return onRightSwipe();
    };

    document.addEventListener("touchstart", touchStart);
    document.addEventListener("touchend", touchEnd);

    return () => {
      document.removeEventListener("touchstart", touchStart);
      document.removeEventListener("touchend", touchEnd);
    };
  }, dependencies);

  const child = React.Children.only(children);

  return React.cloneElement(child, { ref: refProp, style, className });
}
