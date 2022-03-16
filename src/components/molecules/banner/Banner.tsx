/* eslint-disable object-curly-newline */
/* eslint-disable @typescript-eslint/no-var-requires */
import { Box, Container, styled, Typography } from '@mui/material';

const bannerimg = require('../../atoms/Images/banner.png');

const StyledTypography = styled(Typography)`
  font-family: Cera Pro;
  font-weight: 700;
  color: #03314b;
  font-size: 36px;
`;

function Banner() {
  return (
    <div>
      <Container sx={{ width: 1145, mt: '52px' }}>
        <Box
          sx={{
            height: 264,
            bgcolor: '#F1F6F4',
            display: 'flex',
            justifyContent: 'space-around',
            mb: '58px',
            ml: 7,
            mr: 10,
          }}
          data-testid="banner"
        >
          <Box>
            <Box
              sx={{
                width: 319,
                height: 90,
                mt: '45px',
                mb: '15px',
              }}
            >
              <StyledTypography variant="h1">
                Explore Books on entrepreneurship
              </StyledTypography>
            </Box>
            <Box sx={{ width: 461, height: 69 }}>
              <Typography
                variant="subtitle2"
                fontSize="18px"
                fontFamily="Cera Pro"
                fontWeight="400"
              >
                Everything you need to know about thriving on a shoestring
                budget, making your first million, and hiring right from the
                start.
              </Typography>
            </Box>
          </Box>
          <Box sx={{ width: 249, height: 230, mt: '17px' }}>
            <img src={bannerimg} alt="Banner-img" height={230} width={249} />
          </Box>
        </Box>
      </Container>
    </div>
  );
}
export default Banner;
