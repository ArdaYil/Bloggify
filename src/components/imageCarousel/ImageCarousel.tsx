import React, {
  CSSProperties,
  ReactElement,
  useEffect,
  useState,
  useRef,
  RefObject,
} from "react";
import TouchHandler from "../TouchHandler";

interface Props {
  children: ReactElement[];
  className: string;
}

export default function ({ children, className }: Props) {
  const [position, setPosition] = useState(0);
  const carouselItemRefs = useRef<RefObject<HTMLElement>[]>([]);

  useEffect(() => {
    let factor = -1;

    for (let { current: carouselItem } of carouselItemRefs.current) {
      if (!carouselItem) return;

      const { width } = carouselItem.getBoundingClientRect();
      const offset = width * factor;

      carouselItem.style.left = offset + "px";

      factor++;
    }
  }, []);

  const handleLeftSwipe = () => {
    console.log("Left Swipe");
  };

  const handleRightSwipe = () => {
    console.log("Right Swipe");
  };

  const getCarouselItems = () => {
    const carouselItems: JSX.Element[] = [];
    const lastIndex = children.length - 1;
    let factor = -1;

    for (let i = position - 1; i <= position + 1; i++) {
      let index = i;

      if (i < 0) index = lastIndex;
      else if (i > lastIndex) index = 0;

      console.log(index);

      const child = children[index];
      const childRef = React.createRef<HTMLElement>();
      carouselItemRefs.current.push(childRef);

      carouselItems.push(
        <TouchHandler
          style={{ position: "absolute" }}
          key={child.key}
          onLeftSwipe={handleLeftSwipe}
          onRightSwipe={handleRightSwipe}
          className={`${className}__carousel-item`}
          refProp={childRef}
        >
          {child}
        </TouchHandler>
      );

      factor++;
    }

    return carouselItems;
  };

  return (
    <div className={className}>
      <ul>{getCarouselItems()}</ul>
    </div>
  );
}
