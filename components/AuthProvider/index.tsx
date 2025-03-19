"use client";

import React, { useEffect } from "react";
import useAuthStore from "@/store/authStore";

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { refreshToken } = useAuthStore();

  useEffect(() => {
    const initAuth = async () => {
      try {
        console.log("trying to refresh token");
        await refreshToken();
      } catch (error) {
        console.error("Initiating auth-page check failed:", error);
      }
    };

    initAuth();
  }, []);

  return <div>{children}</div>;
}
