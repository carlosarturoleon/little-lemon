import { render, screen } from '@testing-library/react';
import App from './App';

test('Renders the Little Lemon app without crashing', () => {
  render(<App />);
  const headings = screen.getAllByText('Little Lemon');
  expect(headings.length).toBeGreaterThan(0);
});
