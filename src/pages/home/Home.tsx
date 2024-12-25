import FlexColumnContainer from "@/components/container/flex/FlexColumnContainer";
import FlexRowContainer from "@/components/container/flex/FlexRowContainer";
import Image from "@/components/image/base/Image";
import TextInput from "@/components/input/text/TextInput";
import Typography from "@/components/typography/base/Typography";
import useThemePalette from "@/hooks/theme/useThemePalette";
import ImageGallery from "@/pages/home/_sections/ImageGallery";
import { createStyledCompStyleByBreakpoint } from "@/utils/style";

const Home = () => {
  const themePaletteCommon = useThemePalette({ usePallete: "common" });

  const test = createStyledCompStyleByBreakpoint({
    width: { sm: "100px", md: "200px", lg: "300px" },
    height: { sm: "200px", md: "300px", lg: "400px" },
  });

  console.log({ test });

  return (
    <FlexColumnContainer alignItems="stretch" rowGap={{ sm: "20px" }}>
      <FlexRowContainer
        flex={1}
        position="relative"
        justifyContent="center"
        alignItems="center"
      >
        <Image
          src="/test.jpg"
          alt="main image"
          width={{ sm: "100%" }}
          height={{ sm: "300px", md: "400px" }}
        />
        <FlexColumnContainer
          position="absolute"
          justifyContent="center"
          rowGap={{ sm: "12px" }}
        >
          <Typography
            component="h1"
            fontSize={{ sm: "h5", md: "h3", lg: "h1" }}
            fontWeight="bold"
            color={themePaletteCommon.white}
          >
            Unsplash
          </Typography>
          <Typography
            component="p"
            fontSize={{ sm: "body3", md: "body2", lg: "body1" }}
            fontWeight="normal"
            color={themePaletteCommon.white}
            lineHeight="1.6"
          >
            인터넷의 시각 자료 출처입니다. <br />
            모든 지역에 있는 크리에이터의 지원을 받습니다.
          </Typography>
          <TextInput
            placeholder="고해상도 이미지 검색"
            fontSize={{ sm: "body3", md: "body2", lg: "body1" }}
            width="50vw"
            onChange={(e) => {}}
          />
        </FlexColumnContainer>
      </FlexRowContainer>
      <ImageGallery />
    </FlexColumnContainer>
  );
};

export default Home;
