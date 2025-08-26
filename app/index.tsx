import { AxiosError } from "axios";
import { useRouter } from "expo-router";

import { useMe } from "@app/utils/hooks/useMe";
import { Audio, Button, Page, Spinner, Tape, Text } from "@app/components";
import { useIsLoggedIn, useLogout } from "@app/utils/hooks";

import type { ApiResponse } from "@app/types/api";

export default function Index() {
  const router = useRouter();
  const logoutMutation = useLogout();
  const { data, isLoading, error } = useMe();
  const isLoggedIn = useIsLoggedIn();

  const err = error as AxiosError<ApiResponse>;

  const handleLogout = async () => {
    await logoutMutation.mutateAsync();
  };

  return (
    <Page
      flex={1}
      backgroundColor="#DADADA"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      gap={10}
    >
      {isLoggedIn && (
        <>
          <Tape />
          <Audio />
        </>
      )}
      {isLoading && <Spinner />}
      {err?.response?.data?.code === "UNAUTHORIZED" && (
        <Text>Not logged in</Text>
      )}
      {isLoggedIn && <Text>Logged in as {data?.user?.email}</Text>}
      <Button width="100%" onPress={() => router.navigate("/auth/login")}>
        Go to Login
      </Button>
      {!isLoggedIn && (
        <Button variant="outline" onPress={handleLogout}>
          Logout
        </Button>
      )}
    </Page>
  );
}
