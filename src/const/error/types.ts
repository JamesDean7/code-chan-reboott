export type ErrorInfo = {
  [x: string]: {
    [x: string]: {
      message: string;
      code: string;
    };
  };
};
