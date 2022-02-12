import './App.css';
import React from 'react';
import { ThemeProvider } from '@emotion/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import theme from './Theme/theme';
import EPage from './components/pages/ePage/EPage';
import Home from './components/pages/home/Home';
import BookDetails from './components/pages/bookDetails/BookDetails';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path="/" element={<Home />} />
            <Route path="Entrepreneurship" element={<EPage />} />
            <Route
              path="Entrepreneurship/BookDetails"
              element={<BookDetails />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
