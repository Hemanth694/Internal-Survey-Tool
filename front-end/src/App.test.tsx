import { render, screen } from '@testing-library/react';
import Header from './Header';
import UserHomePage from './UserHomePage';

test('renders learn react link', () => {
  render(<Header />);
  const linkElement = screen.getByText(/welcome back hemanth/i);
  expect(linkElement).toBeInTheDocument();
});
