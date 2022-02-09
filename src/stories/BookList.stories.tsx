/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Meta } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import { BookList } from '../components/organisms/bookList/BookList';

export default {
  title: 'organisms/BookList',
  component: BookList,
} as Meta;

export const primary = () => (
  <BrowserRouter>
    <BookList />
  </BrowserRouter>
);
