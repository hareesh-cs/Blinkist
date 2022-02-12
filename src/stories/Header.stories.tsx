/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/function-component-definition */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Meta } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import Header from '../components/organisms/header/Header';

export default {
  title: 'organisms/Header',
  component: Header,
} as Meta;

export const HeaderDemo = () => (
  <BrowserRouter>
    <Header />
  </BrowserRouter>
);
