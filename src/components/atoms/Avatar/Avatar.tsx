import React from 'react';
import Avatar from '@mui/material/Avatar';

export interface AvatarProps {
  letter: string;
}
function AvatarC({ letter }: AvatarProps) {
  return (
    <Avatar sx={{ bgcolor: '#69A6E3', display: 'flex', alignItems: 'center' }}>
      {letter}
    </Avatar>
  );
}

export default AvatarC;
