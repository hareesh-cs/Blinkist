import React from 'react';
import Header from '../../organisms/header/Header';
import Footer from '../../organisms/footer/Footer';
import BookState from '../../organisms/bookState/BookState';

function Home() {
  return (
    <div>
      <Header />
      <BookState />
      <Footer />
    </div>
  );
}

export default Home;
