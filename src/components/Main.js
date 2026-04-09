import { useReducer } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import BookingPage from '../pages/BookingPage';
import ConfirmedBooking from '../pages/ConfirmedBooking';
import AboutPage from '../pages/AboutPage';
import MenuPage from '../pages/MenuPage';
import OrderPage from '../pages/OrderPage';
import LoginPage from '../pages/LoginPage';

// Fallback times used when the API script is not available (e.g. in tests or
// when the external script is blocked by the browser).
const defaultTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];

// Initializes available times for today's date.
// Called once as the initial state value for useReducer.
export const initializeTimes = () => {
  if (typeof window.fetchAPI === 'function') {
    return window.fetchAPI(new Date());
  }
  return defaultTimes;
};

// Reducer that updates available time slots when the user picks a new date.
// Exported so it can be imported and tested in isolation.
export const updateTimes = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TIMES':
      if (typeof window.fetchAPI === 'function') {
        return window.fetchAPI(new Date(action.payload));
      }
      return state;
    default:
      return state;
  }
};

function Main() {
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());
  const navigate = useNavigate();

  // Submits the booking to the API and navigates to the confirmation page.
  // Falls back to navigating directly when the API script is unavailable.
  const submitForm = (formData) => {
    if (typeof window.submitAPI === 'function') {
      const success = window.submitAPI(formData);
      if (success) {
        navigate('/confirmed');
      }
    } else {
      navigate('/confirmed');
    }
  };

  return (
    <main className="main">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/booking"
          element={
            <BookingPage
              availableTimes={availableTimes}
              dispatch={dispatch}
              submitForm={submitForm}
            />
          }
        />
        <Route path="/confirmed" element={<ConfirmedBooking />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/order" element={<OrderPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </main>
  );
}

export default Main;
