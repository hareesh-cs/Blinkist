import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import { Box, styled, Typography } from '@mui/material';

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
  return (
    <StyledBox>
      <AddIcon sx={{ pr: 2 }} />
      <Typography fontSize="16px" fontFamily="Cera Pro">
        Add to lib
      </Typography>
    </StyledBox>
  );
}
