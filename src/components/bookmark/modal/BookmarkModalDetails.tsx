import IconCalendar from "@/assets/svg/IconCalendar";
import BookmarkDetailTypography from "@/components/bookmark/modal/BookmarkDetailTypography";
import Button from "@/components/button/base/Button";
import FlexColumnContainer from "@/components/container/flex/FlexColumnContainer";
import FlexRowContainer from "@/components/container/flex/FlexRowContainer";
import Typography from "@/components/typography/base/Typography";
import useThemePalette from "@/hooks/theme/useThemePalette";

type BookmarkModalDetailsProps = {
  updateDate: string;
  downloads: number;
  imageWidth: number;
  imageHeight: number;
  tags: string[];
};

const BookmarkModalDetails = ({
  imageHeight,
  imageWidth,
  downloads,
  updateDate,
  tags,
}: BookmarkModalDetailsProps) => {
  const themeGrayColor = useThemePalette({ usePallete: "gray" });
  return (
    <FlexColumnContainer rowGap={{ sm: "20px" }}>
      <FlexColumnContainer rowGap={{ sm: "8px" }}>
        <IconCalendar
          stroke={themeGrayColor.main}
          width={{ sm: "20px" }}
          height={{ sm: "20px" }}
        />
        <BookmarkDetailTypography>
          Image size : {imageWidth} x {imageHeight}
        </BookmarkDetailTypography>
        <BookmarkDetailTypography>
          Upload Date : {updateDate} ( n일전 )
        </BookmarkDetailTypography>
        <BookmarkDetailTypography>
          Downloads : {downloads}
        </BookmarkDetailTypography>
      </FlexColumnContainer>
      <FlexRowContainer columnGap={{ sm: "10px" }}>
        {tags.map((tag) => (
          <Button
            borderColor="transparent"
            color={themeGrayColor.dark}
            backgroundColor={themeGrayColor.light}
            hoverBgColor={themeGrayColor.main}
            hoverColor={themeGrayColor.light}
          >
            {tag}
          </Button>
        ))}
      </FlexRowContainer>
    </FlexColumnContainer>
  );
};

export default BookmarkModalDetails;
