/* eslint-disable object-curly-newline */
/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/require-default-props */
import * as React from 'react';
import { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Container, styled } from '@mui/material';
import { TabPanel } from '../../molecules/tabPanel/TabPanel';

const StyledTab = styled(Tab)`
  text-transform: none;
  font-size: 16px;
  width: 32%;
  font-family: Cera Pro;
  color: black;
`;
const StyledBox = styled(Box)`
  display: flex;
  justify-content: flex-start;
  color: black;
`;
export default function BookInfo() {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Container>
      <Box
        sx={{
          borderBottom: 1,
          borderColor: 'divider',
        }}
        data-testid="info"
      >
        <Tabs
          value={value}
          onChange={handleChange}
          sx={{ maxWidth: 700 }}
          indicatorColor="primary"
        >
          <StyledTab
            disableRipple
            label={
              <StyledBox>
                <Typography fontFamily="Cera Pro">Sypnosis</Typography>
              </StyledBox>
            }
          />
          <StyledTab
            disableRipple
            label={
              <StyledBox>
                <Typography fontFamily="Cera Pro">Who is it for?</Typography>
              </StyledBox>
            }
          />
          <StyledTab
            disableRipple
            label={
              <StyledBox>
                <Typography fontFamily="Cera Pro">About the author</Typography>
              </StyledBox>
            }
          />
        </Tabs>
        <Box>
          <TabPanel value={value} index={0}>
            <Typography variant="body2" sx={{ fontFamily: 'Cera Pro' }}>
              Beyond Entrepreneurship 2.0 (2020) updates Jim Collins and Bill
              Lazier’s essential 1992 business handbook, Beyond Entrepreneurship
              for the entrepreneurs, visionaries, and innovators of today. This
              new edition combines the timeless business advice and strategy of
              the original text, supplemented with cutting-edge insights and
              case studies pertinent to today’s business world.
            </Typography>
          </TabPanel>
          <TabPanel value={value} index={1} />
          <TabPanel value={value} index={2} />
        </Box>
      </Box>
    </Container>
  );
}
