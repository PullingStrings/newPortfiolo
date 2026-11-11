import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const handleScroll = (event, target) => {
    event.preventDefault();
    if (location.pathname === '/') {
      document.querySelector(target)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = `/${target}`;
    }
    setOpen(false);
  };

  return (
    <nav className={styles.nav}>
      <Link className={styles.wordmark} to="/" onClick={() => setOpen(false)}>
        <strong>Tito Zwane</strong>
        <span>Portfolio / 26</span>
      </Link>

      <button
        className={styles.burger}
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-label={open ? 'Close navigation' : 'Open navigation'}
      >
        {open ? '×' : '＋'}
      </button>

      <div className={styles.navLinks} data-open={open}>
        <a
          href="#projects"
          onClick={(event) => handleScroll(event, '#projects')}
        >
          Work
        </a>
        <a href="#about" onClick={(event) => handleScroll(event, '#about')}>
          About
        </a>
        <Link to="/case-studies" onClick={() => setOpen(false)}>
          Case Studies
        </Link>
        <Link to="/contact" onClick={() => setOpen(false)}>
          Contact
        </Link>
      </div>
    </nav>
  );
}
