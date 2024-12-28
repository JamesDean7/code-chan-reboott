import IconCalendar from "@/assets/svg/IconCalendar";
import IconDownload from "@/assets/svg/IconDownload";
import IconScale from "@/assets/svg/IconScale";
import BookmarkDetailText from "@/components/bookmark/modal/BookmarkDetailText";
import Button from "@/components/button/base/Button";
import FlexColumnContainer from "@/components/container/flex/FlexColumnContainer";
import FlexRowContainer from "@/components/container/flex/FlexRowContainer";
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
        <FlexRowContainer columnGap={{ sm: "8px" }}>
          <IconScale
            stroke={themeGrayColor.main}
            width={{ sm: "18px" }}
            height={{ sm: "18px" }}
          />
          <BookmarkDetailText>
            Image size : {imageWidth} x {imageHeight}
          </BookmarkDetailText>
        </FlexRowContainer>

        <FlexRowContainer columnGap={{ sm: "8px" }}>
          <IconCalendar
            stroke={themeGrayColor.main}
            width={{ sm: "20px" }}
            height={{ sm: "20px" }}
          />
          <BookmarkDetailText>
            Upload Date : {updateDate} ( n일전 )
          </BookmarkDetailText>
        </FlexRowContainer>
        <FlexRowContainer columnGap={{ sm: "8px" }}>
          <IconDownload
            fill={themeGrayColor.main}
            width={{ sm: "20px" }}
            height={{ sm: "20px" }}
          />
          <BookmarkDetailText>Downloads : {downloads}</BookmarkDetailText>
        </FlexRowContainer>
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
