import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ExpandNav from './ExpandNav';

function MockExpandNav() {
  return (
    <BrowserRouter>
      <ExpandNav />
    </BrowserRouter>
  );
}

describe('<ExpandNav>', () => {
  test('check the if is present', () => {
    render(<MockExpandNav />);
    const name = screen.getByTestId('expand');
    expect(name).toBeDefined();
  });

  test('check the if is truthy', () => {
    render(<MockExpandNav />);
    const name = screen.getByTestId('expand');
    expect(name).toBeTruthy();
  });
});
