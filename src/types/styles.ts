import { CSSProperties } from "react";

export type CSSStyleProperties = CSSProperties;

export type CSSFlexStyleProps = Pick<
  CSSStyleProperties,
  "flex" | "flexDirection" | "justifyContent" | "alignItems" | "gap"
>;

export type CSSFlexDirection = CSSProperties["flexDirection"];

export type CSSFlexAlignItems = CSSProperties["alignItems"];
