import { useForm } from "react-hook-form";
import FlexColumnContainer from "@/components/container/flex/FlexColumnContainer";
import Image from "@/components/image/base/Image";
import Typography from "@/components/typography/base/Typography";
import useThemePalette from "@/hooks/theme/useThemePalette";
import TextControlInput from "@/components/input/hookform/text/TextControlInput";
import { isEmptyString } from "@/utils/verify/verify";
import { PAGE_HOME_ERROR } from "@/pages/home/_const/error";
import type { HookFormCommonCollection } from "@/components/input/types";
import { ZINDEX } from "@/const/style/style";
import FilterContainer from "@/components/container/filter/FilterContainer";

type SearchForm = {
  search: string;
};

type ImageSearchSectionProp = {
  onSearchRequest: (searchValue: string) => void;
};

const ImageSearchSection = ({ onSearchRequest }: ImageSearchSectionProp) => {
  const {
    control,
    formState: { errors },
    trigger,
    clearErrors,
    getValues,
  } = useForm<SearchForm>();

  const themePaletteCommon = useThemePalette({ usePallete: "common" });

  const handleSearchData = async (search: string) => {
    if (isEmptyString(search) && errors?.search) {
      clearErrors();
      return;
    }

    if (!isEmptyString(search)) {
      const triggerResult = await trigger("search");
      if (!triggerResult) return;
      onSearchRequest(getValues("search"));
    }
  };

  const validateSearchInput: HookFormCommonCollection<SearchForm>["customValidateFn"] =
    (inputValue) => {
      if (inputValue.length < 2) {
        return PAGE_HOME_ERROR.validate.search.minLength;
      }
    };

  return (
    <FilterContainer
      flexDirection="row"
      justifyContent="center"
      alignItems="center"
    >
      <Image
        src="/main-bg.jpg"
        alt="main image"
        width={{ sm: "100%" }}
        height={{ sm: "300px", md: "400px", lg: "500px" }}
      />
      <FlexColumnContainer
        position="absolute"
        justifyContent="center"
        rowGap={{ sm: "12px" }}
        zIndex={ZINDEX.bgFilterContent}
      >
        <Typography
          element="h1"
          fontSize={{ sm: "h5", md: "h3", lg: "h1" }}
          fontWeight="bold"
          color={themePaletteCommon.white}
        >
          Unsplash
        </Typography>
        <Typography
          fontSize={{ sm: "body3", md: "body2", lg: "body1" }}
          fontWeight="normal"
          color={themePaletteCommon.white}
          lineHeight="1.6"
        >
          인터넷의 시각 자료 출처입니다. <br />
          모든 지역에 있는 크리에이터의 지원을 받습니다.
        </Typography>
        <TextControlInput
          displayError
          control={control}
          inputName="search"
          placeholder="고해상도 이미지 검색"
          fontSize={{ sm: "body3", md: "body2", lg: "body1" }}
          width="50vw"
          onChange={handleSearchData}
          customValidateFn={validateSearchInput}
        />
      </FlexColumnContainer>
    </FilterContainer>
  );
};

export default ImageSearchSection;
