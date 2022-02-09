import React from 'react';
import { SearchField } from '../../molecules/searchBar/SearchBar';
import Banner from '../../molecules/banner/Banner';
import { EBooks } from '../../organisms/eBooks/EBooks';
import Footer from '../../organisms/footer/Footer';
import Header from '../../organisms/header/Header';

function EPage() {
  return (
    <div>
      <Header />
      <Banner />
      <SearchField />
      <EBooks />
      <Footer />
    </div>
  );
}
export default EPage;
