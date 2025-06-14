import { create } from "zustand";
import { AuthState, RegisterPayload } from "@/types/auth";
import { updateAxiosConfig } from "@/lib/axios";
import authService from "@/services/auth";

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
      const response = await authService.login(email, password);

      if (!response) {
        set({ isLoading: false });
        throw new Error("Login failed");
      }

      const { accessToken, user } = response.data;

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

  registerUser: async (data: RegisterPayload) => {
    set({ isLoading: true });

    try {
      const response = await authService.register(data);
      const { accessToken, user } = response.data;

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
      await authService.logout();
    } catch (error) {
      console.error("Logout error:", error);
    } finally {
      set({ user: null, accessToken: null, isAuth: false });
      updateAxiosConfig(null);
    }
  },

  getSessionInfo: async () => {
    try {
      const response = await authService.getSessionInfo();
      const user = response.data;

      set({
        user,
        isAuth: true,
      });

      return user;
    } catch (error) {
      set({ user: null, accessToken: null, isAuth: false });
      throw error;
    }
  },

  refreshToken: async () => {
    try {
      const response = await authService.refreshToken();

      const { accessToken } = response.data;
      set({ accessToken });

      updateAxiosConfig(accessToken);
      return accessToken;
    } catch (error) {
      set({
        isAuth: false,
        user: null,
        accessToken: null,
      });
      console.error(`REFRESH TOKEN ERROR: ${error}`);
      throw error;
    }
  },
}));

export default useAuthStore;
