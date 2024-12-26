import { AxiosError } from "axios";

export type ErrorTypeOptions = "api" | "client" | "unknown";

export type StandardErrorFormat = {
  message: string;
  type: ErrorTypeOptions;
  original: any;
  code?: string;
};

export type CreateStandardErrorFn = (err: unknown) => StandardErrorFormat;

export type CreateAxiosErrorFn = (
  errResponse?: AxiosError
) => StandardErrorFormat;
