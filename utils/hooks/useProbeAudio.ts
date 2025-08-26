import { useState, useEffect } from "react";

export const useProbeAudio = (uri?: string) => {
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
