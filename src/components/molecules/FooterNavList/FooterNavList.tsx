/* eslint-disable react/require-default-props */
import React from 'react';
import { Grid, Typography, ThemeProvider } from '@mui/material';
import theme from '../../../Theme/theme';

interface FooterNavListProps {
  title?: string;
  items?: Array<string>;
}
function FooterNavList({ title, items }: FooterNavListProps) {
  return (
    <ThemeProvider theme={theme}>
      <Grid
        container
        spacing={theme.spacing(2)}
        alignItems="flex-start"
        direction="column"
        width="200px"
      >
        <Grid item>
          <Typography variant="body1" data-testid="titleElement">
            {title}
          </Typography>
        </Grid>
        {items?.map((item) => (
          <Grid item>
            <Typography variant="body2" color="textColors.textColor3">
              {item}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </ThemeProvider>
  );
}
export default FooterNavList;
