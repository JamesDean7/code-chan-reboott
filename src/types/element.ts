export type JSXInstrinsicElementKeys = keyof JSX.IntrinsicElements;

export type ElementClassName = Pick<JSX.IntrinsicElements["div"], "className">;

export type ImageElementAttribute = JSX.IntrinsicElements["img"];

export type InputElementAttribute = JSX.IntrinsicElements["input"];

export type SvgElementAttribute = JSX.IntrinsicElements["svg"];
