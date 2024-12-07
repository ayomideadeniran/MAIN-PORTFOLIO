import React, { useState } from "react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggleClick = () => {
    setMenuOpen(true);
  };

  const handleCloseClick = () => {
    setMenuOpen(false);
  };



  return (
    <>
      {/* <!--==================== HEADER ====================--> */}
      <header className="header" id="header">
        {/* <!-- <div>
          <h1>I'M <span className="auto-type"></span></h1>
        </div> --> */}

        <nav className="nav container">
          <a href="#" className="nav__logo">
            <span>Ayomide</span>
          </a>

          <div
            className={`nav__menu ${menuOpen ? "show-menu" : ""}`}
            id="nav-menu"
          >
            <ul className="nav__list">
              <li className="nav__item">
                <a href="#home" className="nav__link">
                  Home
                </a>
              </li>

              <li className="nav__item">
                <a href="#about" className="nav__link">
                  About
                </a>
              </li>

              <li className="nav__item">
                <a href="#services" className="nav__link">
                  Services
                </a>
              </li>

              <li className="nav__item">
                <a href="#projects" className="nav__link">
                  Projects
                </a>
              </li>

              <li className="nav__item">
                <a href="#contact" className="nav__link">
                  Contact
                </a>
              </li>
            </ul>
            {/* <!-- close button --> */}
            <div
              className="nav__close"
              id="nav-close"
              onClick={handleCloseClick}
            >
              <i className="ri-close-line"></i>
            </div>
          </div>
          {/* <!-- Toggle button --> */}

          <div
            className="nav__toggle"
            id="nav-toggle"
            onClick={handleToggleClick}
          >
            <i className="ri-menu-line"></i>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
