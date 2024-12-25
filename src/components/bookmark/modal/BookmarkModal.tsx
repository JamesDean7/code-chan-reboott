import styled from "@emotion/styled";
import BackgroundFilter from "@/components/filter/background/BackgroundFilter";
import { ZINDEX } from "@/const/style";
import { MEDIA_MIN_WIDTH } from "@/theme/breakpoints";
import {
  CSSStyleProperties,
  ResponsiveStylePropsCollection,
} from "@/types/styles";
import { getStyleByBreakpoints } from "@/utils/style";

type ResponsiveProperties = Pick<
  ResponsiveStylePropsCollection,
  "width" | "maxWidth" | "height" | "maxHeight"
>;

type BookmarkModalStyleProps = Partial<ResponsiveProperties> &
  Pick<
    CSSStyleProperties,
    "borderRadius" | "backgroundColor" | "zIndex" | "top" | "left" | "transform"
  >;

const BookmarkModalStyle = styled.div<BookmarkModalStyleProps>(
  ({
    height,
    maxHeight,
    maxWidth,
    width,
    borderRadius = "6px",
    backgroundColor = "#ffffff",
    zIndex = ZINDEX.bgFilterContent,
    top = "50%",
    left = "50%",
    transform = "translate(-50%, -50%)",
  }) => {
    const resWidth = getStyleByBreakpoints<string>({
      style: width ?? {},
      defaultVal: "auto",
    });
    const resHeight = getStyleByBreakpoints<string>({
      style: height ?? {},
      defaultVal: "auto",
    });
    const resMaxWidth = getStyleByBreakpoints<string>({
      style: maxWidth ?? {},
      defaultVal: "none",
    });
    const resMaxHeight = getStyleByBreakpoints<string>({
      style: maxHeight ?? {},
      defaultVal: "none",
    });
    return {
      border: "2px solid blue",
      position: "fixed",
      top,
      left,
      transform,
      zIndex,
      borderRadius,
      backgroundColor,
      width: resWidth.sm,
      height: resHeight.sm,
      maxWidth: resMaxWidth.sm,
      maxHeight: resMaxHeight.sm,
      [MEDIA_MIN_WIDTH.md]: {
        width: resWidth.md,
        height: resHeight.md,
        maxWidth: resMaxWidth.md,
        maxHeight: resMaxHeight.md,
      },
      [MEDIA_MIN_WIDTH.lg]: {
        width: resWidth.lg,
        height: resHeight.lg,
        maxWidth: resMaxWidth.lg,
        maxHeight: resMaxHeight.lg,
      },
      [MEDIA_MIN_WIDTH.xl]: {
        width: resWidth.xl,
        height: resHeight.xl,
        maxWidth: resMaxWidth.xl,
        maxHeight: resMaxHeight.xl,
      },
    };
  }
);

type BookmarkModalProps = BookmarkModalStyleProps;

const BookmarkModal = ({ ...props }: BookmarkModalProps) => {
  return (
    <>
      <BackgroundFilter />
      <BookmarkModalStyle {...props}>BookmarkModal</BookmarkModalStyle>
    </>
  );
};

export default BookmarkModal;
