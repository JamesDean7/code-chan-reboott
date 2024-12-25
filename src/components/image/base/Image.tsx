import styled from "@emotion/styled";
import { ImageElementAttribute } from "@/types/element";
import { PartialStyleByBreakpoints } from "@/theme/types";
import { MEDIA_MIN_WIDTH } from "@/theme/breakpoints";
import { OmitByKey } from "@/types/utils";
import { createStyledCompStyleByBreakpoint } from "@/utils/style/style";

type ImageWidthType = PartialStyleByBreakpoints<string>;
type ImageHeightType = PartialStyleByBreakpoints<string>;

type ImageStyleProps = {
  imgWidth: ImageWidthType;
  imgHeight: ImageHeightType;
} & Pick<
  NonNullable<ImageElementAttribute["style"]>,
  "objectFit" | "objectPosition"
>;

const ImageStyle = styled("img")<ImageStyleProps>(
  ({
    imgWidth,
    imgHeight,
    objectFit = "cover",
    objectPosition = "50% 50%",
  }) => {
    const styleByBreakpoint = createStyledCompStyleByBreakpoint({
      height: imgHeight,
      width: imgWidth,
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

export type ImageProps = Pick<ImageElementAttribute, "src" | "alt"> & {
  height: ImageHeightType;
  width: ImageWidthType;
} & OmitByKey<ImageStyleProps, "imgHeight" | "imgWidth">;

const Image = ({ src, alt = "image", height, width, ...props }: ImageProps) => {
  return (
    <ImageStyle
      src={src ?? ""}
      alt={alt ?? ""}
      imgWidth={width}
      imgHeight={height}
      {...props}
    />
  );
};

export default Image;
