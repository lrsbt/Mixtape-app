import { useState } from "react";
import { useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";

import { Sizes } from "@app/theme";
import { Box, Button, Page, Tape, Text, TextInput } from "@app/components";
import { useSignInMutation } from "@/utils/hooks/useSignIn";

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signedInMutation = useSignInMutation();

  const handleSubmit = async () => {
    await signedInMutation.mutateAsync({ email, password });
  };

  return (
    <Page flex={1} backgroundColor="#DADADA">
      <LinearGradient
        colors={["rgba(0,0,0,0.1)", "transparent", "rgba(0,0,0,0.1)"]}
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
        }}
      />
      <Box flex={1} />
      <Text fontSize={40} lineHeight={40 * 1.1} marginBottom={Sizes[6]}>
        Welcome to Mixtape
      </Text>
      <TextInput
        label="Email Address"
        placeholder="My Email Address"
        fontSize={16}
        marginBottom={Sizes[2]}
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
      />
      <TextInput
        label="Password"
        placeholder="My Password"
        fontSize={16}
        marginBottom={Sizes[2]}
        keyboardType="visible-password"
        value={password}
        onChangeText={setPassword}
        autoCapitalize="none"
        secureTextEntry={true}
      />
      <Button
        onPress={handleSubmit}
        marginTop={Sizes[2]}
        marginBottom={Sizes[2]}
      >
        Login
      </Button>
      <Box
        flexDirection="row"
        flexWrap="wrap"
        alignItems="center"
        justifyContent="center"
        marginTop={Sizes[3]}
        marginBottom={Sizes[3]}
      >
        <Text fontSize={12}>
          By using BuyMeLunch, you agree to accept our{" "}
          <Text
            onPress={() => router.navigate("/auth/login")}
            textDecorationLine="underline"
          >
            Terms of use
          </Text>
          <Text> and </Text>
          <Text
            onPress={() => router.navigate("/auth/login")}
            textDecorationLine="underline"
          >
            Privacy Policy
          </Text>
        </Text>
      </Box>
    </Page>
  );
};

export default Login;
