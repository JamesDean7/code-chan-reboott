import styled from "@emotion/styled";
import { CSSProperties } from "react";
import { ReactNodeChildren } from "@/types/lib-react";
import { ElementClassName } from "@/types/element";

type FlexContainerStyleProps = Pick<
  CSSProperties,
  "flexDirection" | "justifyContent" | "alignItems"
>;

const FlexContainerStyle = styled.div<FlexContainerStyleProps>(
  ({
    flexDirection = "row",
    justifyContent = "center",
    alignItems = "center",
  }) => ({
    display: "flex",
    flexDirection,
    justifyContent,
    alignItems,
  })
);

export type FlexContainerProps = ReactNodeChildren &
  FlexContainerStyleProps &
  ElementClassName;

const FlexContainer = ({ children, ...props }: FlexContainerProps) => {
  return <FlexContainerStyle {...props}>{children}</FlexContainerStyle>;
};

export default FlexContainer;
