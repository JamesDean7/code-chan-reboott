import { PartialSvgCommonProps } from "@/assets/svg/types";

type IconLogoProps = Pick<PartialSvgCommonProps, "width" | "height">;

const IconLogo = ({ width = "32px", height = "32px" }: IconLogoProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 32 32"
      version="1.1"
      aria-labelledby="unsplash-home"
      aria-hidden="false"
    >
      <path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path>
    </svg>
  );
};

export default IconLogo;
