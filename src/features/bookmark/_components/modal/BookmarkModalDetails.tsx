import IconCalendar from "@/assets/svg/IconCalendar";
import IconDownload from "@/assets/svg/IconDownload";
import IconScale from "@/assets/svg/IconScale";
import BookmarkDetailText from "@/features/bookmark/_components/modal/BookmarkDetailText";
import type { BookmarkModalImageDetailInfoProp } from "@/features/bookmark/types";
import Button from "@/components/button/base/Button";
import FlexColumnContainer from "@/components/container/flex/FlexColumnContainer";
import FlexRowContainer from "@/components/container/flex/FlexRowContainer";
import useThemePalette from "@/hooks/theme/useThemePalette";
import { isNaNType } from "@/utils/verify/verify";
import { differenceInDays, format } from "date-fns";

type BookmarkModalDetailsProps = BookmarkModalImageDetailInfoProp;

const BookmarkModalDetails = ({
  imageDetailInfo,
}: BookmarkModalDetailsProps) => {
  const themeGrayColor = useThemePalette({ usePallete: "gray" });

  const { imageHeight, imageWidth, uploadDate, downloads, tags } =
    imageDetailInfo ?? {};

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const pastDayCount = differenceInDays(new Date(uploadDate), today);

  const isPastDayCountValid = !isNaNType(pastDayCount);

  const uploadDateFormat = format(new Date(uploadDate), "yyyy-MM-dd");

  const uploadDateInfo = isPastDayCountValid
    ? `Upload Date : ${uploadDateFormat} (${Math.abs(pastDayCount)}일 전)`
    : `Upload Date : Unknown`;

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
          <BookmarkDetailText>{uploadDateInfo}</BookmarkDetailText>
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
      {tags && (
        <FlexRowContainer
          justifyContent="flex-start"
          rowGap={{ sm: "10px" }}
          columnGap={{ sm: "10px" }}
        >
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
      )}
    </FlexColumnContainer>
  );
};

export default BookmarkModalDetails;
