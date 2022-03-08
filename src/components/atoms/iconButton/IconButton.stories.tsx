/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/function-component-definition */
import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeProvider } from '@mui/material';
import IconButton, { IconButtonProps } from './IconButton';
import theme from '../../../Theme/theme';
import ShowIcon from '../Icons/showIcon';
import iconPath from '../Icons/iconPath';

export default {
  title: 'atoms/IconButton',
  component: IconButton,
  argTypes: {
    onClick: { action: 'clicked' },
  },
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    ),
  ],
} as ComponentMeta<typeof IconButton>;

const Template: ComponentStory<typeof IconButton> = (args) => (
  <IconButton {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  children: (
    <ShowIcon
      width="14"
      height="8"
      viewBox="0 0 14 8"
      d={iconPath.downArrowIcon}
    />
  ),
};
