import axios from "axios";
import { StandardError } from "@/class/error/StandardError";
import { createStandardError } from "@/utils/error/error";

const tokenScheme = "Client-ID";
const accessKey = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;

export const axiosClient = axios.create({
  baseURL: `https://api.unsplash.com/`,
  // baseURL: `http://localhost:4000`,
  timeout: 10000,
});

axiosClient.interceptors.request.use(
  (config) => {
    config.headers["Accept-Version"] = "v1";
    config.headers.Authorization = `${tokenScheme} ${accessKey}`;

    console.log({ header: config, accessKey });
    return config;
  },
  (error) => {
    return Promise.reject(new StandardError(createStandardError(error)));
  }
);

axiosClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(new StandardError(createStandardError(error)));
  }
);
