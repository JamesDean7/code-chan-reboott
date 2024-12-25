import styled from "@emotion/styled";
import { ReactNodeChildren } from "@/types/lib-react";
import { ZINDEX } from "@/const/style";

type BackgroundFilterStyleProps = {
  opacity: number;
  zIndex?: number;
};

const BackgroundFilterStyle = styled.div<BackgroundFilterStyleProps>(
  ({ opacity, zIndex }) => ({
    position: "fixed",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    background: "#000000",
    opacity: opacity,
    zIndex,
  })
);

type BackgroundFilterProps = ReactNodeChildren &
  Pick<BackgroundFilterStyleProps, "zIndex"> & {
    mode?: "dark" | "transparent";
  };

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
