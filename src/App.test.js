import { render, screen } from '@testing-library/react';
import App from './App';

beforeEach(() => {
  window.fetchAPI = jest.fn(() => ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']);
});

test('Renders the Little Lemon app without crashing', () => {
  render(<App />);
  const headings = screen.getAllByText('Little Lemon');
  expect(headings.length).toBeGreaterThan(0);
});
