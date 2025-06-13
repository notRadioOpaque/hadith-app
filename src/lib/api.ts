// lib/api.ts
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

const BASE_URL = ""; //TODO replace with actual base url

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 5000,
});

// Utility wrappers
export const getFetch = async <T>(
  url: string,
  config?: AxiosRequestConfig,
): Promise<Result<T>> => {
  try {
    const res = await api.get<T>(url, config);
    return { data: res.data, error: null };
  } catch (error: any) {
    return {
      data: null,
      error:
        error?.response?.data?.message || error?.message || "Unknown error",
    };
  }
};

export const postFetch = async <T>(
  url: string,
  body?: unknown,
  config?: AxiosRequestConfig,
): Promise<Result<T>> => {
  try {
    const res = await api.post<T>(url, body, config);
    return { data: res.data, error: null };
  } catch (error: any) {
    return {
      data: null,
      error:
        error?.response?.data?.message || error?.message || "Unknown error",
    };
  }
};
