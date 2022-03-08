/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Meta } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import { EBooks } from './EBooks';

export default {
  title: 'organisms/EBooks',
  component: EBooks,
} as Meta;

export const primary = () => (
  <BrowserRouter>
    <EBooks />
  </BrowserRouter>
);
