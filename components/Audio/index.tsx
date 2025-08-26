import { View } from "react-native";
import { useEffect, useState } from "react";
import { useAudioPlayer } from "expo-audio";

import { useMe } from "@app/utils/hooks";
import { Button, Text } from "@app/components";
import { API_URL } from "@app/constants/config";

const useProbeAudio = (uri?: string) => {
  const [isProbing, setIsProbing] = useState(false);
  const [contentLength, setContentLength] = useState(0);

  useEffect(() => {
    if (!uri) {
      setContentLength(0);
      return;
    }
    setIsProbing(true);
    fetch(uri, { method: "HEAD" })
      .then((r) => Number(r.headers.get("content-length") || 0))
      .then((len) => setContentLength(len))
      .catch(() => setContentLength(0))
      .finally(() => setIsProbing(false));
  }, [uri]);

  return {
    isProbing,
    contentLength,
    isLoaded: !isProbing && contentLength > 0,
  };
};

const useMix = () => {
  const { data } = useMe();
  const uri = data?.token && `${API_URL}/myMix?token=${data.token}`;
  const { isLoaded } = useProbeAudio(uri); // check there's a file
  const player = useAudioPlayer({ uri });

  return {
    player,
    token: data?.token,
    isLoaded,
  };
};

const Audio = () => {
  const { player, token, isLoaded } = useMix();

  console.log("p", player);

  if (!token || !isLoaded) {
    return <Text>Error loading Tape</Text>;
  }

  return (
    <View>
      <Button onPress={() => player.play()}>Play</Button>
      <Button onPress={() => player.pause()}>Pause</Button>
      <Button
        onPress={() => {
          player.seekTo(0); // rewind to start
          player.play();
        }}
      >
        Restart
      </Button>
      <Button
        onPress={() => player.seekTo(30_000)} // ms
      >
        Seet to 30s
      </Button>
    </View>
  );
};

export { Audio };
