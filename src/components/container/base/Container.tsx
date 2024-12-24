import styled from "@emotion/styled";
import { CSSStyleProperties } from "@/types/styles";
import { ReactNodeChildren } from "@/types/lib-react";

type ContainerStyleProps = Pick<
  CSSStyleProperties,
  "position" | "display" | "width" | "height" | "margin"
>;

const ContainerStyle = styled.div<ContainerStyleProps>(
  ({ position, display, width, height, margin }) => ({
    position,
    display,
    width,
    height,
    margin,
  })
);

type ContainerProps = ContainerStyleProps &
  ReactNodeChildren & {
    onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  };

const Container = ({ children, ...props }: ContainerProps) => {
  return <ContainerStyle {...props}>{children}</ContainerStyle>;
};

export default Container;
