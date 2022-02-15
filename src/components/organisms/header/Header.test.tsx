import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Header from './Header';

function MockHeader() {
  return (
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );
}

describe('<MockHeader>', () => {
  test('check if it is present', () => {
    render(<MockHeader />);
    const name = screen.getByTestId('header');
    expect(name).toBeDefined();
  });
  test('check if it is truthy', () => {
    render(<MockHeader />);
    const name = screen.getByTestId('header');
    expect(name).toBeTruthy();
  });
});
