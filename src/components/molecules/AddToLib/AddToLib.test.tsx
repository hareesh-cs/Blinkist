import { render, screen } from '@testing-library/react';
import { AddToLib } from './AddToLib';

describe('<AddToLib>', () => {
  test('check the text of AddToLib', () => {
    render(<AddToLib />);
    const name = screen.getByTestId('AddToLib');
    expect(name.textContent).toBe('Add to lib');
  });
  test('check if AddToLib is present', () => {
    render(<AddToLib />);
    const name = screen.getAllByTestId('AddToLib');
    expect(name).toBeTruthy();
  });
});
