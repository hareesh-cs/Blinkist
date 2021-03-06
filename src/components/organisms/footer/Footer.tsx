/* eslint-disable object-curly-newline */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable @typescript-eslint/no-var-requires */
import { Box, styled, Typography, Container } from '@mui/material';

const logo = require('../../atoms/Images/logo.png');

export const StyledTypography = styled(Typography)`
  line-height: 2;
  font-size: 16;
  font-family: Cera Pro;
  color: #6d787e;
`;

function Footer() {
  return (
    <Box sx={{ bgcolor: '#F1F6F4' }} data-testid="footer">
      <Container sx={{ bgcolor: '#F1F6F4', mt: '111px' }}>
        <Box
          sx={{
            bgcolor: '#F1F6F4',
            pt: '38px',
            height: 300,
            pb: '38px',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              ml: 10,
              mr: 6,
            }}
          >
            <Box>
              <Box sx={{ width: '99px', height: '24px', pb: '32px' }}>
                <img
                  src={logo}
                  alt="Blinkist logo"
                  width="99.1px"
                  height="24px"
                />
              </Box>
              <Box sx={{ pb: '132px' }}>
                <Typography
                  variant="subtitle1"
                  sx={{ fontSize: 24, color: '#0365F2', fontWeight: 500 }}
                >
                  Big ideas in small packages{' '}
                </Typography>
                <Typography
                  variant="subtitle1"
                  sx={{ fontSize: 24, color: '#0365F2', fontWeight: 500 }}
                >
                  Start learning now
                </Typography>
              </Box>
            </Box>
            <Box>
              <StyledTypography sx={{ color: 'black' }}>
                <strong>Editorial</strong>
              </StyledTypography>
              <StyledTypography>Book lists</StyledTypography>
              <StyledTypography>What is Nonfiction?</StyledTypography>
              <StyledTypography>What to Read Next?</StyledTypography>
              <StyledTypography>Benefits of Reading</StyledTypography>
            </Box>
            <Box sx={{ pl: 2.7 }}>
              <StyledTypography sx={{ color: 'black' }}>
                <strong>Useful links</strong>
              </StyledTypography>
              <StyledTypography>Pricing</StyledTypography>
              <StyledTypography>Blinkist Business</StyledTypography>
              <StyledTypography>Gift Cards</StyledTypography>
              <StyledTypography>Benefits of Reading</StyledTypography>
              <StyledTypography>Blinkist Magazine</StyledTypography>
              <StyledTypography>Contact & Help</StyledTypography>
            </Box>
            <Box>
              <StyledTypography sx={{ color: 'black' }}>
                <strong>Company</strong>
              </StyledTypography>
              <StyledTypography>About</StyledTypography>
              <StyledTypography>Careers</StyledTypography>
              <StyledTypography>Partners</StyledTypography>
              <StyledTypography>Code of Conduct</StyledTypography>
            </Box>
          </Box>
          <Box sx={{ display: 'flex', ml: 8 }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              &copy;
              <Typography sx={{ color: '#6D787E', pl: '2.5px' }}>
                Blinkist 2021 Sitemap
              </Typography>
            </Box>
            <Typography sx={{ ml: 2, color: '#6D787E' }}>|</Typography>
            <Typography sx={{ ml: 2, color: '#6D787E' }}>Imprint</Typography>
            <Typography sx={{ ml: 2, color: '#6D787E' }}>|</Typography>
            <Typography sx={{ ml: 2, color: '#6D787E' }}>
              Terms of services
            </Typography>
            <Typography sx={{ ml: 2, color: '#6D787E' }}>|</Typography>
            <Typography sx={{ ml: 2, color: '#6D787E' }}>
              Privacy Polices
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
