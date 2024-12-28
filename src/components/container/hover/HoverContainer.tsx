import Container from "@/components/container/base/Container";
import type { ReactNodeChildren } from "@/types/lib-react";
import type { CSSStyleProperties } from "@/types/styles";
import styled from "@emotion/styled";
import type { ComponentProps } from "react";

type HoverContainerStyleProps = {
  cursor?: CSSStyleProperties["cursor"];
};

const HoverContainerStyle = styled(Container)<HoverContainerStyleProps>(
  ({ cursor = "pointer" }) => {
    return {
      cursor,
    };
  }
);

type HoverContainerProps = ReactNodeChildren &
  ComponentProps<typeof HoverContainerStyle>;

const HoverContainer = ({ children, ...props }: HoverContainerProps) => {
  return <HoverContainerStyle {...props}>{children}</HoverContainerStyle>;
};

export default HoverContainer;
