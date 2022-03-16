/* eslint-disable import/no-unresolved */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/function-component-definition */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-var-requires */
import { ThemeProvider } from '@mui/material';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import BookCard from './BookCard';
import theme from '../../../Theme/theme';

const image2 = require('../../atoms/Images/2.png');

export default {
  title: 'molecules/BookCard',
  component: BookCard,
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    ),
  ],
} as ComponentMeta<typeof BookCard>;

const Template: ComponentStory<typeof BookCard> = (args) => (
  <BrowserRouter>
    <BookCard {...args} />
  </BrowserRouter>
);
export const primary = Template.bind({});
primary.args = {
  image: image2,
  title: 'Bring your Human',
  author: 'Erica Keswin',
  time: '13',
  reads: '1.5',
  status: true,
  progress: 88,
};
