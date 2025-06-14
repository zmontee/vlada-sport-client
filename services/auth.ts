import { axiosPublic, axiosPrivate } from "@/lib/axios";
import {
  AuthResponse,
  RefreshTokensResponse,
  GetSessionInfoResponse,
  RegisterPayload,
} from "@/types/auth";
import { withErrorHandling } from "@/utils/api";

const AUTH_REQUESTS = {
  LOGIN: "login",
  LOGOUT: "logout",
  REGISTER: "register",
  REFRESH_TOKENS: "refresh-tokens",
  GET_SESSION_INFO: "get-session-info",
};

const authService = {
  login: async (email: string, password: string) => {
    return withErrorHandling(AUTH_REQUESTS.LOGIN, async () => {
      return axiosPublic.post<AuthResponse>(
        "/auth/login",
        { email, password },
        { withCredentials: true },
      );
    });
  },

  logout: async () => {
    return withErrorHandling(AUTH_REQUESTS.LOGOUT, async () => {
      return axiosPrivate.post("/auth/logout");
    });
  },

  register: async (payload: RegisterPayload) => {
    return withErrorHandling(AUTH_REQUESTS.REGISTER, async () => {
      return axiosPublic.post<AuthResponse>("/auth/register", payload, {
        withCredentials: true,
      });
    });
  },

  refreshToken: async () => {
    return withErrorHandling(AUTH_REQUESTS.REFRESH_TOKENS, async () => {
      return axiosPublic.post<RefreshTokensResponse>(
        "/auth/refresh",
        {},
        { withCredentials: true },
      );
    });
  },

  getSessionInfo: async () => {
    return withErrorHandling(AUTH_REQUESTS.GET_SESSION_INFO, async () => {
      return axiosPrivate.get<GetSessionInfoResponse>("/auth/session");
    });
  },
};

export default authService;
