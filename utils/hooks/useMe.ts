import axios, { AxiosError } from "axios";
import { useQuery, UseQueryResult } from "@tanstack/react-query";

import { API_URL } from "@app/constants/config";
import { cacheKeys } from "@app/constants/cacheKeys";
import { MeResponse } from "@app/types/api";

const fetchMe = async (): Promise<MeResponse> => {
  const { data } = await axios.get(`${API_URL}/me`, { withCredentials: true });
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
