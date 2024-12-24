import styled from "@emotion/styled";
import { ImageElementAttribute } from "@/types/element";
import { PartialStyleByBreakpoints } from "@/theme/types";
import { getStyleByBreakpoints } from "@/utils/style";
import { MEDIA_MIN_WIDTH } from "@/theme/breakpoints";
import { OmitByKey } from "@/types/utils";

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
    const resWidth = getStyleByBreakpoints<string>({
      style: imgWidth,
      defaultVal: "100%",
    });
    const resHeight = getStyleByBreakpoints<string>({
      style: imgHeight,
      defaultVal: "300px",
    });
    return {
      width: resWidth.sm,
      height: resHeight.sm,
      objectFit,
      objectPosition,
      [MEDIA_MIN_WIDTH.md]: {
        width: resWidth.md,
        height: resHeight.md,
      },
      [MEDIA_MIN_WIDTH.lg]: {
        width: resWidth.lg,
        height: resHeight.lg,
      },
      [MEDIA_MIN_WIDTH.xl]: {
        width: resWidth.xl,
        height: resHeight.xl,
      },
    };
  }
);

type ImageProps = Pick<ImageElementAttribute, "src" | "alt"> & {
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
