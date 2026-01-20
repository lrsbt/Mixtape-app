import { useState } from "react";
import { useAudioPlayerStatus } from "expo-audio";

import { formatTime } from "@app/utils";
import { useLists, useMyMix } from "@app/utils/hooks";
import { Box, Button, Text } from "@app/components";

const Audio = () => {
  const [selectedListId, setSelectedListId] = useState(1);
  const { player, token, isLoaded } = useMyMix(selectedListId);
  const { lists } = useLists();

  const status = useAudioPlayerStatus(player);

  if (!token || !isLoaded || !status) return <Text>Error loading Tape</Text>;

  const isPlaying = !!status.playing;

  const Lists = () => {
    if (!lists) return;

    return lists.map((list) => {
      return (
        <Button
          variant="outline"
          size="sm"
          key={list.id}
          onPress={() => setSelectedListId(list.id)}
          marginBottom={5}
        >
          {list.name}
        </Button>
      );
    });
  };

  return (
    <Box>
      <Box marginBottom={24}>
        <Text>Lists</Text>
        <Lists />
      </Box>

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
