/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Meta } from '@storybook/react';
import BookInfo from '../components/organisms/bookInfo/BookInfo';

export default {
  title: 'organisms/BookInfo',
  component: BookInfo,
} as Meta;

export const primary = () => <BookInfo />;
