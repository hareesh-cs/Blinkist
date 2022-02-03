import { Grid } from '@mui/material';
import React from 'react';
import FooterNavLists from '../../molecules/FooterNavLists/FooterNavLists';
import { titles, subtitlesList } from '../../molecules/FooterNavLists/titles';
import SiteMap from '../../atoms/siteMap/SiteMap';
import Slogan from '../../atoms/slogan/Slogan';
import Logo from '../../atoms/logo/Logo';

const slogan = 'Big Ideas in small packages Start Learning now';

function Footer() {
  return (
    <Grid
      container
      sx={{
        backgroundColor: 'backgroundColors.background2',
      }}
      data-testid="footer"
    >
      <Grid
        container
        sx={{
          margin: '38px 18% 108px',
          height: '224px',
          backgroundColor: 'backgroundColors.background2',
        }}
      >
        <Grid item>
          <Grid container>
            <Grid item sx={{ marginRight: '32px' }}>
              <Logo />
              <Slogan title={slogan} />
            </Grid>
            <Grid item>
              <FooterNavLists titles={titles} itemLists={subtitlesList} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <SiteMap />
        </Grid>
      </Grid>
    </Grid>
  );
}
export default Footer;
