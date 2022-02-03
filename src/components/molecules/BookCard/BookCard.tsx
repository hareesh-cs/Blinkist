/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/require-default-props */
/* eslint-disable @typescript-eslint/ban-types */
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
import { FiMoreHorizontal } from 'react-icons/fi';
import ProgressBar from '../../atoms/ProgressBar/ProgressBar';
import ShowIcon from '../../atoms/Icons/showIcon';
import iconPath from '../../atoms/Icons/iconPath';
import { AddToLib } from '../AddToLib/AddToLib';

interface BookCardProps {
  id?: number;
  image: string;
  title: string;
  author: string;
  time: string;
  reads?: string;
  status?: boolean;
  progress?: number;
}
function BookCard({
  image,
  reads,
  title,
  author,
  time,
  status,
  progress,
}: BookCardProps) {
  const CardContentStyling: SxProps = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    margin: 0,
    padding: 0,
  };
  return (
    <Card sx={{ height: '466px', width: '284px' }} data-testid="bookCard">
      <CardMedia component="img" src={image} alt="Book Image" height="282px" />
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
            <Grid item xs={7.5} sx={{ display: 'flex', alignItems: 'center' }}>
              <ShowIcon
                width="18"
                height="18"
                viewBox="0 0 18 18"
                d={iconPath.timeIcon}
              />
              <Typography
                variant="caption3"
                paddingLeft="0.5%"
                color="textColors.textColor3"
              >
                {time}-minute read
              </Typography>
            </Grid>
            {reads !== undefined && reads !== null ? (
              <Grid item xs sx={{ display: 'flex', alignItems: 'center' }}>
                <ShowIcon
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  d={iconPath.personIcon}
                />
                <Typography
                  variant="caption3"
                  paddingLeft="0.5%"
                  color="textColors.textColor3"
                >
                  {reads}k reads
                </Typography>
              </Grid>
            ) : null}
            {status !== undefined && status === true ? (
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
      {status && <AddToLib />}
      <Grid container padding="0px" top="55px" position="relative">
        <ProgressBar progress={progress} />
      </Grid>
    </Card>
  );
}
export default BookCard;
