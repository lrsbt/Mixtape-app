import { useEffect, useState } from "react";
import { Audio as ExpoAudio } from "expo-av";
import { Button } from "@app/components";

const Audio = () => {
  const [sound, setSound] = useState<ExpoAudio.Sound | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const load = async () => {
      const { sound: soundObj } = await ExpoAudio.Sound.createAsync({
        uri: "https://mixtapeapi.larsattacks.co.uk/myMix",
      });
      setSound(soundObj);
    };
    load();

    return () => {
      sound?.unloadAsync();
    };
  }, []);

  useEffect(() => {
    if (!sound) return;

    const run = async () => {
      (await isPlaying) ? sound.playAsync() : await sound.pauseAsync();
    };
    run();
  }, [isPlaying, sound]);

  return (
    <Button onPress={() => setIsPlaying((p) => !p)}>
      {isPlaying ? "Pause" : "Play"}
    </Button>
  );
};

export { Audio };
