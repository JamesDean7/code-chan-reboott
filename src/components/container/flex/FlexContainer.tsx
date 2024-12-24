import styled from "@emotion/styled";
import { ReactNodeChildren } from "@/types/lib-react";
import { ElementClassName } from "@/types/element";
import { CSSStyleProperties } from "@/types/styles";

type FlexContainerStyleProps = Pick<
  CSSStyleProperties,
  | "flexDirection"
  | "justifyContent"
  | "alignItems"
  | "flex"
  | "position"
  | "gap"
>;

const FlexContainerStyle = styled.div<FlexContainerStyleProps>(
  ({
    position = "static",
    flex = "auto",
    flexDirection = "row",
    justifyContent = "center",
    alignItems = "center",
    gap,
  }) => ({
    display: "flex",
    position,
    flex,
    flexDirection,
    justifyContent,
    alignItems,
    gap,
  })
);

export type FlexContainerProps = ReactNodeChildren &
  FlexContainerStyleProps &
  ElementClassName;

const FlexContainer = ({ children, ...props }: FlexContainerProps) => {
  return <FlexContainerStyle {...props}>{children}</FlexContainerStyle>;
};

export default FlexContainer;
