import BookmarkImage from "@/components/bookmark/image/BookmarkImage";
import BookmarkModal from "@/components/bookmark/modal/BookmarkModal";
import FlexColumnContainer from "@/components/container/flex/FlexColumnContainer";
import GridContainer from "@/components/container/grid/GridContainer";
import HorizontalDivider from "@/components/divider/horizontal/HorizontalDivider";
import Typography from "@/components/typography/base/Typography";
import useOnOffState from "@/hooks/data/useOnOffState";

const Bookmark = () => {
  const { isOn, handleUpdateToOn, handleUpdateToOff } = useOnOffState();

  const handleImageClick = (src: string) => () => {
    console.log(" ::: image click ::: ");
    handleUpdateToOn();
  };

  const handleLikeClick =
    (src: string) => (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      e.stopPropagation();
      console.log(" ::: like click ::: ");
    };

  return (
    <FlexColumnContainer rowGap={{ sm: "60px" }} alignItems="stretch">
      <FlexColumnContainer
        rowGap={{ sm: "20px" }}
        justifyContent="center"
        alignItems="center"
      >
        <Typography fontSize={{ sm: "h1" }} fontWeight="bold">
          북마크
        </Typography>
        <HorizontalDivider />
      </FlexColumnContainer>
      <GridContainer
        margin={{ sm: "0", xl: "0 auto" }}
        maxWidth={{ sm: "none", xl: "1200px" }}
        padding={{ sm: "0 20px" }}
        columnGap={{ sm: "10px", md: "20px", lg: "30px" }}
        rowGap={{ sm: "10px", md: "20px", lg: "30px" }}
        gridTemplateColumns={{
          sm: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
        }}
      >
        <BookmarkImage
          onImageClick={handleImageClick}
          onLikeClick={handleLikeClick}
        />
        <BookmarkImage
          onImageClick={handleImageClick}
          onLikeClick={handleLikeClick}
        />
        <BookmarkImage
          onImageClick={handleImageClick}
          onLikeClick={handleLikeClick}
        />
        <BookmarkImage
          onImageClick={handleImageClick}
          onLikeClick={handleLikeClick}
        />
        <BookmarkImage
          onImageClick={handleImageClick}
          onLikeClick={handleLikeClick}
        />
      </GridContainer>
      {isOn && (
        <BookmarkModal
          width={{ sm: "80%", lg: "50%" }}
          onClose={handleUpdateToOff}
        />
      )}
    </FlexColumnContainer>
  );
};

export default Bookmark;
