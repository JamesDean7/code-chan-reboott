import styled from "@emotion/styled";
import type { ReactNodeChildren } from "@/types/lib-react";
import { ZINDEX } from "@/const/style/style";
import { customShouldForwardProp } from "@/utils/verify/verify";
import type { ElementMouseEventCollection } from "@/types/event";

type BackgroundFilterStyleProps = {
  opacity: number;
  zIndex?: number;
};

type BackgroundFilterProps = ReactNodeChildren &
  Pick<ElementMouseEventCollection<"div">, "onClick"> &
  Pick<BackgroundFilterStyleProps, "zIndex"> & {
    mode?: "dark" | "transparent";
  };

const BackgroundFilterStyle = styled("div", {
  shouldForwardProp: (propName) =>
    customShouldForwardProp({ preventTarget: "common", propName }),
})<BackgroundFilterStyleProps>(({ opacity, zIndex }) => ({
  position: "fixed",
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  background: "#000000",
  opacity: opacity,
  zIndex,
}));

const BackgroundFilter = ({
  mode = "dark",
  zIndex = ZINDEX.bgFilter,
  children,
}: BackgroundFilterProps) => {
  const opacity = mode === "transparent" ? 0 : 0.3;
  return (
    <BackgroundFilterStyle opacity={opacity} zIndex={zIndex}>
      {children}
    </BackgroundFilterStyle>
  );
};

export default BackgroundFilter;
