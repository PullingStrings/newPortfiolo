// src/components/layout/Navbar.jsx
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: ${({ theme }) => theme.colors.background};
  position: sticky;
  top: 0;
  z-index: 1000;
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGray};
`;

const Logo = styled.div`
  height: 100px;
  width: 100px;
  border-radius: 50%;
  background-image: url("/profile-pic-animated.png");
  background-size: cover;
  background-position: center;
  transition: transform 0.3s ease;
  flex-shrink: 0;

  &:hover {
    transform: scale(1.05);
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  font-size: 2.5rem;
  font-weight: 500;

  /* Mobile dropdown */
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    position: absolute;
    top: 100%;          /* drop below navbar so it doesn't cover logo */
    left: 0;
    right: 0;
    background: ${({ theme }) => theme.colors.background};
    padding: 1rem 1.25rem;
    border-bottom: 1px solid ${({ theme }) => theme.colors.lightGray};

    /* animation states */
    opacity: ${({ $open }) => ($open ? 1 : 0)};
    transform: translateY(${({ $open }) => ($open ? "0" : "-8px")});
    visibility: ${({ $open }) => ($open ? "visible" : "hidden")};
    pointer-events: ${({ $open }) => ($open ? "auto" : "none")};
    transition:
      opacity 180ms ease,
      transform 180ms ease,
      visibility 0s linear ${({ $open }) => ($open ? "0s" : "180ms")};

    /* reduced motion respect */
    @media (prefers-reduced-motion: reduce) {
      transition: none;
      transform: none;
    }

    /* optional: slight stagger on links when opening */
    a, a:visited, a:link {
      transform: translateY(${({ $open }) => ($open ? "0" : "6px")});
      opacity: ${({ $open }) => ($open ? 1 : 0)};
      transition: opacity 200ms ease, transform 200ms ease;
    }
    a:nth-child(1) { transition-delay: ${({ $open }) => ($open ? "40ms" : "0ms")}; }
    a:nth-child(2) { transition-delay: ${({ $open }) => ($open ? "80ms" : "0ms")}; }
    a:nth-child(3) { transition-delay: ${({ $open }) => ($open ? "120ms" : "0ms")}; }
    a:nth-child(4) { transition-delay: ${({ $open }) => ($open ? "160ms" : "0ms")}; }
  }
`;

const Burger = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 6px;
  margin-left: 0.5rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  /* three bars */
  .bar {
    width: 26px;
    height: 2px;
    background: ${({ theme }) => theme.colors.text};
    border-radius: 2px;
    transition: transform 180ms ease, opacity 160ms ease;
  }
  .bar + .bar { margin-top: 6px; }

  /* morph to X when open */
  &[aria-expanded="true"] .bar:nth-child(1) {
    transform: translateY(8px) rotate(45deg);
  }
  &[aria-expanded="true"] .bar:nth-child(2) {
    opacity: 0;
  }
  &[aria-expanded="true"] .bar:nth-child(3) {
    transform: translateY(-8px) rotate(-45deg);
  }

  @media (prefers-reduced-motion: reduce) {
    .bar { transition: none; }
  }
`;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const handleScroll = (e, target) => {
    e.preventDefault();
    if (location.pathname === "/") {
      const section = document.querySelector(target);
      if (section) section.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = `/${target}`;
    }
    setOpen(false);
  };

  const closeMenu = () => setOpen(false);
  const toggleMenu = () => setOpen((o) => !o);

  return (
    <Nav>
      <Link to="/" onClick={closeMenu}>
        <Logo />
      </Link>

      <Burger
        onClick={toggleMenu}
        aria-expanded={open ? "true" : "false"}
        aria-label={open ? "Close menu" : "Open menu"}
      >
        <span className="bar" />
        <span className="bar" />
        <span className="bar" />
      </Burger>

      <NavLinks $open={open}>
        <a href="#about" onClick={(e) => handleScroll(e, "#about")}>About</a>
        <a href="#projects" onClick={(e) => handleScroll(e, "#projects")}>Projects</a>
        <Link to="/resume" onClick={closeMenu}>Resume</Link>
        <Link to="/contact" onClick={closeMenu}>Contact</Link>
      </NavLinks>
    </Nav>
  );
}
