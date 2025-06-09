import { useRef, useState, useEffect } from 'react';
import { Minimize, Maximize, Pause, Play } from 'lucide-react';
import { VideoControlButton } from './Video/VideoControlButton';
import { AudioControl } from './Video/AudioControl';
import { ProgressBar } from './Video/ProgressBar.tsx';

type VideoProps = {
  src: string;
  poster?: string;
  autoplay?: boolean;
  muted?: boolean;
  loop?: boolean;
};

const VideoPlayer = ({ src, poster, autoplay = false, muted = false, loop = false }: VideoProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(muted);
  const [volume, setVolume] = useState(1);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (video.duration) {
      setDuration(video.duration);
    }

    const updateProgress = () => {
      const progress = (video.currentTime / video.duration) * 100;
      setProgress(progress);
      setCurrentTime(video.currentTime);
    };

    const handleLoadedMetadata = () => {
      setDuration(video.duration);
    };

    video.addEventListener('timeupdate', updateProgress);
    video.addEventListener('loadedmetadata', handleLoadedMetadata);

    return () => {
      video.removeEventListener('timeupdate', updateProgress);
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === ' ') {
        event.preventDefault();
        togglePlay();
      } else if (event.key === 'm') {
        toggleMute();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleFullscreenChange = () => {
      setIsFullscreen(document.fullscreenElement === container);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const toggleFullscreen = async () => {
    const container = containerRef.current;
    if (!container) return;

    try {
      if (!isFullscreen) {
        await container.requestFullscreen();
      } else {
        await document.exitFullscreen();
      }
    } catch (error) {
      console.error('Error toggling fullscreen:', error);
    }
  };

  return (
    <div className="relative rounded-lg shadow-lg overflow-hidden bg-black group" ref={containerRef}>
      <video
        ref={videoRef}
        className="w-full aspect-video not-prose"
        poster={poster}
        autoPlay={autoplay}
        muted={muted}
        loop={loop}
        playsInline
      >
        <source src={src} type="video/webm" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
        <ProgressBar
          progress={progress}
          duration={duration}
          onSeek={(time) => {
            if (videoRef.current) {
              videoRef.current.currentTime = time;
            }
          }}
        />

        <div className="px-4 pb-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <VideoControlButton
              icon={Play}
              activeIcon={Pause}
              isActive={isPlaying}
              onClick={togglePlay}
              label={isPlaying ? 'Pause' : 'Play'}
            />

            <AudioControl
              volume={volume}
              isMuted={isMuted}
              onVolumeChange={(newVolume) => {
                setVolume(newVolume);
                if (videoRef.current) {
                  videoRef.current.volume = newVolume;
                }
              }}
              onMuteToggle={toggleMute}
            />

            <div className="text-white text-sm">
              {formatTime(currentTime)} / {formatTime(duration)}
            </div>
          </div>

          <div className="flex items-center gap-4">
            <VideoControlButton
              icon={Maximize}
              activeIcon={Minimize}
              isActive={isFullscreen}
              onClick={toggleFullscreen}
              label="Toggle fullscreen"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
