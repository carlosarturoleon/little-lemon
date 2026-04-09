import { useReducer } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import BookingPage from '../pages/BookingPage';

const initializeTimes = () => ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];

const updateTimes = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TIMES':
      // Returns the same available times regardless of date for now.
      // This will be connected to a real API in a future exercise.
      return initializeTimes();
    default:
      return state;
  }
};

function Main() {
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

  return (
    <main className="main">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/booking"
          element={<BookingPage availableTimes={availableTimes} dispatch={dispatch} />}
        />
      </Routes>
    </main>
  );
}

export default Main;
