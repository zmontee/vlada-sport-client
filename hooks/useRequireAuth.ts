"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import useAuthStore from "@/store/authStore";

export const useRequireAuth = () => {
  const router = useRouter();
  const { isAuth, isLoading, refreshToken, getSessionInfo } = useAuthStore();
  const [isAuthChecking, setIsAuthChecking] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      setIsAuthChecking(true);
      try {
        await refreshToken();
        await getSessionInfo();
      } catch (error) {
        router.replace("/auth");
      } finally {
        setIsAuthChecking(false);
      }
    };

    if (!isAuth && !isLoading) {
      checkAuth();
    } else {
      setIsAuthChecking(false);
    }
  }, [isAuth, isLoading, refreshToken, getSessionInfo, router]);

  return { isAuth, isLoading: isLoading || isAuthChecking };
};
