import { create } from "zustand";

type RequestState = {
  isLoading: boolean;
  error: string | null;
};

type UIStore = {
  requests: Record<string, RequestState>;
  setLoading: (requestId: string, isLoading: boolean) => void;
  setError: (requestId: string, error: string | null) => void;
  resetRequest: (requestId: string) => void;
  resetAllRequests: () => void;
};

const initialRequestState: RequestState = {
  isLoading: false,
  error: null,
};

const useUIStore = create<UIStore>((set) => ({
  requests: {},
  setLoading: (requestId, isLoading) =>
    set((state) => ({
      requests: {
        ...state.requests,
        [requestId]: {
          ...(state.requests[requestId] || initialRequestState),
          isLoading,
          ...(isLoading ? { error: null } : {}),
        },
      },
    })),
  setError: (requestId, error) =>
    set((state) => ({
      requests: {
        ...state.requests,
        [requestId]: {
          ...(state.requests[requestId] || initialRequestState),
          error,
          isLoading: false,
        },
      },
    })),
  resetRequest: (requestId) =>
    set((state) => {
      const { [requestId]: _, ...rest } = state.requests;
      return { requests: rest };
    }),
  resetAllRequests: () => set({ requests: {} }),
}));

export default useUIStore;
