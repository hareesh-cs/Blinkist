import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { BookList } from './BookList';

function MockBookList() {
  return (
    <BrowserRouter>
      <BookList />
    </BrowserRouter>
  );
}

describe('<BookList>', () => {
  test('check if it is present', () => {
    render(<MockBookList />);
    const name = screen.getByTestId('booklist');
    expect(name).toBeDefined();
  });
  test('check if it is truthy', () => {
    render(<MockBookList />);
    const name = screen.getByTestId('booklist');
    expect(name).toBeTruthy();
  });
});
