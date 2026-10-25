
import React, { useState } from "react";
import "../css/Navbar.css";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Education", id: "education" },
    { name: "Contact", id: "contact" },
  ];

  const handleNavigation = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">

      {/* Logo */}
      <a
        href="#home"
        className="logo"
        onClick={handleNavigation}
      >
        SUMIT<span>.</span>
      </a>

      {/* Navigation Links */}
      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        {navLinks.map((link) => (
          <li key={link.id}>
            <a
              href={`#${link.id}`}
              onClick={handleNavigation}
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Button */}
      <button
        type="button"
        className="hamburger"
        onClick={() => setMenuOpen((prev) => !prev)}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
      >
        {menuOpen ? "✕" : "☰"}
      </button>

    </nav>
  );
};

export default NavBar;
