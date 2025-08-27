module.exports = {
  expo: {
    name: "Mixtape",
    slug: "mixtape",
    version: "1.0.0",
    scheme: "mixtape",
    orientation: "portrait",
    icon: "./assets/images/icon.png",
    userInterfaceStyle: "automatic",
    newArchEnabled: true,
    experiments: {
      tsconfigPaths: true,
    },
    owner: "madebydavid",
    extra: {
      eas: {
        projectId: "54803050-52dc-491c-8e43-fe54c5a5d6c8",
      },
    },
    ios: {
      bundleIdentifier: "com.helloinvent.mixtape",
      supportsTablet: true,
      infoPlist: {
        UIBackgroundModes: ["audio"],
        ITSAppUsesNonExemptEncryption: false,
      },
    },
    android: {
      package: "com.helloinvent.mixtape",
      adaptiveIcon: {
        foregroundImage: "./assets/images/adaptive-icon.png",
        backgroundColor: "#ffffff",
      },
      edgeToEdgeEnabled: true,
    },
    web: {
      bundler: "metro",
      output: "static",
      favicon: "./assets/images/favicon.png",
    },
    plugins: [
      "expo-router",
      [
        "expo-splash-screen",
        {
          image: "./assets/images/splash-icon.png",
          imageWidth: 200,
          resizeMode: "contain",
          backgroundColor: "#ffffff",
        },
      ],
      ["expo-audio"],
      [
        "expo-font",
        {
          fonts: [
            "./assets/fonts/Outfit/Outfit-Regular.ttf",
            "./assets/fonts/Outfit/Outfit-Medium.ttf",
            "./assets/fonts/Outfit/Outfit-SemiBold.ttf",
            "./assets/fonts/Outfit/Outfit-Bold.ttf",
            "./assets/fonts/JetBrainsMono/JetBrainsMono-Bold.ttf",
            "./assets/fonts/JetBrainsMono/JetBrainsMono-Medium.ttf",
          ],
        },
      ],
    ],
  },
};
