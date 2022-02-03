/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/function-component-definition */
/* eslint-disable import/no-extraneous-dependencies */
import { ComponentStory } from '@storybook/react';
import SearchBar from '../components/molecules/searchBar/SearchBar';

export default {
  title: 'molecules/SearchBar',
  component: SearchBar,
};

const Template: ComponentStory<typeof SearchBar> = (args) => (
  <SearchBar {...args} />
);

export const bar = Template.bind({});

bar.args = {
  placeholder: 'Search by title or author',
};
