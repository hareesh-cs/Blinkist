/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Meta } from '@storybook/react';
import BookView from '../components/organisms/bookView/BookView';

export default {
  title: 'organisms/BookView',
  component: BookView,
} as Meta;

export const primary = () => <BookView />;
