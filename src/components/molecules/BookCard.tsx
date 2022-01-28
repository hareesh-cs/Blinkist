/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable global-require */
/* eslint-disable import/no-unresolved */
import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Time from '../atoms/Icons/Time';
import ProgressBar from '../atoms/ProgressBar/ProgressBar';
import Person from '../atoms/Icons/PersonIcon';

const Img = require('../atoms/Images/test.png');

export default function MediaCard() {
  return (
    <Card sx={{ maxWidth: 284, maxHeight: 466 }}>
      <CardMedia component="img" height="292" image={Img} alt="Error" />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          Bring Your Human to Work
        </Typography>
        <Typography color="text.secondary">Erica Keswin</Typography>
      </CardContent>
      <CardActions>
        <Time />
        <Typography>13-minute read</Typography>
        <Person />
        <Typography>1.9k reads</Typography>
      </CardActions>
      <ProgressBar />
    </Card>
  );
}
