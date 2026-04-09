import { useState } from 'react';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="login-page" aria-label="Login">
      <div className="container">
        <div className="login-page__inner">
          <img
            src="/Applying design fundamentals in Figma - Assets/Logo.svg"
            alt="Little Lemon"
            className="login-page__logo"
          />
          <h1>Welcome Back</h1>
          <p>Sign in to manage your reservations and orders.</p>

          <form className="booking-form login-form" onSubmit={handleSubmit} noValidate>
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              required
              aria-required="true"
            />

            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
              aria-required="true"
            />

            <div className="booking-form__actions">
              <button type="submit" className="btn" aria-label="Sign in to Little Lemon">Sign In</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default LoginPage;
