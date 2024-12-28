import IconCancel from "@/assets/svg/IconCancel";
import IconHeart from "@/assets/svg/IconHeart";
import FlexRowContainer from "@/components/container/flex/FlexRowContainer";
import HoverContainer from "@/components/container/hover/HoverContainer";
import Profile from "@/components/image/profile/Profile";
import Typography from "@/components/typography/base/Typography";

export type BookmarkModalHeadProps = {
  profileSrc: string;
  name: string;
  onClose: () => void;
};

const BookmarkModalHead = ({
  profileSrc,
  name,
  onClose,
}: BookmarkModalHeadProps) => {
  return (
    <FlexRowContainer alignItems="center" justifyContent="space-between">
      <FlexRowContainer columnGap={{ sm: "12px" }}>
        <Profile
          src={profileSrc}
          alt={`profile-image-${name}`}
          height={{ sm: "40px" }}
          width={{ sm: "40px" }}
        />
        <Typography>{name}</Typography>
      </FlexRowContainer>
      <FlexRowContainer columnGap={{ sm: "20px" }}>
        <HoverContainer>
          <IconHeart width={{ sm: "30px" }} height={{ sm: "30px" }} />
        </HoverContainer>
        <HoverContainer onClick={onClose}>
          <IconCancel width={{ sm: "30px" }} height={{ sm: "30px" }} />
        </HoverContainer>
      </FlexRowContainer>
    </FlexRowContainer>
  );
};

export default BookmarkModalHead;
