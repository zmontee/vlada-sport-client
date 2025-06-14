import React, { useState, useCallback } from "react";
import ReactPlayer from "react-player";
import styles from "./_styles.module.scss";

type VideoPlayerProps = {
  url: string;
  onPlay?: () => void;
  onPause?: () => void;
  onEnded?: () => void;
  onProgress?: (state: { played: number; playedSeconds: number }) => void;
  onReady?: () => void;
};

const VideoPlayer: React.FC<VideoPlayerProps> = ({
  url,
  onPlay,
  onPause,
  onEnded,
  onProgress,
  onReady,
}) => {
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(0.8);
  const [played, setPlayed] = useState(0);

  const handlePlay = useCallback(() => {
    setPlaying(true);
    onPlay?.();
  }, [onPlay]);

  const handlePause = useCallback(() => {
    setPlaying(false);
    onPause?.();
  }, [onPause]);

  const handleEnded = useCallback(() => {
    setPlaying(false);
    onEnded?.();
  }, [onEnded]);

  const handleProgress = useCallback(
    (state: { played: number; playedSeconds: number }) => {
      setPlayed(state.played);
      onProgress?.(state);
    },
    [onProgress],
  );

  const handleReady = useCallback(() => {
    onReady?.();
  }, [onReady]);

  return (
    <div className={styles.player_wrapper}>
      <ReactPlayer
        url={url}
        className={styles.react_player}
        width="100%"
        height="100%"
        playing={playing}
        volume={volume}
        onPlay={handlePlay}
        onPause={handlePause}
        onEnded={handleEnded}
        onProgress={handleProgress}
        onReady={handleReady}
        controls
        config={{
          vimeo: {
            playerOptions: {
              colors: ["000000", "007B5E", "FFFFFF", "000000"],
              vimeo_logo: false,
              byline: false,
              title: false,
              portrait: false,
              badge: false,
            },
          },
        }}
      />
    </div>
  );
};

export default VideoPlayer;
