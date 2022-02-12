/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/function-component-definition */
import React from 'react';
import { Meta, Story } from '@storybook/react';
import { ThemeProvider } from '@mui/material';
import IconButton, {
  IconButtonProps,
} from '../components/atoms/iconButton/IconButton';
import theme from '../Theme/theme';
import ShowIcon from '../components/atoms/Icons/showIcon';
import iconPath from '../components/atoms/Icons/iconPath';

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
} as Meta;

const Template: Story<IconButtonProps> = (args) => <IconButton {...args} />;

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
