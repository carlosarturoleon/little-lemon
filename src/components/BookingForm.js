import { useState } from 'react';
import { Link } from 'react-router-dom';

// Today's date in YYYY-MM-DD format, used as the minimum allowed booking date.
const today = new Date().toISOString().split('T')[0];

// Pure validation function — returns an object of field error messages.
// An empty object means the form is valid.
function validate({ date, guests }) {
  const errors = {};
  if (!date) errors.date = 'Please select a date.';
  if (date < today) errors.date = 'Date cannot be in the past.';
  if (!guests || guests < 1 || guests > 10)
    errors.guests = 'Number of guests must be between 1 and 10.';
  return errors;
}

// Controlled booking form. Receives availableTimes from the parent (Main.js)
// via useReducer, dispatches UPDATE_TIMES on date change to refresh time slots,
// and calls submitForm with the collected data on valid submission.
function BookingForm({ availableTimes, dispatch, submitForm }) {
  const [date, setDate] = useState('');
  const [time, setTime] = useState(availableTimes[0]);
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('Birthday');
  // Tracks which fields the user has interacted with so errors only show after touch.
  const [touched, setTouched] = useState({ date: false, guests: false });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const errors = validate({ date, guests });
  const isValid = Object.keys(errors).length === 0;

  // When the date changes, also dispatch to refresh available time slots.
  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setDate(selectedDate);
    setTouched((prev) => ({ ...prev, date: true }));
    dispatch({ type: 'UPDATE_TIMES', payload: selectedDate });
  };

  const handleGuestsChange = (e) => {
    setGuests(Number(e.target.value));
    setTouched((prev) => ({ ...prev, guests: true }));
  };

  // On submit, mark all validatable fields as touched to surface any errors,
  // then bail out if invalid or proceed to call the parent's submitForm handler.
  const handleSubmit = (e) => {
    e.preventDefault();
    setTouched({ date: true, guests: true });
    if (!isValid) return;
    setIsSubmitting(true);
    submitForm({ date, time, guests, occasion });
  };

  return (
    <form className="booking-form" onSubmit={handleSubmit} noValidate>
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        value={date}
        min={today}
        onChange={handleDateChange}
        onBlur={() => setTouched((prev) => ({ ...prev, date: true }))}
        required
        aria-required="true"
        aria-describedby={errors.date ? 'date-error' : undefined}
        className={touched.date && errors.date ? 'input--error' : ''}
      />
      {touched.date && errors.date && (
        <span id="date-error" className="form-error">{errors.date}</span>
      )}

      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        required
        aria-required="true"
      >
        {availableTimes.map((t) => (
          <option key={t}>{t}</option>
        ))}
      </select>

      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        id="guests"
        min="1"
        max="10"
        value={guests}
        onChange={handleGuestsChange}
        onBlur={() => setTouched((prev) => ({ ...prev, guests: true }))}
        required
        aria-required="true"
        aria-describedby={errors.guests ? 'guests-error' : undefined}
        className={touched.guests && errors.guests ? 'input--error' : ''}
      />
      {touched.guests && errors.guests && (
        <span id="guests-error" className="form-error">{errors.guests}</span>
      )}

      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        value={occasion}
        onChange={(e) => setOccasion(e.target.value)}
      >
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>

      <div className="booking-form__actions">
        <button
          type="submit"
          className="btn"
          disabled={!isValid || isSubmitting}
          aria-label="Make Your Reservation"
        >
          {isSubmitting ? 'Submitting…' : 'Make Your Reservation'}
        </button>
        <Link to="/" className="btn btn--dark" aria-label="Cancel reservation and go back to home">Cancel</Link>
      </div>
    </form>
  );
}

export default BookingForm;
