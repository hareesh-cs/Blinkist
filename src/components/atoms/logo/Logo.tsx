/* eslint-disable @typescript-eslint/no-var-requires */
import { styled } from '@mui/material';
import React from 'react';

const logo = require('../Images/logo.png');

function Logo() {
  const Styledlogo = styled('img')({
    '&:hover': {
      cursor: 'pointer',
    },
  });
  return (
    <div>
      <Styledlogo src={logo} alt="Blinkist Logo" width="99.1px" height="24px" />
    </div>
  );
}

export default Logo;
