import useAuthStore from "@/store/authStore";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export const useRequireAuth = () => {
  const router = useRouter();
  const { isAuth, isLoading } = useAuthStore();

  useEffect(() => {
    if (!isLoading && !isAuth) {
      router.replace("/login");
    }
  }, [isAuth, isLoading, router]);

  return { isAuth, isLoading };
};
