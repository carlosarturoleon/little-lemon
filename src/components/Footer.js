function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <img
          src="/Applying design fundamentals in Figma - Assets/Logo.svg"
          alt="Little Lemon Logo"
          className="footer__logo"
        />
        <nav>
          <p className="footer__nav-title">Navigation</p>
          <ul className="footer__nav-list">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/menu">Menu</a></li>
            <li><a href="/reservations">Reservations</a></li>
            <li><a href="/order">Order Online</a></li>
            <li><a href="/login">Login</a></li>
          </ul>
        </nav>
        <address className="footer__contact">
          <p className="footer__contact-title">Contact</p>
          <p>Address</p>
          <p>Phone number</p>
          <p>Email</p>
        </address>
        <section className="footer__social">
          <p className="footer__social-title">Social Media Links</p>
          <p>Address</p>
          <p>Phone number</p>
          <p>Email</p>
        </section>
      </div>
    </footer>
  );
}

export default Footer;