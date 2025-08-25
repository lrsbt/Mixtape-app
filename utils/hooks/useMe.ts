import { AxiosError } from "axios";
import { useQuery, UseQueryResult } from "@tanstack/react-query";

import { api } from "@app/utils";
import { cacheKeys } from "@app/constants/cacheKeys";
import { MeResponse } from "@app/types/api";

const fetchMe = async (): Promise<MeResponse> => {
  const { data } = await api.get("/me");
  return data;
};

export const useMe = (): UseQueryResult<MeResponse> => {
  return useQuery<MeResponse, AxiosError>({
    queryKey: cacheKeys.me,
    queryFn: fetchMe,
    staleTime: 1000 * 60,
    retry: false,
  });
};
