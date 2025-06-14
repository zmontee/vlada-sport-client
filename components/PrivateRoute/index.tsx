"use client";
import React from "react";
import { useRequireAuth } from "@/hooks/useRequireAuth";

const PrivateRoute: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { isLoading, isAuth } = useRequireAuth();

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
