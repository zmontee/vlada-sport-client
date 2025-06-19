"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useRequireAuth } from "@/hooks/useRequireAuth";

const PrivateRoute: React.FC<{
  children: React.ReactNode;
  redirectPath?: string;
}> = ({ children, redirectPath = "/auth" }) => {
  const router = useRouter();
  const { isLoading, isAuth } = useRequireAuth(redirectPath);

  useEffect(() => {
    console.log("isLoading: ", isLoading);
    if (!isLoading && !isAuth) {
      console.log("Redirecting to: ", redirectPath);
      router.replace(redirectPath);
    }
  }, [isLoading, isAuth, router, redirectPath]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin h-10 w-10 border-4 border-primary rounded-full border-t-transparent"></div>
      </div>
    );
  }

  return isAuth ? <>{children}</> : null;
};

export default PrivateRoute;
