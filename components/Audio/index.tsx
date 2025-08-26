import { useAudioPlayerStatus } from "expo-audio";

import { formatTime } from "@app/utils";
import { useMyMix } from "@app/utils/hooks";
import { Box, Button, Text } from "@app/components";

const Audio = () => {
  const { player, token, isLoaded } = useMyMix();
  const status = useAudioPlayerStatus(player);

  if (!token || !isLoaded || !status) return <Text>Error loading Tape</Text>;

  const isPlaying = !!status.playing;

  return (
    <Box>
      <Text>
        {formatTime(status.currentTime)} / {formatTime(status.duration ?? 0)}
      </Text>
      <Box flexDirection="row" gap={6}>
        <Button onPress={() => (isPlaying ? player.pause() : player.play())}>
          {isPlaying ? "Pause" : "Play"}
        </Button>

        <Button
          onPress={() => {
            player.seekTo(0);
            player.play();
          }}
        >
          Restart
        </Button>
        <Button
          onPress={() => player.seekTo(status.currentTime - 30)} // s
        >
          -30s
        </Button>
        <Button
          onPress={() => player.seekTo(status.currentTime + 30)} // s
        >
          +30s
        </Button>
      </Box>
    </Box>
  );
};

export { Audio };
