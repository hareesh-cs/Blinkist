/* eslint-disable object-shorthand */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/function-component-definition */
/* eslint-disable import/no-extraneous-dependencies */
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeProvider } from '@mui/material/styles';
import DropDownMenu from '../components/organisms/dropDownMenu/DropDownMenu';
import { icons, titles } from '../components/atoms/Icons/iconsList';
import theme from '../Theme/theme';

export default {
  title: 'organisms/DropDownMenu',
  component: DropDownMenu,
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    ),
  ],
} as ComponentMeta<typeof DropDownMenu>;
const Template: ComponentStory<typeof DropDownMenu> = (args) => (
  <DropDownMenu {...args} />
);

export const dropDown = Template.bind({});
dropDown.args = {
  icons: icons,
  titles: titles,
};
