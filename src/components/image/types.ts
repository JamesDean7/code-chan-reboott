import type { ImageElementAttribute } from "@/types/element";
import type {
  PartialStylePropsByBreakpointsCollection,
  StyledComponentElementStyleCollection,
} from "@/types/styles";
import type { OmitByKey } from "@/types/utils";

/* ::: Image ::: */
export type ImageStyleProps = Pick<
  PartialStylePropsByBreakpointsCollection,
  "maxWidth" | "maxHeight"
> &
  Pick<
    NonNullable<ImageElementAttribute["style"]>,
    "objectFit" | "objectPosition"
  > &
  Pick<StyledComponentElementStyleCollection, "elementWidth" | "elementHeight">;

export type ImageProps = Pick<ImageElementAttribute, "src" | "alt"> &
  Pick<PartialStylePropsByBreakpointsCollection, "width" | "height"> &
  OmitByKey<ImageStyleProps, "elementWidth" | "elementHeight">;
