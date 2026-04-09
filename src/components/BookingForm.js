import { useState } from 'react';

const today = new Date().toISOString().split('T')[0];

function validate({ date, guests }) {
  const errors = {};
  if (!date) errors.date = 'Please select a date.';
  if (date < today) errors.date = 'Date cannot be in the past.';
  if (!guests || guests < 1 || guests > 10)
    errors.guests = 'Number of guests must be between 1 and 10.';
  return errors;
}

function BookingForm({ availableTimes, dispatch, submitForm }) {
  const [date, setDate] = useState('');
  const [time, setTime] = useState(availableTimes[0]);
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('Birthday');
  const [touched, setTouched] = useState({ date: false, guests: false });

  const errors = validate({ date, guests });
  const isValid = Object.keys(errors).length === 0;

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

  const handleSubmit = (e) => {
    e.preventDefault();
    setTouched({ date: true, guests: true });
    if (!isValid) return;
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

      <button
        type="submit"
        className="btn"
        disabled={!isValid}
        aria-label="Make Your Reservation"
      >
        Make Your Reservation
      </button>
    </form>
  );
}

export default BookingForm;
