import FlexColumnContainer from "@/components/container/flex/FlexColumnContainer";
import FlexRowContainer from "@/components/container/flex/FlexRowContainer";
import Typography from "@/components/typography/base/Typography";

const BookmarkModalDetails = () => {
  return (
    <FlexColumnContainer rowGap={{ sm: "10px" }}>
      <FlexColumnContainer rowGap={{ sm: "10px" }}>
        <Typography>Image size : </Typography>
        <Typography>Upload Date : ( n일전 )</Typography>
        <Typography>Downloads : </Typography>
      </FlexColumnContainer>
      <FlexRowContainer columnGap={{ sm: "10px" }}>Tag1, Tag2</FlexRowContainer>
    </FlexColumnContainer>
  );
};

export default BookmarkModalDetails;
