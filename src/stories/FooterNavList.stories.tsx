/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/function-component-definition */
/* eslint-disable import/no-extraneous-dependencies */
import { ComponentStory } from '@storybook/react';
import FooterNavList from '../components/molecules/FooterNavList/FooterNavList';

export default {
  title: 'molecules/FooterList',
  component: FooterNavList,
};

const Template: ComponentStory<typeof FooterNavList> = (args) => (
  <FooterNavList {...args} />
);

export const demoFooterList = Template.bind({});
demoFooterList.args = {
  title: 'Editorial',
  items: ['Book List', 'World List'],
};
