"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import useAuthStore from "@/store/authStore";

export const useRequireAuth = (redirectPath = "/auth") => {
  const router = useRouter();
  const { isAuth, isLoading, refreshToken, getSessionInfo } = useAuthStore();
  const [isAuthChecking, setIsAuthChecking] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      setIsAuthChecking(true);
      try {
        await refreshToken();
        await getSessionInfo();

        if (!useAuthStore.getState().isAuth) {
          router.replace(redirectPath);
        }
      } catch (error) {
        router.replace(redirectPath);
      } finally {
        setIsAuthChecking(false);
      }
    };

    if (!isAuth && !isLoading) {
      checkAuth();
    } else {
      setIsAuthChecking(false);
    }
  }, [isAuth, isLoading, refreshToken, getSessionInfo, router, redirectPath]);

  return { isAuth, isLoading: isLoading || isAuthChecking };
};
