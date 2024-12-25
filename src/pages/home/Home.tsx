import FlexColumnContainer from "@/components/container/flex/FlexColumnContainer";
import ImageGallerySection from "@/pages/home/_sections/ImageGallerySection";
import ImageSearchSection from "@/pages/home/_sections/ImageSearchSection";

const Home = () => {
  return (
    <FlexColumnContainer alignItems="stretch" rowGap={{ sm: "20px" }}>
      <ImageSearchSection />
      <ImageGallerySection />
    </FlexColumnContainer>
  );
};

export default Home;
