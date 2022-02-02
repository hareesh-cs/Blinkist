/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/require-default-props */
/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable global-require */
/* eslint-disable import/no-unresolved */
import React from 'react';
import {
  Button,
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
import Add from '../../atoms/Icons/Add';

interface BookCardProps {
  imagePath: string;
  title?: string;
  author?: string;
  readTime?: string;
  reads?: string;
  owned?: boolean;
  percentComplete?: number;
}
function BookCard({
  imagePath,
  title,
  author,
  readTime,
  reads,
  owned,
  percentComplete,
}: BookCardProps) {
  const CardContentStyling: SxProps = {
    display: 'flex',
    flexDirection: 'column',
    margin: 0,
    padding: 0,
  };
  const ButtonStyling: SxProps = {
    position: 'relative',
    top: '10px',
    width: '100%',
    height: '11%',
    color: 'primary.main',
    borderColor: '#e1ecfc',
    '&:hover': {
      backgroundColor: 'primary.main',
      alignItems: 'center',
      color: 'white',
      path: {
        fill: 'white',
      },
    },
  };
  return (
    <ThemeProvider theme={theme}>
      <Card sx={{ height: '466px', width: '284px' }} data-testid="bookCard">
        <CardMedia
          component="img"
          src={imagePath}
          alt="Book Image"
          height="282px"
        />
        <CardContent sx={CardContentStyling}>
          <Grid container direction="column" padding="0" margin="0">
            <Typography variant="subtitle2" margin="5% 0px 0px">
              {title}
            </Typography>
            <Typography
              variant="body1"
              paddingTop="5%"
              sx={{ color: 'textColors.textColor3' }}
            >
              {author}
            </Typography>
            <Grid
              container
              justifyContent="space-between"
              alignContent="start"
              paddingTop="5%"
            >
              <Grid item xs={7.5}>
                <Time />
                <Typography
                  variant="caption3"
                  paddingLeft="0.5%"
                  color="textColors.textColor3"
                >
                  {readTime}-minute read
                </Typography>
              </Grid>
              {reads !== undefined && reads !== null ? (
                <Grid item xs>
                  <Person />
                  <Typography
                    variant="caption3"
                    paddingLeft="0.5%"
                    color="textColors.textColor3"
                  >
                    {reads}k reads
                  </Typography>
                </Grid>
              ) : null}
              {owned !== undefined && owned === true ? (
                <Grid
                  container
                  justifyContent="end"
                  marginRight="5%"
                  marginTop="5%"
                >
                  <FiMoreHorizontal fontSize="medium" />
                </Grid>
              ) : null}
            </Grid>
          </Grid>
        </CardContent>
        {owned === true && owned !== undefined ? (
          <Grid container padding="0px" top="15px" position="relative">
            <ProgressBar percentComplete={percentComplete} />
          </Grid>
        ) : (
          <Button variant="outlined" sx={ButtonStyling}>
            {Add}
            <Typography variant="body1" padding="4px 0px 0px 4px">
              Add to Library
            </Typography>
          </Button>
        )}
      </Card>
    </ThemeProvider>
  );
}
export default BookCard;
