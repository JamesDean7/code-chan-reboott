export type SystemError = {
  [x: string]: {
    [x: string]: {
      message: string;
      code: string;
    };
  };
};
