import type { PartialSvgCommonProps } from "@/assets/svg/types";

type IconCancelProps = Pick<
  PartialSvgCommonProps,
  "width" | "height" | "stroke"
>;

const IconCancel = ({
  height = "40px",
  width = "40px",
  stroke = "#000000",
}: IconCancelProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 64 64"
      strokeWidth="3"
      stroke={stroke}
      fill="none"
    >
      <line x1="8.06" y1="8.06" x2="55.41" y2="55.94" />
      <line x1="55.94" y1="8.06" x2="8.59" y2="55.94" />
    </svg>
  );
};

export default IconCancel;
