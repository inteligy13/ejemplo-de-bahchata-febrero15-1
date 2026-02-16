import React from 'react';
import { Heart, Music, Flame, Users, Sparkles, MoveRight } from 'lucide-react';

interface IconProps {
  name: 'heart' | 'music' | 'flame' | 'users' | 'sparkles' | 'arrow-right';
  className?: string;
  size?: number;
}

export const Icon: React.FC<IconProps> = ({ name, className = "", size = 24 }) => {
  switch (name) {
    case 'heart': return <Heart className={className} size={size} />;
    case 'music': return <Music className={className} size={size} />;
    case 'flame': return <Flame className={className} size={size} />;
    case 'users': return <Users className={className} size={size} />;
    case 'sparkles': return <Sparkles className={className} size={size} />;
    case 'arrow-right': return <MoveRight className={className} size={size} />;
    default: return null;
  }
};