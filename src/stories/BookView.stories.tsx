/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Meta } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import BookView from '../components/organisms/bookView/BookView';
import store from '../store';

export default {
  title: 'organisms/BookView',
  component: BookView,
} as Meta;

export const primary = () => (
  <BrowserRouter>
    <Provider store={store}>
      <BookView />
    </Provider>
  </BrowserRouter>
);
