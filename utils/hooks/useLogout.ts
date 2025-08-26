import { useRouter } from "expo-router";
import { useMutation } from "@tanstack/react-query";

import { api, queryClient } from "@app/utils";
import type { ApiResponse } from "@app/types/api";

export const useLogout = () => {
  const router = useRouter();

  return useMutation({
    mutationFn: async () => {
      const { data } = await api.post<ApiResponse>("/logout");
      return data;
    },
    onMutate: () => {
      queryClient.setQueryData(["me"], null); // be optimistic
    },
    onSuccess: async () => {
      queryClient.removeQueries({ queryKey: ["me"], exact: true });
      router.replace("/auth/login");
    },
    onError: (err: any) => {
      console.log("logout error:", err?.message);
      console.log(
        "logout error response:",
        err?.response?.status,
        err?.response?.data
      );
      alert(err?.response?.data?.message || "logout failed");
    },
  });
};
