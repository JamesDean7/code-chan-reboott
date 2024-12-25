import styled from "@emotion/styled";
import BackgroundFilter from "@/components/filter/background/BackgroundFilter";
import { ZINDEX } from "@/const/style";
import { MEDIA_MIN_WIDTH } from "@/theme/breakpoints";
import {
  CSSStyleProperties,
  StylePropsByBreakpointsCollection,
} from "@/types/styles";
import { createStyledCompStyleByBreakpoint } from "@/utils/style";

type ResponsiveProperties = Pick<
  StylePropsByBreakpointsCollection,
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
    const styleByBreakpoint = createStyledCompStyleByBreakpoint({
      height,
      width,
      maxWidth,
      maxHeight,
    });

    return {
      ...styleByBreakpoint.sm,
      position: "fixed",
      top,
      left,
      transform,
      zIndex,
      borderRadius,
      backgroundColor,
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
