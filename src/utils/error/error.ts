import { ERROR_SYSTEM } from "@/const/error/error";
import { isAxiosError } from "axios";
import { CreateAxiosErrorFn, CreateStandardErrorFn } from "@/utils/error/types";

export const createAxiosError: CreateAxiosErrorFn = (axiosErr) => {
  const { data } = axiosErr?.response ?? {};

  if (!data) {
    return {
      type: "api",
      message: ERROR_SYSTEM.axios.unknown.message,
      code: ERROR_SYSTEM.axios.unknown.code,
      original: axiosErr,
    };
  }

  return {
    type: "api",
    message: ERROR_SYSTEM.axios.temp.message,
    code: ERROR_SYSTEM.axios.temp.code,
    original: axiosErr,
  };
};

export const createStandardError: CreateStandardErrorFn = (err: unknown) => {
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
