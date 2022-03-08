/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/function-component-definition */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Meta } from '@storybook/react';
import { SearchField } from './SearchBar';

export default {
  title: 'molecules/SearchField',
  component: SearchField,
} as Meta;

export const primary = () => <SearchField />;
