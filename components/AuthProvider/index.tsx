"use client";

import React, { useEffect } from "react";
import useAuthStore from "@/store/authStore";

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { refreshToken, getSessionInfo } = useAuthStore();

  useEffect(() => {
    const initAuth = async () => {
      try {
        await refreshToken();
        await getSessionInfo();
      } catch (error) {
        console.error("Initiating auth-page check failed:", error);
      }
    };

    initAuth();
  }, []);

  return <div>{children}</div>;
}
