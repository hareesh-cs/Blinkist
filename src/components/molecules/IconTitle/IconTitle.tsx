/* eslint-disable react/function-component-definition */
/* eslint-disable react/require-default-props */
import { Grid, ThemeProvider, Typography } from '@mui/material';
import React, { MouseEventHandler } from 'react';
import theme from '../../../Theme/theme';

interface IconTitleProps {
  icon?: any;
  title?: string;
  onClick: MouseEventHandler;
}

const IconTitle = ({ icon, title, onClick }: IconTitleProps) => {
  const style = {
    '&:hover': {
      cursor: 'pointer',
      color: 'secondary.color',
      path: {
        fill: 'blue',
      },
      '.text': {
        userSelect: 'none',
      },
    },
  };
  return (
    <ThemeProvider theme={theme}>
      <Grid
        container
        spacing={theme.spacing(2)}
        alignItems="center"
        sx={style}
        onClick={onClick}
      >
        <Grid item className="icon">
          {icon}
        </Grid>
        <Grid item>
          <Typography variant="body2" className="text">
            {title}
          </Typography>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default IconTitle;
