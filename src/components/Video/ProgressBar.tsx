import React, { useRef, useState, useCallback, useEffect } from 'react';

interface ProgressBarProps {
  progress: number;
  duration: number;
  onSeek: (time: number) => void;
}

export const ProgressBar = ({ progress, duration, onSeek }: ProgressBarProps) => {
  const progressBarRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [hoverPosition, setHoverPosition] = useState<number | null>(null);

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const calculatePosition = useCallback((clientX: number) => {
    if (!progressBarRef.current) return 0;

    const rect = progressBarRef.current.getBoundingClientRect();
    const position = (clientX - rect.left) / rect.width;
    return Math.max(0, Math.min(1, position));
  }, []);

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!isDragging) return;

      const position = calculatePosition(e.clientX);
      onSeek(position * duration);
    },
    [isDragging, calculatePosition, duration, onSeek],
  );

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, handleMouseMove, handleMouseUp]);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    const position = calculatePosition(e.clientX);
    onSeek(position * duration);
  };

  const handleMouseHover = (e: React.MouseEvent) => {
    const rect = progressBarRef.current?.getBoundingClientRect();
    if (!rect) return;

    const position = calculatePosition(e.clientX);
    setHoverPosition(position);
  };

  const handleMouseLeave = () => {
    setHoverPosition(null);
  };

  return (
    <div className="relative group mb-2">
      <div
        ref={progressBarRef}
        className="h-2 hover:h-2 bg-white/30 cursor-pointer transition-all duration-200"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseHover}
        onMouseLeave={handleMouseLeave}
      >
        <div
          className="absolute top-0 left-0 h-full bg-blue-600 transition-all duration-100 rounded-r-full"
          style={{ width: `${progress}%` }}
        >
          <div
            className={`
              absolute right-0 top-1/2 -translate-y-1/2 
              w-3 h-3 bg-white rounded-full 
              transform scale-0 group-hover:scale-100
              transition-transform duration-200
              shadow-md
              ${isDragging ? 'scale-100' : ''}
            `}
          />
        </div>
      </div>

      {hoverPosition !== null && (
        <div
          className="absolute bottom-full mb-2 px-2 py-1 bg-black/80 text-white text-xs rounded transform -translate-x-1/2"
          style={{ left: `${hoverPosition * 100}%` }}
        >
          {formatTime(hoverPosition * duration)}
        </div>
      )}
    </div>
  );
};
