/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable object-curly-newline */
/* eslint-disable react/require-default-props */
import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Container, styled } from '@mui/material';
import { useState } from 'react';
import { BookList } from '../bookList/BookList';
import Finished from '../finished/Finished';
import { TabPanel } from '../../molecules/tabPanel/TabPanel';

const StyledTab = styled(Tab)`
  text-transform: none;
  font-size: 18px;
  width: 40%;
  font-family: Cera Pro;
  color: black;
`;
const StyledBox = styled(Box)`
  display: flex;
  justify-content: flex-start;
  width: 340px;
`;

export default function BookState() {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Container>
      <Box sx={{ ml: 10, mt: '70px' }} data-testid="bookstate">
        <Box sx={{ width: 300, height: 45, mb: '60px' }}>
          <Typography
            variant="h1"
            sx={{
              fontSize: 36,
              fontWeight: 700,
              fontFamily: 'Cera Pro',
              ml: 5,
            }}
          >
            My Library
          </Typography>
        </Box>
        <Box sx={{ width: '90%', ml: 2.5 }}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs
              value={value}
              onChange={handleChange}
              sx={{ maxWidth: '921px' }}
              textColor="primary"
              indicatorColor="primary"
              data-testid="tabs"
            >
              <StyledTab
                disableRipple
                label={
                  <StyledBox>
                    <Typography variant="subtitle2">
                      Currently reading
                    </Typography>
                  </StyledBox>
                }
              />
              <StyledTab
                disableRipple
                label={
                  <StyledBox>
                    <Typography variant="subtitle2">Finished</Typography>
                  </StyledBox>
                }
              />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            {value === 0 && <BookList />}
          </TabPanel>
          <TabPanel value={value} index={1}>
            {value === 1 && <Finished />}
          </TabPanel>
        </Box>
      </Box>
    </Container>
  );
}
