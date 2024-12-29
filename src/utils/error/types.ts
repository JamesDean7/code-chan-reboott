export type ErrorTypeOptions = "api" | "client" | "unknown";

export type StandardErrorFormat = {
  message: string;
  type: ErrorTypeOptions;
  original: any;
  code?: string;
};

export type UnsplashApiError = {
  errors: string[];
};
