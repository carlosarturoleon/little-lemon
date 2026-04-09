import { Link, useLocation } from 'react-router-dom';

function Nav() {
  const { pathname } = useLocation();

  return (
    <nav aria-label="Main navigation">
      <ul className="nav__list">
        <li><Link to="/" className={pathname === '/' ? 'nav__link--active' : ''}>Home</Link></li>
        <li><Link to="/about" className={pathname === '/about' ? 'nav__link--active' : ''}>About</Link></li>
        <li><Link to="/menu" className={pathname === '/menu' ? 'nav__link--active' : ''}>Menu</Link></li>
        <li><Link to="/reservations" className={pathname === '/reservations' ? 'nav__link--active' : ''}>Reservations</Link></li>
        <li><Link to="/order" className={pathname === '/order' ? 'nav__link--active' : ''}>Order Online</Link></li>
        <li><Link to="/login" className={pathname === '/login' ? 'nav__link--active' : ''}>Login</Link></li>
      </ul>
    </nav>
  );
}

export default Nav;
