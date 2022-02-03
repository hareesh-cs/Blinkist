/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/function-component-definition */
/* eslint-disable import/no-extraneous-dependencies */
import { ComponentStory } from '@storybook/react';
import ShowIcon from '../components/atoms/Icons/showIcon';
import iconPath from '../components/atoms/Icons/iconPath';
import IconTitle from '../components/molecules/IconTitle/IconTitle';

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
  icon: (
    <ShowIcon
      width="16"
      height="23"
      viewBox="0 0 16 23"
      d={iconPath.entrepreneurshipIcon}
    />
  ),
  title: 'Entrepreneurship',
};
