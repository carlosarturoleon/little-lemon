import { useReducer } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import BookingPage from '../pages/BookingPage';
import ConfirmedBooking from '../pages/ConfirmedBooking';
import AboutPage from '../pages/AboutPage';
import MenuPage from '../pages/MenuPage';
import OrderPage from '../pages/OrderPage';
import LoginPage from '../pages/LoginPage';

const defaultTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];

export const initializeTimes = () => {
  if (typeof window.fetchAPI === 'function') {
    return window.fetchAPI(new Date());
  }
  return defaultTimes;
};

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

  const submitForm = (formData) => {
    if (typeof window.submitAPI === 'function') {
      const success = window.submitAPI(formData);
      if (success) {
        navigate('/confirmed');
      }
    } else {
      // Fallback when API script isn't available
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
