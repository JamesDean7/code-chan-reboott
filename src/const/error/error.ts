import type { SystemError } from "@/const/error/types";

export const ERROR_SYSTEM = {
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
    unsplash: {
      message: "unsplash api error",
      code: "axiosUnsplashAPIError",
    },
  },
} satisfies SystemError;
