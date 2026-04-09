import { Link } from 'react-router-dom';

function Hero() {
  return (
    <section className="hero">
      <div className="hero__inner container">
        <div className="hero__text">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <Link to="/booking" className="btn">Reserve a Table</Link>
        </div>
        <div className="hero__image">
          <img
            src="/Applying design fundamentals in Figma - Assets/restauranfood.jpg"
            alt="Delicious food at Little Lemon"
            className="img--rounded"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
