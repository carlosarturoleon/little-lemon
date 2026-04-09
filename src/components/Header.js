import Nav from './Nav';

function Header() {
  return (
    <header className="header">
      <div className="header__inner">
        <img
          src="/Applying design fundamentals in Figma - Assets/Logo.svg"
          alt="Little Lemon Logo"
          className="header__logo"
        />
        <Nav />
      </div>
    </header>
  );
}

export default Header;