import { Link } from 'react-router-dom';

function ConfirmedBooking() {
  return (
    <section className="confirmed-booking container">
      <h1>Booking Confirmed!</h1>
      <p>Thank you for your reservation at Little Lemon. We look forward to seeing you!</p>
      <Link to="/" className="btn" aria-label="Go back to Little Lemon homepage">Back to Home</Link>
    </section>
  );
}

export default ConfirmedBooking;
