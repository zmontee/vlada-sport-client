import axios, { AxiosError, InternalAxiosRequestConfig } from "axios";
import useAuthStore from "@/store/authStore";

export const BASE_URL = process.env.NEXT_APP_API_URL || "http://localhost:2999";

export const axiosPublic = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const axiosPrivate = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

export const updateAxiosConfig = (token: string | null) => {
  if (token) {
    axiosPrivate.defaults.headers.common.Authorization = `Bearer ${token}`;
  } else {
    delete axiosPrivate.defaults.headers.common.Authorization;
  }
};

let isRefreshing = false;
let refreshSubscribers: ((token: string) => void)[] = [];

const subscribeTokenRefresh = (cb: (token: string) => void) => {
  refreshSubscribers.push(cb);
};

const onRefreshed = (token: string) => {
  refreshSubscribers.map((cb) => cb(token));
  refreshSubscribers = [];
};

axiosPrivate.interceptors.request.use((config) => {
  const token = useAuthStore.getState().accessToken;

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

axiosPrivate.interceptors.response.use((config) => {
  const token = useAuthStore.getState().accessToken;

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

axiosPrivate.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    const originalRequest = error.config as InternalAxiosRequestConfig & {
      _retry?: boolean;
    };

    if (
      error.response?.status === 401 &&
      !originalRequest?._retry &&
      useAuthStore.getState().accessToken !== null
    ) {
      if (isRefreshing) {
        return new Promise((resolve) => {
          subscribeTokenRefresh((token) => {
            originalRequest.headers.Authorization = `Bearer ${token}`;
            resolve(axiosPrivate(originalRequest));
          });
        });
      }

      originalRequest._retry = true;
      isRefreshing = true;

      try {
        const newAccessToken = await useAuthStore.getState().refreshToken();
        updateAxiosConfig(newAccessToken);
        onRefreshed(newAccessToken);

        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
        return await axiosPrivate(originalRequest);
      } catch (refreshError) {
        await useAuthStore.getState().logout();
        delete axiosPrivate.defaults.headers.common.Authorization;
        throw new Error(
          refreshError instanceof Error
            ? refreshError.message
            : "Token refresh failed",
        );
      } finally {
        isRefreshing = false;
      }
    }

    return Promise.reject(error);
  },
);
