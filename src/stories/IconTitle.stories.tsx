/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/function-component-definition */
/* eslint-disable import/no-extraneous-dependencies */
import { ComponentStory } from '@storybook/react';
import IconTitle from '../components/molecules/IconTitle/IconTitle';
import Entrepreneurship from '../components/atoms/Icons/Entrepreneurship';

export default {
  title: 'molecules/iconTitle',
  component: IconTitle,
  argTypes: {
    onClick: {
      action: 'Clicked',
    },
  },
};

const Template: ComponentStory<typeof IconTitle> = (args) => (
  <IconTitle {...args} />
);

export const entrepreneurship = Template.bind({});
entrepreneurship.args = {
  icon: <Entrepreneurship />,
  title: 'Entrepreneurship',
};
