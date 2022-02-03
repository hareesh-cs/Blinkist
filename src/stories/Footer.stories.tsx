/* eslint-disable import/no-extraneous-dependencies */
import { ThemeProvider } from '@mui/material';
import { ComponentMeta } from '@storybook/react';
import Footer from '../components/organisms/footer/Footer';
import theme from '../Theme/theme';

export default {
  title: 'organisms/Footer',
  component: Footer,
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    ),
  ],
} as ComponentMeta<typeof Footer>;

export const footer = () => <Footer />;
