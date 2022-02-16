/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/require-default-props */
import React from 'react';
import Card from '@mui/material/Card';
import {
  Box,
  CardMedia,
  Grid,
  Typography,
  CardContent,
  IconButton,
} from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Link } from 'react-router-dom';
import ShowIcon from '../../atoms/Icons/showIcon';
import iconPath from '../../atoms/Icons/iconPath';
import { AddToLib } from '../AddToLib/AddToLib';
import ProgressBar from '../../atoms/ProgressBar/ProgressBar';

export interface BookCardprops {
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
}: BookCardprops) {
  return (
    <Grid item xs={4}>
      <Card
        data-testid="bookcard"
        sx={{
          width: '284px',
          height: '466px',
          borderRadius: 2,
          border: '1 solid #E1ECFC',
          background: '#FFFFFF',
        }}
      >
        <Link data-testId="bookLink" to="/Entrepreneurship/BookDetails">
          <CardMedia
            component="img"
            image={image}
            alt="book pic"
            height="292px"
            width="294.1px"
          />
        </Link>
        <CardContent>
          <Typography
            sx={{
              width: 225,
              height: 23,
              fontFamily: 'Cera Pro',
              fontWeight: 'bold',
              fontSize: 18,
              textAlign: 'left',
            }}
            variant="subtitle1"
            color="#03314B"
          >
            {title}
          </Typography>

          <Typography
            sx={{
              height: 20,
              width: 230,
              fontFamily: 'Cera Pro',
              fontSize: 16,
              textAlign: 'left',
              mt: 2,
            }}
            color="#6D787E"
            variant="body1"
          >
            {author}
          </Typography>
          <br />
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              height: 18,
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <ShowIcon
                width="18"
                height="18"
                viewBox="0 0 18 18"
                d={iconPath.timeIcon}
              />
              <Typography
                sx={{ fontSize: 14, fontFamily: 'Cera Pro' }}
                variant="caption2"
                color="#6D787E"
              >
                {time}-minute read
              </Typography>
            </Box>
            {reads && (
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <ShowIcon
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  d={iconPath.personIcon}
                />
                <Typography
                  sx={{ fontSize: 14, fontFamily: 'Cera Pro' }}
                  variant="caption2"
                  color="#6D787E"
                >
                  {reads}
                </Typography>
              </Box>
            )}
          </Box>
          {!status && (
            <Box
              sx={{
                display: 'flex',
                float: 'right',
                height: 4,
                width: 24,
                color: '#042330',
                mt: 3,
              }}
            >
              <IconButton>
                <strong>
                  <MoreHorizIcon fontSize="medium" />
                </strong>
              </IconButton>
            </Box>
          )}
          {status && <AddToLib />}
        </CardContent>
        <Box
          sx={{
            width: 300,
            height: 15,
            bgcolor: '#F1F6F4',
            mt: 4,
            boxSizing: 'border-box',
          }}
        >
          <ProgressBar progress={progress} />
        </Box>
      </Card>
    </Grid>
  );
}

export default BookCard;
