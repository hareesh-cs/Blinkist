/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Meta } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import BookState from '../components/organisms/bookState/BookState';

export default {
  title: 'organisms/StateOfBook',
  component: BookState,
} as Meta;

export function BookStateDemo() {
  return (
    <BrowserRouter>
      <BookState />
    </BrowserRouter>
  );
}
