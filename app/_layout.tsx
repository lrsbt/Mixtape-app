import { LogBox } from "react-native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function RootLayout() {
  const [fontsLoaded, fontError] = useFonts({
    "Outfit-Regular": require("../assets/fonts/Outfit/Outfit-Regular.ttf"),
    "Outfit-Medium": require("../assets/fonts/Outfit/Outfit-Medium.ttf"),
    "Outfit-SemiBold": require("../assets/fonts/Outfit/Outfit-SemiBold.ttf"),
    "Outfit-Bold": require("../assets/fonts/Outfit/Outfit-Bold.ttf"),
    "PT-Mono": require("../assets/fonts/JetBrainsMono/JetBrainsMono-Bold.ttf"),
  });

  const queryClient = new QueryClient();

  if (!fontsLoaded && !fontError) return null;

  return (
    <QueryClientProvider client={queryClient}>
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: "white" },
        }}
      >
        <Stack.Screen name="auth/login" />
      </Stack>
    </QueryClientProvider>
  );
}
