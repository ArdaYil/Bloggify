import React, {
  CSSProperties,
  ReactElement,
  useEffect,
  useState,
  useRef,
  RefObject,
} from "react";
import TouchHandler from "../TouchHandler";
import CarouselItem from "./CarouselItem";

interface Props {
  children: ReactElement[];
  className: string;
}

const carouselItemDistance = 10;

enum Direction {
  RIGHT,
  LEFT,
}

const animationSpeed = 200;

export default function ({ children, className }: Props) {
  const [position, setPosition] = useState(1);
  const [direction, setDirection] = useState<Direction>(Direction.LEFT);
  const carouselItemRefs = useRef<RefObject<HTMLElement>[]>([]);

  useEffect(() => {
    let factor = -1;

    if (
      carouselItemRefs.current[1].current &&
      carouselItemRefs.current[2].current &&
      carouselItemRefs.current[0].current
    ) {
      if (direction == Direction.RIGHT) {
        carouselItemRefs.current[1].current.style.transition = `left ${animationSpeed}ms`;
        carouselItemRefs.current[2].current.style.transition = "";
        carouselItemRefs.current[0].current.style.transition = `left ${animationSpeed}ms`;
      } else if (direction == Direction.LEFT) {
        carouselItemRefs.current[1].current.style.transition = `left ${animationSpeed}ms`;
        carouselItemRefs.current[2].current.style.transition = `left ${animationSpeed}ms`;
        carouselItemRefs.current[0].current.style.transition = "";
      }
    }

    console.log(carouselItemRefs.current[1].current);

    for (let { current: carouselItem } of carouselItemRefs.current) {
      if (!carouselItem) return;

      const { width } = carouselItem.getBoundingClientRect();
      const offset = width * factor;
      const distance = carouselItemDistance * factor;

      carouselItem.style.left = offset + distance + "px";

      factor++;
    }

    //window.setInterval(handleLeftSwipe, 5000);
  }, [position]);

  const handleLeftSwipe = () => {
    console.log("Left");
    let newPosition = position - 1;
    newPosition = newPosition < 0 ? children.length - 1 : newPosition;

    setPosition(newPosition);
    setDirection(Direction.LEFT);
  };

  const handleRightSwipe = () => {
    console.log("Right");
    let newPosition = position + 1;
    newPosition = newPosition > children.length - 1 ? 0 : newPosition;

    setPosition(newPosition);
    setDirection(Direction.RIGHT);
  };

  const getCarouselItems = () => {
    const carouselItems: JSX.Element[] = [];
    const lastIndex = children.length - 1;
    let refIndex = 0;
    console.log(position);
    for (let i = position - 1; i <= position + 1; i++) {
      let index = i;

      if (i < 0) index = lastIndex;
      else if (i > lastIndex) index = 0;

      const child = children[index];
      const childRef = React.createRef<HTMLElement>();
      carouselItemRefs.current[refIndex] = childRef;

      carouselItems.push(
        <TouchHandler
          style={{ position: "absolute" }}
          key={child.key}
          onLeftSwipe={handleLeftSwipe}
          onRightSwipe={handleRightSwipe}
          className={`${className}__carousel-item`}
          refProp={childRef}
          dependencies={[position]}
        >
          {child}
        </TouchHandler>
      );

      refIndex++;
    }

    return carouselItems;
  };

  return <div className={className}>{getCarouselItems()}</div>;
}
