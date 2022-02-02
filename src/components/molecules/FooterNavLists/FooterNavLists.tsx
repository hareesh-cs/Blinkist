import { Grid } from '@mui/material';
import React from 'react';
import FooterNavList from '../FooterNavList/FooterNavList';

interface FooterNavListsProps {
  titles: Array<string>;
  itemLists: Array<Array<string>>;
}

function FooterNavLists({ titles, itemLists }: FooterNavListsProps) {
  return (
    <Grid container sx={{ height: '224px', marginLeft: '10%' }}>
      {itemLists?.map((items, index) => (
        <Grid item xs sx={{ margin: '0px 0px' }}>
          <FooterNavList title={titles[index]} items={items} />
        </Grid>
      ))}
    </Grid>
  );
}
export default FooterNavLists;
