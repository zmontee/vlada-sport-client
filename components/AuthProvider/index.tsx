"use client";
import React, { useEffect, useState } from "react";
import useAuthStore from "@/store/authStore";

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { refreshToken, getSessionInfo } = useAuthStore();
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    const initAuth = async () => {
      try {
        await refreshToken();
        await getSessionInfo();
      } catch (error) {
        console.error("Initiating auth-page check failed:", error);
      } finally {
        setInitialized(true);
      }
    };

    initAuth();
  }, [refreshToken, getSessionInfo]);

  // Можна додати власний лоадер для початкового завантаження
  if (!initialized) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin h-10 w-10 border-4 border-primary rounded-full border-t-transparent"></div>
      </div>
    );
  }

  return <>{children}</>;
}
