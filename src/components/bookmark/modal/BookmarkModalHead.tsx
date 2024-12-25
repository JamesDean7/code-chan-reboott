import IconCancel from "@/assets/svg/IconCancel";
import IconHeart from "@/assets/svg/IconHeart";
import FlexRowContainer from "@/components/container/flex/FlexRowContainer";
import HoverContainer from "@/components/container/hover/HoverContainer";
import Typography from "@/components/typography/base/Typography";

export type BookmarkModalHeadProps = {
  onClose: () => void;
};

const BookmarkModalHead = ({ onClose }: BookmarkModalHeadProps) => {
  return (
    <FlexRowContainer alignItems="center" justifyContent="flex-start">
      <FlexRowContainer flex={1}>
        <Typography>James</Typography>
      </FlexRowContainer>
      <FlexRowContainer columnGap={{ sm: "20px" }}>
        <HoverContainer>
          <IconHeart width="30px" height="30px" />
        </HoverContainer>
        <HoverContainer onClick={onClose}>
          <IconCancel width="30px" height="30px" />
        </HoverContainer>
      </FlexRowContainer>
    </FlexRowContainer>
  );
};

export default BookmarkModalHead;
