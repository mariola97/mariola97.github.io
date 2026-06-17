import React from 'react'
import logo from '../assets/img/ime.png'

const Header = () => {
  return (
    <header className="site-header">
      <nav className="site-nav" aria-label="Primary navigation">
        <div className="site-nav-left">
            <img src={logo} alt="Logo" className="nav-logo" />
          <a href="#home" className="nav-link">Home</a>
          <a href="#about" className="nav-link">About</a>
          
          <a href="#projects" className="nav-link">Projects</a>
          <a href="#contact" className="nav-link">Contact</a>
        </div>

        <div className="site-nav-right">
          <a href="https://www.linkedin.com/in/mario-maglica-54064b222/" target="_blank" rel="noreferrer" className="social-link" aria-label="LinkedIn">
            <svg viewBox="0 0 24 24" className="social-icon" aria-hidden="true">
              <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8.5h5V24H0V8.5zm7.5 0h4.75v2.16h.07c.66-1.24 2.27-2.55 4.67-2.55 5 0 5.92 3.29 5.92 7.55V24h-5V15.4c0-2.03-.04-4.65-2.84-4.65-2.85 0-3.28 2.22-3.28 4.51V24H7.5V8.5z" />
            </svg>
          </a>
          <a href="https://www.facebook.com/mario.maglica.2025" target="_blank" rel="noreferrer" className="social-link" aria-label="Facebook">
            <svg viewBox="0 0 24 24" className="social-icon" aria-hidden="true">
              <path d="M22.675 0H1.325C.593 0 0 .593 0 1.326v21.348C0 23.407.593 24 1.325 24h11.494v-9.294H9.691V11.08h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.464.099 2.796.143v3.24l-1.918.001c-1.504 0-1.795.716-1.795 1.765v2.314h3.587l-.467 3.626h-3.12V24h6.116C23.407 24 24 23.407 24 22.674V1.326C24 .593 23.407 0 22.675 0z" />
            </svg>
          </a>
          <a href="https://www.instagram.com/mario_maglica/" target="_blank" rel="noreferrer" className="social-link" aria-label="Instagram">
            <svg viewBox="0 0 24 24" className="social-icon" aria-hidden="true">
              <path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.366.062 2.633.34 3.608 1.316.976.976 1.254 2.243 1.316 3.608.058 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.062 1.365-.34 2.632-1.316 3.608-.976.976-2.243 1.254-3.608 1.316-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07c-1.365-.062-2.632-.34-3.608-1.316-.976-.976-1.254-2.243-1.316-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.849c.062-1.365.34-2.632 1.316-3.608C4.525 2.503 5.792 2.225 7.157 2.163 8.412 2.105 8.792 2.163 12 2.163zm0-2.163C8.736 0 8.332.012 7.052.07 5.766.129 4.533.409 3.515 1.427 2.497 2.445 2.217 3.678 2.158 4.964.1 6.244 0 6.648 0 12s.1 5.756.158 7.036c.059 1.286.339 2.519 1.357 3.537 1.018 1.018 2.251 1.298 3.537 1.357 1.28.058 1.684.158 7.036.158s5.756-.1 7.036-.158c1.286-.059 2.519-.339 3.537-1.357 1.018-1.018 1.298-2.251 1.357-3.537.058-1.28.158-1.684.158-7.036s-.1-5.756-.158-7.036c-.059-1.286-.339-2.519-1.357-3.537-1.018-1.018-2.251-1.298-3.537-1.357C15.668.012 15.264 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z" />
            </svg>
          </a>
        </div>
      </nav>
    </header>
  )
}

export default Header
