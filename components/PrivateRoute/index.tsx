import React from "react";
import { useRequireAuth } from "@/hooks/useRequireAuth";

const PrivateRoute: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { isLoading, isAuth } = useRequireAuth();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!isAuth) {
    return null;
  }

  return <>{children}</>;
};

export default PrivateRoute;
