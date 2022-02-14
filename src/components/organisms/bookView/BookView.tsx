/* eslint-disable @typescript-eslint/no-var-requires */
import {
  Box,
  Button,
  Container,
  Stack,
  styled,
  Typography,
} from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
import ShowIcon from '../../atoms/Icons/showIcon';
import iconPath from '../../atoms/Icons/iconPath';
import BookInfo from '../../molecules/bookInfo/BookInfo';
// import { AddToFinish } from '../../../actions/AddToFinish';

const img = require('../../atoms/Images/2.png');

const StyledTypography = styled(Typography)`
  font-family: Cera Pro;
`;
const StyledButton = styled(Button)`
  height: 44;
  width: 178;
  color: #03314b;
  borderradius: 4px;
  fontsize: 16px;
  background-color: #2ce080;

  &:hover {
    background-color: green;
  }
`;

function BookView() {
  return (
    <div>
      <Container sx={{ mt: '80px' }}>
        <Box
          sx={{
            width: 180,
            height: 20,
            mb: '40px',
            ml: 4,
          }}
        >
          <StyledTypography
            variant="body2"
            fontSize="16px"
            sx={{ color: '#03314B' }}
          >
            Get the key ideas from
          </StyledTypography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            mb: '70px',
            ml: 4,
          }}
        >
          <Box>
            <Box sx={{ width: 496, height: 45, mb: '24px' }}>
              <StyledTypography
                variant="h1"
                fontSize="36px"
                fontWeight={700}
                sx={{ color: '#03314B' }}
              >
                Beyond Entrepreneurship 2.0
              </StyledTypography>
            </Box>
            <Box sx={{ width: 519, height: 25, mb: '24px' }}>
              <StyledTypography
                variant="subtitle3"
                fontSize="20px"
                fontWeight={400}
                sx={{ color: '#03314B' }}
              >
                Turning Your Business into an Enduring Great Company
              </StyledTypography>
            </Box>
            <Box sx={{ width: 219, height: 20, mb: '19px' }}>
              <StyledTypography
                variant="body1"
                fontSize="16px"
                fontWeight={400}
                sx={{ color: '#6D787E' }}
              >
                By Jim Collins and Bill Lazier
              </StyledTypography>
            </Box>
            <Box
              sx={{
                width: 128,
                height: 24,
                display: 'flex',
                alignItems: 'center',
                mb: '90px',
              }}
            >
              <ShowIcon
                width="18"
                height="18"
                viewBox="0 0 18 18"
                d={iconPath.timeIcon}
              />
              <StyledTypography
                variant="caption2"
                fontSize="14px"
                fontWeight={400}
                sx={{ color: '#6D787E' }}
              >
                15-minute read
              </StyledTypography>
            </Box>
            <Stack direction="row" spacing={6} sx={{ ml: 264, mt: 464 }}>
              <Button
                sx={{
                  border: '1px solid #042330',
                  height: 44,
                  width: 122,
                  color: '#22C870',
                  borderRadius: '4px',
                  fontSize: '16px',
                }}
              >
                Read Now
              </Button>
              <Link to="/" style={{ textDecoration: 'none' }}>
                <StyledButton>Finished Reading</StyledButton>
              </Link>
              <Box sx={{ display: 'inline-flex', alignItems: 'center' }}>
                <Button sx={{ fontSize: '16px', color: '#03314B' }}>
                  Send to Kindle
                </Button>
                <ShowIcon
                  width="17"
                  height="12"
                  viewBox="0 0 13 18"
                  d={iconPath.rightIcon}
                />
              </Box>
            </Stack>
            <Box
              sx={{
                width: 600,
                height: 100,
                ml: -5,
                paddingBottom: 10,
              }}
            >
              <BookInfo />
            </Box>
          </Box>
          <Box>
            <img src={img} alt="book pic" width={304} height={304} />
          </Box>
        </Box>
      </Container>
    </div>
  );
}

export default BookView;
