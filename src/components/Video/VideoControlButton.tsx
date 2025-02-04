import React from 'react';
import type { LucideIcon } from 'lucide-react';

interface VideoControlButtonProps {
  icon: LucideIcon;
  activeIcon?: LucideIcon;
  isActive?: boolean;
  onClick: () => void;
  label: string;
  className?: string;
}

export const VideoControlButton = ({
  icon: Icon,
  activeIcon: ActiveIcon,
  isActive = false,
  onClick,
  label,
  className = '',
}: VideoControlButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`
        p-2 rounded-full bg-white/20 
        hover:bg-white/30 
        transition-colors 
        focus:outline-none focus:ring-2 focus:ring-white/40 
        ${className}
      `}
      aria-label={label}
      title={label}
    >
      {ActiveIcon && isActive ? <ActiveIcon className="w-4 h-4 text-white" /> : <Icon className="w-4 h-4 text-white" />}
    </button>
  );
};
