import { Play } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface Props {
  video: File;
}

export default function MediaVideo({ video }: Props) {
  const [isPaused, setIsPaused] = useState(true);
  const fileUrl = URL.createObjectURL(video);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const videoElement = videoRef.current;

    videoElement?.addEventListener("play", onPlay);
    videoElement?.addEventListener("pause", onPaused);

    return () => {
      videoElement?.removeEventListener("play", onPlay);
      videoElement?.removeEventListener("pause", onPaused);
    };
  });

  return (
    <div className="relative rounded-lg overflow-hidden">
      <div onClick={onTogglePlay} className="aspect-video bg-gray-200 relative">
        <video ref={videoRef}>
          <source src={fileUrl} type={video.type} />
        </video>
        {isPaused && (
          <>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-12 h-12 bg-white/80 rounded-full flex items-center justify-center">
                <Play className="w-6 h-6 text-gray-800" />
              </div>
            </div>
            <div className="absolute top-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
              1:00 M
            </div>
          </>
        )}
      </div>
      {isPaused && (
        <div className="absolute bottom-0 inset-x-0 bg-black/10 text-white text-center py-2 text-sm">
          Click to Play Video attachment
        </div>
      )}
    </div>
  );

  function onPlay() {
    setIsPaused(false);
  }
  function onPaused() {
    setIsPaused(true);
  }

  async function onTogglePlay() {
    if (!videoRef.current) {
      return;
    }

    if (videoRef.current.paused) {
      await videoRef.current.play();
      setIsPaused(false);
    } else {
      await videoRef.current.pause();
      setIsPaused(true);
    }
  }
}
