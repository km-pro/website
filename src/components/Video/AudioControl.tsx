import { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Volume1 } from 'lucide-react';

interface AudioControlProps {
  volume: number;
  isMuted: boolean;
  onVolumeChange: (volume: number) => void;
  onMuteToggle: () => void;
  className?: string;
}

export const AudioControl = ({ volume, isMuted, onVolumeChange, onMuteToggle, className = '' }: AudioControlProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [previousVolume, setPreviousVolume] = useState(volume);
  const controlRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (controlRef.current && !controlRef.current.contains(event.target as Node)) {
        setIsExpanded(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleVolumeIconClick = () => {
    if (volume === 0 || isMuted) {
      onVolumeChange(previousVolume);
      onMuteToggle();
    } else {
      setPreviousVolume(volume);
      onVolumeChange(0);
      onMuteToggle();
    }
  };

  const getVolumeIcon = () => {
    if (isMuted || volume === 0) return <VolumeX className="w-4 h-4 text-white" />;
    if (volume < 0.5) return <Volume1 className="w-4 h-4 text-white" />;
    return <Volume2 className="w-4 h-4 text-white" />;
  };

  return (
    <div
      ref={controlRef}
      className={`relative ${className}`}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      <div
        className={`
          flex items-center bg-white/20 rounded-full overflow-hidden
          transition-all duration-300 ease-in-out
          ${isExpanded ? 'w-36' : 'w-10'}
        `}
      >
        <button
          onClick={handleVolumeIconClick}
          className="flex-shrink-0 p-2 hover:bg-white/30 transition-colors focus:outline-none focus:ring-2 focus:ring-white/40"
          aria-label={isMuted ? 'Unmute' : 'Mute'}
          title={isMuted ? 'Unmute' : 'Mute'}
        >
          {getVolumeIcon()}
        </button>

        <div
          className={`
            flex flex-grow px-3 transition-all duration-300 h-full align-middle
            ${isExpanded ? 'opacity-100 w-24' : 'opacity-0 w-0'}
          `}
        >
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={isMuted ? 0 : volume}
            onChange={(e) => {
              const newVolume = parseFloat(e.target.value);
              onVolumeChange(newVolume);
              if (isMuted && newVolume > 0) {
                onMuteToggle();
              }
            }}
            className="
              w-full h-1 bg-white/30 rounded-lg appearance-none cursor-pointer
              [&::-webkit-slider-thumb]:appearance-none
              [&::-webkit-slider-thumb]:w-3
              [&::-webkit-slider-thumb]:h-3
              [&::-webkit-slider-thumb]:rounded-full
              [&::-webkit-slider-thumb]:bg-white
              [&::-webkit-slider-thumb]:cursor-pointer
              [&::-webkit-slider-thumb]:hover:scale-110
              [&::-webkit-slider-thumb]:transition-transform
              [&::-moz-range-thumb]:w-3
              [&::-moz-range-thumb]:h-3
              [&::-moz-range-thumb]:rounded-full
              [&::-moz-range-thumb]:bg-white
              [&::-moz-range-thumb]:border-none
              [&::-moz-range-thumb]:cursor-pointer
              [&::-moz-range-thumb]:hover:scale-110
              [&::-moz-range-thumb]:transition-transform
            "
            aria-label="Volume"
          />
        </div>
      </div>
    </div>
  );
};
