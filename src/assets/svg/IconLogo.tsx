import SvgElement, { SvgElementProps } from "@/assets/svg/base/SvgElement";

type IconLogoProps = Pick<SvgElementProps, "width" | "height">;

const IconLogo = ({
  width = { sm: "24px" },
  height = { sm: "24px" },
}: IconLogoProps) => {
  return (
    <SvgElement width={width} height={height} viewBox="0 0 32 32">
      <path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path>
    </SvgElement>
  );
};

export default IconLogo;
