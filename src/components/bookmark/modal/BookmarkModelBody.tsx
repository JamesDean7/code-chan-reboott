import FlexRowContainer from "@/components/container/flex/FlexRowContainer";
import Image from "@/components/image/base/Image";

const BookmarkModelBody = () => {
  return (
    <FlexRowContainer justifyContent="center">
      <Image
        src="/test.jpg"
        alt="test image"
        width={{ sm: "300px" }}
        height={{ sm: "400px" }}
      />
    </FlexRowContainer>
  );
};

export default BookmarkModelBody;
