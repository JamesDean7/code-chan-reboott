import styled from "@emotion/styled";
import type { ImageElementAttribute } from "@/types/element";
import { MEDIA_MIN_WIDTH } from "@/theme/breakpoints";
import type { OmitByKey } from "@/types/utils";
import { createStyledCompStyleByBreakpoint } from "@/utils/style/style";
import {
  PartialStylePropsByBreakpointsCollection,
  StyledComponentElementStyleCollection,
} from "@/types/styles";

type ImageStyleProps = Pick<
  PartialStylePropsByBreakpointsCollection,
  "maxWidth" | "maxHeight"
> &
  Pick<
    NonNullable<ImageElementAttribute["style"]>,
    "objectFit" | "objectPosition"
  > &
  Pick<StyledComponentElementStyleCollection, "elementWidth" | "elementHeight">;

export type ImageProps = Pick<ImageElementAttribute, "src" | "alt"> &
  Pick<PartialStylePropsByBreakpointsCollection, "width" | "height"> &
  OmitByKey<ImageStyleProps, "elementWidth" | "elementHeight">;

const ImageStyle = styled("img")<ImageStyleProps>(
  ({
    elementWidth,
    elementHeight,
    objectFit = "cover",
    objectPosition = "50% 50%",
    maxWidth,
    maxHeight,
  }) => {
    const styleByBreakpoint = createStyledCompStyleByBreakpoint({
      height: elementHeight,
      width: elementWidth,
      maxWidth,
      maxHeight,
    });

    return {
      border: undefined,
      objectFit,
      objectPosition,
      userSelect: "none",
      ...styleByBreakpoint.sm,
      [MEDIA_MIN_WIDTH.md]: {
        ...styleByBreakpoint.md,
      },
      [MEDIA_MIN_WIDTH.lg]: {
        ...styleByBreakpoint.lg,
      },
      [MEDIA_MIN_WIDTH.xl]: {
        ...styleByBreakpoint.xl,
      },
    };
  }
);

const Image = ({
  src,
  alt = "image",
  height = { sm: "100px" },
  width = { sm: "100px" },
  ...props
}: ImageProps) => {
  return (
    <ImageStyle
      src={src ?? ""}
      alt={alt ?? ""}
      elementWidth={width}
      elementHeight={height}
      {...props}
    />
  );
};

export default Image;
