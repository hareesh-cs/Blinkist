import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import BookState from './BookState';

function MockBookState() {
  return (
    <BrowserRouter>
      <BookState />
    </BrowserRouter>
  );
}

describe('<MockBookState>', () => {
  test('check if it is present', () => {
    render(<MockBookState />);
    const name = screen.getByTestId('bookstate');
    expect(name).toBeDefined();
  });
  test('check if it is truthy', () => {
    render(<MockBookState />);
    const name = screen.getByTestId('bookstate');
    expect(name).toBeTruthy();
  });
  test('check if tabs are defined', () => {
    render(<MockBookState />);
    const name = screen.getByTestId('tabs');
    expect(name).toBeDefined();
  });
  test('check if tabs are Truthy', () => {
    render(<MockBookState />);
    const name = screen.getByTestId('tabs');
    expect(name).toBeTruthy();
  });
});
