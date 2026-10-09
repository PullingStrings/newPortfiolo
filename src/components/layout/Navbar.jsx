import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

const Nav = styled.nav`
  position: sticky;
  top: 0;
  z-index: 1000;
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  min-height: 72px;
  padding: 0 20px;
  background: rgba(243, 240, 232, 0.94);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(17, 17, 17, 0.22);
  font-family: 'Inter', sans-serif;
`;

const Wordmark = styled(Link)`
  display: inline-flex;
  align-items: baseline;
  gap: 10px;
  width: fit-content;
  color: #111;
  text-decoration: none;
  text-transform: uppercase;

  strong {
    font-family: 'Antonio', sans-serif;
    font-size: 24px;
    line-height: 1;
    font-weight: 600;
    letter-spacing: -.02em;
  }

  span {
    color: #ff4b12;
    font-size: 9px;
    font-weight: 800;
    letter-spacing: .08em;
  }
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 22px;

  a {
    color: #111;
    text-decoration: none;
    font-size: 10px;
    font-weight: 800;
    letter-spacing: .05em;
    text-transform: uppercase;
  }

  a:hover { color: #ff4b12; }

  @media (max-width: 700px) {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    display: grid;
    padding: 18px 20px 24px;
    background: #f3f0e8;
    border-bottom: 1px solid rgba(17, 17, 17, 0.22);
    opacity: ${({ $open }) => ($open ? 1 : 0)};
    visibility: ${({ $open }) => ($open ? 'visible' : 'hidden')};
    transform: translateY(${({ $open }) => ($open ? '0' : '-8px')});
    transition: opacity 160ms ease, transform 160ms ease, visibility 160ms ease;

    a { font-size: 18px; }
  }
`;

const Burger = styled.button`
  display: none;
  width: 38px;
  height: 38px;
  padding: 0;
  border: 1px solid rgba(17, 17, 17, .25);
  background: transparent;
  color: #111;
  cursor: pointer;

  @media (max-width: 700px) {
    display: inline-grid;
    place-items: center;
  }
`;

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
    <Nav>
      <Wordmark to="/" onClick={() => setOpen(false)}>
        <strong>Tito Zwane</strong>
        <span>Portfolio / 26</span>
      </Wordmark>

      <Burger
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-label={open ? 'Close navigation' : 'Open navigation'}
      >
        {open ? '×' : '＋'}
      </Burger>

      <NavLinks $open={open}>
        <a href="#projects" onClick={(event) => handleScroll(event, '#projects')}>Work</a>
        <a href="#about" onClick={(event) => handleScroll(event, '#about')}>About</a>
        <Link to="/resume" onClick={() => setOpen(false)}>Resume</Link>
        <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>
      </NavLinks>
    </Nav>
  );
}
