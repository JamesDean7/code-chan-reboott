import { ErrorInfo } from "@/const/error/types";

export const ERRORINFO = {
  client: {
    unknown: {
      message: "unknown error occured",
      code: "clientUnknownError",
    },
  },
  axios: {
    unknown: {
      message: "unknown error occured",
      code: "axiosUnknownError",
    },
    temp: {
      message: "temporary error",
      code: "axiosTempError",
    },
  },
} satisfies ErrorInfo;
