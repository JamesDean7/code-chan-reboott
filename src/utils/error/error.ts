import { ERRORINFO } from "@/const/error/error";
import { isAxiosError } from "axios";
import { CreateAxiosErrorFn, CreateStandardErrorFn } from "@/utils/error/types";

export const createAxiosError: CreateAxiosErrorFn = (axiosErr) => {
  const { data } = axiosErr?.response ?? {};

  if (!data) {
    return {
      type: "api",
      message: ERRORINFO.axios.unknown.message,
      code: ERRORINFO.axios.unknown.code,
      original: axiosErr,
    };
  }

  return {
    type: "api",
    message: ERRORINFO.axios.temp.message,
    code: ERRORINFO.axios.temp.code,
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
    message: ERRORINFO.client.unknown.message,
    code: ERRORINFO.client.unknown.code,
    original: err,
  };
};
