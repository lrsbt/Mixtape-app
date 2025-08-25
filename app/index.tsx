import { AxiosError } from "axios";
import { useRouter } from "expo-router";
import { View } from "react-native";

import { useMe } from "@app/utils/hooks/useMe";
import { Button, Page, Spinner, Text } from "@app/components";
import { ApiResponse } from "@app/types/api";

export default function Index() {
  const router = useRouter();
  const { data, isLoading, error } = useMe();

  const err = error as AxiosError<ApiResponse>;

  return (
    <Page
      flex={1}
      backgroundColor="#DADADA"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      gap={10}
    >
      {isLoading && <Spinner />}
      {err?.response?.data?.code === "UNAUTHORIZED" && (
        <Text>Not logged in</Text>
      )}
      {data?.user?.id && <Text>Logged in as {data?.user?.email}</Text>}
      <Button width="100%" onPress={() => router.navigate("/auth/login")}>
        Go to Login
      </Button>
    </Page>
  );
}
