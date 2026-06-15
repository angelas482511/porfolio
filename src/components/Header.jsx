import { useState } from 'react'

const navLinks = [
  { label: 'Inicio', href: '#hero' },
  { label: 'Proyectos', href: '#projects' },
  { label: 'Experiencia', href: '#experience' },
  { label: 'Formación', href: '#education' },
  { label: 'Contacto', href: '#contact' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="header">
      <div className="header-inner">
        <a href="#hero" className="header-logo">
          ÁV<span className="header-logo-dot">.</span>
        </a>
        <nav className={`header-nav ${menuOpen ? 'open' : ''}`}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="header-link"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menú"
        >
          <span className={`menu-bar ${menuOpen ? 'open' : ''}`} />
          <span className={`menu-bar ${menuOpen ? 'open' : ''}`} />
          <span className={`menu-bar ${menuOpen ? 'open' : ''}`} />
        </button>
      </div>
    </header>
  )
}
