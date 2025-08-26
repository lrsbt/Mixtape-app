import { useMe } from "./useMe";

export const useIsLoggedIn = () => {
  const { data } = useMe();
  return !!data?.user?.id;
};
