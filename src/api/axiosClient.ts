import { StandardError } from "@/class/error/StandardError";
import { createStandardError } from "@/utils/error/error";
import axios from "axios";

export const axiosClient = axios.create({
  baseURL: `http://localhost:4000`,
  timeout: 10000,
});

axiosClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(new StandardError(createStandardError(error)));
  }
);