import { forwardRef, LegacyRef, useImperativeHandle } from "react";

interface Props {
  src: string;
  style?: {};
  className?: string;
}

export default forwardRef(({ src, style, className }: Props, ref) => {
  return (
    <img
      className={className}
      style={style}
      src={src}
      ref={ref as LegacyRef<HTMLImageElement>}
    />
  );
});
