import { forwardRef, LegacyRef } from "react";

interface Props {
  src: string;
}

export default forwardRef(({ src }: Props, ref) => {
  return <img src={src} ref={ref as LegacyRef<HTMLImageElement>} />;
});
