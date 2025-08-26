import { useAudioPlayer, useAudioPlayerStatus } from "expo-audio";
import { API_URL } from "@app/constants/config";
import { useMe, useProbeAudio } from "@app/utils/hooks";

export const useMyMix = () => {
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
