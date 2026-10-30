import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';
import { profile } from '../data/profile.js';

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/projects', label: 'Project' },
  { to: '/about', label: 'About' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="nav-wrap">
      <nav className={`nav container ${open ? 'is-open' : ''}`} aria-label="Main">
        <Link to="/" className="nav__logo" aria-label={`${profile.name} — home`}>
          <img src={logo} alt={profile.name} width="87" height="31" />
        </Link>

        <button
          className="nav__toggle"
          aria-expanded={open}
          aria-controls="nav-menu"
          onClick={() => setOpen((o) => !o)}
        >
          <span className="visually-hidden">{open ? 'Close menu' : 'Open menu'}</span>
          <span className="nav__burger" aria-hidden="true" />
        </button>

        <ul className="nav__links" id="nav-menu">
          {links.map((l) => (
            <li key={l.to}>
              <NavLink to={l.to} end={l.end} className="nav__link">
                {l.label}
              </NavLink>
            </li>
          ))}
          <li className="nav__resume-mobile">
            <a href={profile.resume} className="btn btn--primary btn--sm" target="_blank" rel="noreferrer">
              Resume
            </a>
          </li>
        </ul>

        <a href={profile.resume} className="btn btn--primary btn--sm nav__resume" target="_blank" rel="noreferrer">
          Resume
        </a>
      </nav>
    </header>
  );
}
