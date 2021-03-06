import { render, screen } from '@testing-library/react';
import Banner from './Banner';

describe('<Banner>', () => {
  test('check the if is present', () => {
    render(<Banner />);
    const name = screen.getByTestId('banner');
    expect(name).toBeDefined();
  });
  test('check the if is truthy', () => {
    render(<Banner />);
    const name = screen.getByTestId('banner');
    expect(name).toBeTruthy();
  });
});
