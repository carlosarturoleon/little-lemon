import { render, screen } from '@testing-library/react';
import BookingForm from './BookingForm';
import { initializeTimes, updateTimes } from './Main';

const availableTimes = initializeTimes();
const mockDispatch = jest.fn();

// ── Step 1: Static text rendering ──────────────────────────────────────────

test('Renders the BookingForm label "Choose date"', () => {
  render(<BookingForm availableTimes={availableTimes} dispatch={mockDispatch} />);
  const label = screen.getByText('Choose date');
  expect(label).toBeInTheDocument();
});

test('Renders the BookingForm "Make Your Reservation" submit button', () => {
  render(<BookingForm availableTimes={availableTimes} dispatch={mockDispatch} />);
  const button = screen.getByText('Make Your Reservation');
  expect(button).toBeInTheDocument();
});

// ── Step 2: initializeTimes and updateTimes reducer ────────────────────────

test('initializeTimes returns the correct initial available times', () => {
  const times = initializeTimes();
  expect(times).toEqual(['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']);
});

test('updateTimes returns the same state when UPDATE_TIMES is dispatched', () => {
  const initialState = initializeTimes();
  const action = { type: 'UPDATE_TIMES', payload: '2024-06-15' };
  const newState = updateTimes(initialState, action);
  expect(newState).toEqual(initialState);
});

test('updateTimes returns the same state for unknown actions', () => {
  const initialState = initializeTimes();
  const action = { type: 'UNKNOWN_ACTION' };
  const newState = updateTimes(initialState, action);
  expect(newState).toEqual(initialState);
});
