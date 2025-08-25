module.exports = {
  expo: {
    name: "Mixtape",
    slug: "mixtape",
    version: "1.0.0",
    scheme: "mixtape",
    orientation: "portrait",
    experiments: {
      tsconfigPaths: true,
    },
    plugins: [
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
