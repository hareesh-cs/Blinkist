import { Grid, Typography } from '@mui/material';
import { styled } from '@mui/system';

function SiteMap() {
  const StyledGrid = styled(Grid)({
    padding: '5px',
  });
  return (
    <Grid
      container
      sx={{ height: '229x', width: '546px', color: 'textColors.textColor3' }}
    >
      <StyledGrid item>
        <Typography variant="caption">
          &copy; Blinkist 2021 Sitemap |
        </Typography>
      </StyledGrid>
      <StyledGrid item>
        <Typography variant="caption"> Imprint |</Typography>
      </StyledGrid>

      <StyledGrid item>
        <Typography variant="caption"> Terms of Service |</Typography>
      </StyledGrid>
      <StyledGrid item>
        <Typography variant="caption"> Privacy Policies </Typography>
      </StyledGrid>
    </Grid>
  );
}

export default SiteMap;
