import { create } from "zustand";
import { AuthResponse, AuthState, RefreshTokensResponse } from "@/types/auth";
import { axiosPrivate, axiosPublic, updateAxiosConfig } from "@/lib/axios";

const useAuthStore = create<AuthState>()((set, get) => ({
  user: null,
  accessToken: null,
  isAuth: false,
  isLoading: false,

  setUser: (user) => set({ user, isAuth: !!user }),

  setAccessToken: (token) => {
    set({ accessToken: token });

    // ! updateAxiosConfig(token);
  },

  login: async (email, password) => {
    set({ isLoading: true });

    try {
      const response = await axiosPublic.post<AuthResponse>("/auth/login", {
        email,
        password,
      });
      const { accessToken, user } = response.data.data;

      set({
        user,
        accessToken,
        isAuth: true,
        isLoading: false,
      });

      updateAxiosConfig(accessToken);
    } catch (error) {
      set({ isLoading: false });
      throw error;
    }
  },

  logout: async () => {
    try {
      await axiosPrivate.post("/auth/logout");
    } catch (error) {
      console.error("Logout error:", error);
    } finally {
      set({ user: null, accessToken: null, isAuth: false });
      updateAxiosConfig(null);
    }
  },

  refreshToken: async () => {
    try {
      const response = await axiosPublic.post<RefreshTokensResponse>(
        "/auth/refresh",
        {},
        {
          withCredentials: true,
        },
      );

      const { accessToken } = response.data.data;
      set({ accessToken });

      return accessToken;
    } catch (error) {
      set({
        user: null,
        accessToken: null,
        isAuth: false,
      });
      throw error;
    }
  },
}));

export default useAuthStore;
