/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable global-require */
/* eslint-disable import/no-unresolved */
import React from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  SxProps,
  Typography,
} from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { FiMoreHorizontal } from 'react-icons/fi';
import Time from '../../atoms/Icons/Time';
import ProgressBar from '../../atoms/ProgressBar/ProgressBar';
import Person from '../../atoms/Icons/PersonIcon';
import theme from '../../../Theme/theme';

const img = require('../../atoms/Images/2.png');

function BookCard() {
  const CardContentStyling: SxProps = {
    display: 'flex',
    flexDirection: 'column',
    margin: 0,
    padding: 0,
  };
  return (
    <ThemeProvider theme={theme}>
      <Card sx={{ height: '466px', width: '284px' }}>
        <CardMedia component="img" height="282px" image={img} alt="Error" />
        <CardContent sx={CardContentStyling}>
          <Grid container direction="column" padding="0" margin="0">
            <Typography variant="subtitle2" margin="5% 0px 0px">
              Bring Your Human to Work
            </Typography>
            <Typography
              variant="body1"
              paddingTop="5%"
              sx={{ color: 'textColors.textColor3' }}
            >
              Erica Keswin
            </Typography>
          </Grid>
          <Grid
            container
            justifyContent="space-between"
            alignContent="start"
            paddingTop="5%"
          >
            <Grid item xs={7.5}>
              <Grid container alignItems="center" justifyContent="flex-start">
                <Time />
                <Typography
                  variant="caption3"
                  paddingLeft="0.5%"
                  color="textColors.textColor3"
                >
                  13-minute read
                </Typography>
              </Grid>
            </Grid>
            <Grid item xs>
              <Person />
              <Typography
                variant="caption3"
                paddingLeft="0.5%"
                color="textColors.textColor3"
              >
                1.9k reads
              </Typography>
            </Grid>
            <Grid
              container
              justifyContent="end"
              marginRight="5%"
              marginTop="5%"
            >
              <FiMoreHorizontal fontSize="medium" />
            </Grid>
          </Grid>
          <Grid container padding="0px" top="15px" position="relative">
            <ProgressBar />
          </Grid>
        </CardContent>
      </Card>
    </ThemeProvider>
  );
}
export default BookCard;
