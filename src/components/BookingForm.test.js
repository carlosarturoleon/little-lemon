import { render, screen } from '@testing-library/react';
import BookingForm from './BookingForm';
import { initializeTimes, updateTimes } from './Main';

const mockTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];

// Mock the API that is loaded via <script> in index.html
beforeEach(() => {
  window.fetchAPI = jest.fn(() => mockTimes);
});

const mockDispatch = jest.fn();

// ── Step 1: Static text rendering ──────────────────────────────────────────

test('Renders the BookingForm label "Choose date"', () => {
  render(<BookingForm availableTimes={mockTimes} dispatch={mockDispatch} />);
  const label = screen.getByText('Choose date');
  expect(label).toBeInTheDocument();
});

test('Renders the BookingForm "Make Your Reservation" submit button', () => {
  render(<BookingForm availableTimes={mockTimes} dispatch={mockDispatch} />);
  const button = screen.getByText('Make Your Reservation');
  expect(button).toBeInTheDocument();
});

// ── Step 2: initializeTimes and updateTimes reducer ────────────────────────

test('initializeTimes calls fetchAPI with today and returns available times', () => {
  const times = initializeTimes();
  expect(window.fetchAPI).toHaveBeenCalledWith(expect.any(Date));
  expect(times).toEqual(mockTimes);
});

test('updateTimes calls fetchAPI with the selected date on UPDATE_TIMES', () => {
  const initialState = mockTimes;
  const action = { type: 'UPDATE_TIMES', payload: '2024-06-15' };
  const newState = updateTimes(initialState, action);
  expect(window.fetchAPI).toHaveBeenCalledWith(new Date('2024-06-15'));
  expect(newState).toEqual(mockTimes);
});

test('updateTimes returns the same state for unknown actions', () => {
  const initialState = mockTimes;
  const action = { type: 'UNKNOWN_ACTION' };
  const newState = updateTimes(initialState, action);
  expect(newState).toEqual(initialState);
});
