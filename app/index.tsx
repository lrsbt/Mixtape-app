import { AxiosError } from "axios";
import { useRouter } from "expo-router";

import { useMe } from "@app/utils/hooks/useMe";
import { Audio, Box, Button, Page, Spinner, Tape, Text } from "@app/components";
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
      {isLoggedIn && <Text>Logged in as {data?.user?.email}</Text>}
      <Box flex={1} />
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
      <Box flex={1} />

      {!isLoggedIn && (
        <Button width="100%" onPress={() => router.navigate("/auth/login")}>
          Go to Login
        </Button>
      )}
      {isLoggedIn && (
        <Button variant="ghost" onPress={handleLogout}>
          Logout
        </Button>
      )}
    </Page>
  );
}
