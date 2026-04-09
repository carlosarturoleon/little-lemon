import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from './BookingForm';
import { initializeTimes, updateTimes } from './Main';

const mockTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
const mockDispatch = jest.fn();
const mockSubmit = jest.fn();

beforeEach(() => {
  window.fetchAPI = jest.fn(() => mockTimes);
  mockDispatch.mockClear();
  mockSubmit.mockClear();
});

const renderForm = (props = {}) =>
  render(
    <BookingForm
      availableTimes={mockTimes}
      dispatch={mockDispatch}
      submitForm={mockSubmit}
      {...props}
    />
  );

// ── Static text rendering ───────────────────────────────────────────────────

test('Renders the BookingForm label "Choose date"', () => {
  renderForm();
  expect(screen.getByText('Choose date')).toBeInTheDocument();
});

test('Renders the BookingForm "Make Your Reservation" submit button', () => {
  renderForm();
  expect(screen.getByText('Make Your Reservation')).toBeInTheDocument();
});

// ── Step 1: HTML5 attribute validation ─────────────────────────────────────

test('Date input has type="date"', () => {
  renderForm();
  expect(screen.getByLabelText('Choose date')).toHaveAttribute('type', 'date');
});

test('Date input is required', () => {
  renderForm();
  expect(screen.getByLabelText('Choose date')).toBeRequired();
});

test('Date input has a min attribute set to today or later', () => {
  renderForm();
  const today = new Date().toISOString().split('T')[0];
  expect(screen.getByLabelText('Choose date')).toHaveAttribute('min', today);
});

test('Guests input has type="number"', () => {
  renderForm();
  expect(screen.getByLabelText('Number of guests')).toHaveAttribute('type', 'number');
});

test('Guests input has min="1"', () => {
  renderForm();
  expect(screen.getByLabelText('Number of guests')).toHaveAttribute('min', '1');
});

test('Guests input has max="10"', () => {
  renderForm();
  expect(screen.getByLabelText('Number of guests')).toHaveAttribute('max', '10');
});

test('Guests input is required', () => {
  renderForm();
  expect(screen.getByLabelText('Number of guests')).toBeRequired();
});

test('Time select is required', () => {
  renderForm();
  expect(screen.getByLabelText('Choose time')).toBeRequired();
});

// ── Step 2: JavaScript validation — invalid states ─────────────────────────

test('Submit button is disabled when date is empty', () => {
  renderForm();
  expect(screen.getByText('Make Your Reservation')).toBeDisabled();
});

test('Shows date error message after blur with no date', () => {
  renderForm();
  fireEvent.blur(screen.getByLabelText('Choose date'));
  expect(screen.getByText('Date cannot be in the past.')).toBeInTheDocument();
});

test('Shows guests error message after entering 0 guests', () => {
  renderForm();
  const guestsInput = screen.getByLabelText('Number of guests');
  fireEvent.change(guestsInput, { target: { value: '0' } });
  fireEvent.blur(guestsInput);
  expect(screen.getByText('Number of guests must be between 1 and 10.')).toBeInTheDocument();
});

test('Shows guests error message after entering more than 10 guests', () => {
  renderForm();
  const guestsInput = screen.getByLabelText('Number of guests');
  fireEvent.change(guestsInput, { target: { value: '11' } });
  fireEvent.blur(guestsInput);
  expect(screen.getByText('Number of guests must be between 1 and 10.')).toBeInTheDocument();
});

// ── Step 2: JavaScript validation — valid states ───────────────────────────

test('Submit button is enabled when date and guests are valid', () => {
  renderForm();
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const tomorrowStr = tomorrow.toISOString().split('T')[0];

  fireEvent.change(screen.getByLabelText('Choose date'), {
    target: { value: tomorrowStr },
  });
  fireEvent.change(screen.getByLabelText('Number of guests'), {
    target: { value: '4' },
  });

  expect(screen.getByText('Make Your Reservation')).not.toBeDisabled();
});

test('Calls submitForm with correct data when form is valid and submitted', () => {
  renderForm();
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const tomorrowStr = tomorrow.toISOString().split('T')[0];

  fireEvent.change(screen.getByLabelText('Choose date'), {
    target: { value: tomorrowStr },
  });
  fireEvent.change(screen.getByLabelText('Number of guests'), {
    target: { value: '3' },
  });
  fireEvent.submit(document.querySelector('form'));

  expect(mockSubmit).toHaveBeenCalledWith(
    expect.objectContaining({ date: tomorrowStr, guests: 3 })
  );
});

test('Does not call submitForm when form is invalid', () => {
  renderForm();
  fireEvent.submit(document.querySelector('form'));
  expect(mockSubmit).not.toHaveBeenCalled();
});

// ── initializeTimes and updateTimes reducer ────────────────────────────────

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
