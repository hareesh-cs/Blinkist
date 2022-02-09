/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Meta } from '@storybook/react';
import Banner from '../components/molecules/banner/Banner';

export default {
  title: 'molecules/Banner',
  component: Banner,
} as Meta;

export const primary = () => <Banner />;
