/* eslint-disable react/function-component-definition */
/* eslint-disable react/require-default-props */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-named-default */
import {
  default as KeyboardArrowDownIcon,
  default as KeyboardArrowUpIcon,
} from '@mui/icons-material/KeyboardArrowDown';
import { Divider, Typography } from '@mui/material';
import { styled } from '@mui/system';
import React, { MouseEventHandler } from 'react';

interface NavItemsProps {
  title?: string;
  dropdown?: boolean;
  onClick?: MouseEventHandler;
  isDrawerOpen?: boolean;
}

const NavItems: React.FC<NavItemsProps> = ({
  title,
  dropdown,
  onClick,
  isDrawerOpen,
}) => {
  const StyledDiv = styled('div')({
    display: 'flex',
    userSelect: 'none',
    ':hover': {
      cursor: dropdown === true ? 'pointer' : 'auto',
    },
  });
  const arrowIcon =
    isDrawerOpen === true ? (
      <KeyboardArrowUpIcon fontSize="small" data-testid="icon" />
    ) : (
      <KeyboardArrowDownIcon fontSize="small" data-testid="icon" />
    );
  const showArrowIcon = dropdown === true ? arrowIcon : null;
  return (
    <div>
      <StyledDiv onClick={onClick}>
        <Typography variant="body1">{title}</Typography>
        {showArrowIcon}
      </StyledDiv>
      {isDrawerOpen === true ? <Divider sx={{ height: '1px' }} light /> : null}
    </div>
  );
};

export default NavItems;
