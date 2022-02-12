import { render, screen } from '@testing-library/react';
import AvatarC from './Avatar';

it('Unit Test - Avatar', () => {
  render(<AvatarC letter="A" />);
  const name = screen.getByTestId('Avatar');
  expect(name.textContent).toBe('A');
});
