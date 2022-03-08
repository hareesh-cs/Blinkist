/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Meta } from '@storybook/react';
import Footer from './Footer';

export default {
  title: 'organisms/Footer',
  component: Footer,
} as Meta;

export function FooterDemo() {
  return <Footer />;
}
