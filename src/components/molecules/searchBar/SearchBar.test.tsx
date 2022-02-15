import { render, screen } from '@testing-library/react';
import { SearchField } from './SearchBar';

describe('<SearchFeild>', () => {
  test('check the if is present', () => {
    render(<SearchField />);
    const name = screen.getByTestId('searchbar');
    expect(name).toBeDefined();
  });

  test('check the search is truthy', () => {
    render(<SearchField />);
    const name = screen.getByTestId('searchbar');
    expect(name).toBeTruthy();
  });
});
