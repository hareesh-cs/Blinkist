/* eslint-disable react/function-component-definition */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-extraneous-dependencies */
import { ThemeProvider } from '@mui/material';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import CategoryBookList from '../components/molecules/CategoryBookList/CategoryBookList';
import theme from '../Theme/theme';
import {
  title as t,
  bookList as bl,
} from '../components/molecules/CategoryBookList/data';

export default {
  title: 'molecules/CategoryBookList',
  component: CategoryBookList,
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    ),
  ],
} as ComponentMeta<typeof CategoryBookList>;

const Template: ComponentStory<typeof CategoryBookList> = (args) => (
  <CategoryBookList {...args} />
);

export const readingList = Template.bind({});

readingList.args = {
  title: t,
  bookList: bl,
};
