/* eslint-disable comma-dangle */
import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import { Box, styled, Typography } from '@mui/material';
import axios from 'axios';

const StyledBox = styled(Box)`
  width: 284px;
  height: 52px;
  display: flex;
  align-items: center;
  color: blue;
  border: 1px solid #e1ecfc;
  box-sizing: border-box;
  border-radius: 8px;
  background: #ffffff;
  justify-content: center;
  margin-top: 11px;
  margin-left: -16px;
  cursor: pointer;

  &:hover {
    background-color: blue;
    color: white;
  }
`;

export function AddToLib() {
  const article = {
    id: 2,
    title: 'Beyond Entrepreneurship',
    author: 'Jim Collins & Bill Lazier',
    time: '13',
    reads: '1.9k',
    image: '/Images/2.png',
    status: false,
    progress: 88,
  };
  const addToL = async () => {
    await axios.post('http://localhost:6001/mylibrary', article);
  };

  return (
    <StyledBox onClick={addToL}>
      <AddIcon sx={{ pr: 2 }} />
      <Typography fontSize="16px" fontFamily="Cera Pro" data-testid="AddToLib">
        Add to lib
      </Typography>
    </StyledBox>
  );
}
