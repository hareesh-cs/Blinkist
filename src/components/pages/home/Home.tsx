import React from 'react';
import { ThemeProvider } from '@emotion/react';
import Header from '../../organisms/header/Header';
import Footer from '../../organisms/footer/Footer';
import theme from '../../../Theme/theme';
import BookState from '../../organisms/bookState/BookState';

function Home() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Header />
        <BookState />
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default Home;
