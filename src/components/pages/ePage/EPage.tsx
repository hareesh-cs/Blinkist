import React from 'react';
import { ThemeProvider } from '@emotion/react';
import { SearchField } from '../../molecules/searchBar/SearchBar';
import Banner from '../../molecules/banner/Banner';
import { EBooks } from '../../organisms/eBooks/EBooks';
import Footer from '../../organisms/footer/Footer';
import Header from '../../organisms/header/Header';
import theme from '../../../Theme/theme';

function EPage() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Header />
        <Banner />
        <SearchField />
        <EBooks />
        <Footer />
      </ThemeProvider>
    </div>
  );
}
export default EPage;
