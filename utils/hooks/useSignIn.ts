import { useRouter } from "expo-router";
import { useMutation } from "@tanstack/react-query";

import { api, queryClient } from "@app/utils";
import type { ApiResponse } from "@app/types/api";

export interface LoginParams {
  email: string;
  password: string;
}

interface LoginOk extends ApiResponse {
  user: { id: number; email: string };
}

export const useSignInMutation = () => {
  const router = useRouter();

  return useMutation({
    mutationFn: async (params: LoginParams) => {
      const { data } = await api.post<LoginOk>("/login", params);
      return data;
    },
    onSuccess: async (data) => {
      const { ok, ...rest } = data; // strip ok:true from the data
      queryClient.setQueryData(["me"], rest);
      router.push("/");
    },
    onError: (err: any) => {
      console.log("login error:", err?.message);
      console.log(
        "login error response:",
        err?.response?.status,
        err?.response?.data
      );
      alert(err?.response?.data?.message || "Login failed");
    },
  });
};
