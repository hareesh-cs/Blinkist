/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import './App.css';
import AvatarC from './components/atoms/Avatar/Avatar';
import Logo from './components/atoms/logo/Logo';
import BookCard from './components/molecules/BookCard/BookCard';

function App() {
  return (
    <div>
      <Logo />
      <AvatarC />
      <BookCard />
    </div>
  );
}

export default App;
