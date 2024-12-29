import { useTheme } from "@emotion/react";
import IconCancel from "@/assets/svg/IconCancel";
import IconHeart from "@/assets/svg/IconHeart";
import FlexRowContainer from "@/components/container/flex/FlexRowContainer";
import HoverContainer from "@/components/container/hover/HoverContainer";
import Profile from "@/components/image/profile/Profile";
import Typography from "@/components/typography/base/Typography";
import type { BookmarkModalHeadProps } from "@/features/bookmark/types";

const BookmarkModalHead = ({
  isBookmarked,
  imageDetailInfo,
  onLikeClick,
  onClose,
}: BookmarkModalHeadProps) => {
  const theme = useTheme();
  const { userImage, userName } = imageDetailInfo;
  const heartColor = isBookmarked
    ? theme.palette.red.main
    : theme.palette.common.black;
  return (
    <FlexRowContainer alignItems="center" justifyContent="space-between">
      <FlexRowContainer columnGap={{ sm: "12px" }}>
        <Profile
          src={userImage}
          alt={`profile-image-${userName}`}
          height={{ sm: "40px" }}
          width={{ sm: "40px" }}
        />
        <Typography>{userName}</Typography>
      </FlexRowContainer>
      <FlexRowContainer columnGap={{ sm: "20px" }}>
        <HoverContainer onClick={onLikeClick(imageDetailInfo, isBookmarked)}>
          <IconHeart
            fill={heartColor}
            width={{ sm: "30px" }}
            height={{ sm: "30px" }}
          />
        </HoverContainer>
        <HoverContainer onClick={onClose}>
          <IconCancel width={{ sm: "30px" }} height={{ sm: "30px" }} />
        </HoverContainer>
      </FlexRowContainer>
    </FlexRowContainer>
  );
};

export default BookmarkModalHead;
