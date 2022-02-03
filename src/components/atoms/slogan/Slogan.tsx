/* eslint-disable react/require-default-props */
import { Typography } from '@mui/material';
import { styled } from '@mui/system';
import React from 'react';

interface SloganLogoProps {
  title?: string;
}

function SloganLogo({ title }: SloganLogoProps) {
  const StyledDiv = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    height: '120px',
    padding: '0px',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    img: {
      width: '99.1px',
      height: '24px',
    },
    boxSizing: 'border-box',
  });

  return (
    <StyledDiv>
      <Typography
        variant="subtitle1"
        color="secondary.color"
        sx={{ width: '378px' }}
      >
        {title}
      </Typography>
    </StyledDiv>
  );
}
export default SloganLogo;
