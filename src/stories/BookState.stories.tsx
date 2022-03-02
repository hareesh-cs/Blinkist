/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Meta } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import BookState from '../components/organisms/bookState/BookState';
import store from '../store';

export default {
  title: 'organisms/StateOfBook',
  component: BookState,
} as Meta;

export function BookStateDemo() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <BookState />
      </Provider>
    </BrowserRouter>
  );
}
