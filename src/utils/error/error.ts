import { ERROR_SYSTEM } from "@/const/error/error";
import type { AxiosError } from "axios";
import { isAxiosError } from "axios";
import type {
  StandardErrorFormat,
  UnsplashApiError,
} from "@/utils/error/types";
import { isArrayType } from "@/utils/verify/verify";

export const createUnsplashError = (
  axiosErrorData: unknown,
  axiosErr: AxiosError
): StandardErrorFormat => {
  const unsplashError = (axiosErrorData as UnsplashApiError)?.errors;
  const isErrorArray = isArrayType(unsplashError);
  if (!isErrorArray) {
    return {
      type: "api",
      message: ERROR_SYSTEM.axios.unsplash.message,
      code: ERROR_SYSTEM.axios.unsplash.code,
      original: axiosErr,
    };
  }
  return {
    type: "api",
    message: unsplashError.join(","),
    code: ERROR_SYSTEM.axios.unsplash.code,
    original: axiosErr,
  };
};

export const createAxiosError = (axiosErr: AxiosError): StandardErrorFormat => {
  const { data } = axiosErr?.response ?? {};

  if (!data) {
    return {
      type: "api",
      message: ERROR_SYSTEM.axios.unknown.message,
      code: ERROR_SYSTEM.axios.unknown.code,
      original: axiosErr,
    };
  }

  return createUnsplashError(data, axiosErr);
};

export const createStandardError = (err: unknown): StandardErrorFormat => {
  const axiosError = isAxiosError(err);

  if (axiosError) {
    return createAxiosError(err);
  }

  if (err instanceof Error) {
    return { type: "client", message: err.message, code: "", original: err };
  }

  return {
    type: "unknown",
    message: ERROR_SYSTEM.client.unknown.message,
    code: ERROR_SYSTEM.client.unknown.code,
    original: err,
  };
};
