import styled from "@emotion/styled";
import { ImageElementAttribute, ImageElementStyleProps } from "@/types/element";
import { SelectiveRequired } from "@/types/utils";

type ImageStyleProps = NonNullable<ImageElementStyleProps>;

const ImageStyle = styled.img<ImageStyleProps>(
  ({
    width = "100%",
    height = "auto",
    objectFit = "cover",
    objectPosition = "50% 50%",
  }) => ({
    width,
    height,
    objectFit,
    objectPosition,
  })
);

type ImageProps = SelectiveRequired<ImageElementAttribute, "src"> &
  ImageStyleProps;

const Image = ({ src, alt = "image", ...props }: ImageProps) => {
  return <ImageStyle src={src} alt={alt} {...props} />;
};

export default Image;
