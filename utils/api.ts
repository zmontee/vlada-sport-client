import useUIStore from "@/store/uiStore";

export async function withErrorHandling<T>(
  requestId: string,
  apiCall: (payload?: Partial<Record<string, any>>) => Promise<T>,
): Promise<T | undefined> {
  const uiStore = useUIStore.getState();

  try {
    uiStore.setLoading(requestId, true);
    const result = await apiCall();
    return result;
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "An unknown error occurred";
    uiStore.setError(requestId, errorMessage);
    return undefined;
  } finally {
    uiStore.setLoading(requestId, false);
  }
}
