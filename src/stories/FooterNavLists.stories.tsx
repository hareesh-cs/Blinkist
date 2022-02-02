/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/function-component-definition */
/* eslint-disable import/no-extraneous-dependencies */
import { ComponentStory } from '@storybook/react';
import FooterNavLists from '../components/molecules/FooterNavLists/FooterNavLists';
import {
  titles,
  subtitlesList,
} from '../components/molecules/FooterNavLists/titles';

export default {
  title: 'molecules/FooterNavLists',
  component: FooterNavLists,
};

const Template: ComponentStory<typeof FooterNavLists> = (args) => (
  <FooterNavLists {...args} />
);

export const footerNavLi = Template.bind({});
footerNavLi.args = {
  titles,
  itemLists: subtitlesList,
};
