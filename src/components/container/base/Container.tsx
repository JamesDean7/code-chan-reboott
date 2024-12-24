import styled from "@emotion/styled";
import { CSSStyleProperties } from "@/types/styles";
import { ReactNodeChildren } from "@/types/lib-react";

type ContainerStyleProps = Pick<
  CSSStyleProperties,
  "position" | "display" | "width" | "height"
>;

const ContainerStyle = styled.div<ContainerStyleProps>(
  ({ position, display, width, height }) => ({
    position,
    display,
    width,
    height,
  })
);

type ContainerProps = ContainerStyleProps & ReactNodeChildren;

const Container = ({ children, ...props }: ContainerProps) => {
  return <ContainerStyle {...props}>{children}</ContainerStyle>;
};

export default Container;
