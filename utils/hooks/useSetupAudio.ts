import { setAudioModeAsync } from "expo-audio";
import { useEffect } from "react";

export const useSetupAudio = () => {
  const init = async () => {
    try {
      await setAudioModeAsync({
        playsInSilentMode: true,
        shouldPlayInBackground: true,
        allowsRecording: false,
        interruptionMode: "duckOthers",
      });
    } catch (e) {
      console.warn("Failed to set audio mode:", e);
    }
  };

  useEffect(() => {
    init();
  }, []);
};
