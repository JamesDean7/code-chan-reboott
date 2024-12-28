import type { SvgElementProps } from "@/assets/svg/base/SvgElement";
import SvgElement from "@/assets/svg/base/SvgElement";

type IconCancelProps = Pick<SvgElementProps, "width" | "height" | "stroke">;

const IconCancel = ({
  height = { sm: "24px" },
  width = { sm: "24px" },
  stroke = "#000000",
}: IconCancelProps) => {
  return (
    <SvgElement
      width={width}
      height={height}
      viewBox="0 0 64 64"
      strokeWidth="3"
      stroke={stroke}
      fill="none"
    >
      <line x1="8.06" y1="8.06" x2="55.41" y2="55.94" />
      <line x1="55.94" y1="8.06" x2="8.59" y2="55.94" />
    </SvgElement>
  );
};

export default IconCancel;
