import { useState, useEffect, useRef } from "react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggleClick = () => {
    setMenuOpen(prev => !prev);
  };

  const handleCloseClick = () => {
    setMenuOpen(false);
  };

  // refs to detect outside clicks
  const navMenuRef = useRef(null);
  const toggleRef = useRef(null);

  useEffect(() => {
    function onDocumentDown(e) {
      if (!menuOpen) return;
      const menu = navMenuRef.current;
      const toggle = toggleRef.current;
      if (menu && !menu.contains(e.target) && toggle && !toggle.contains(e.target)) {
        setMenuOpen(false);
      }
    }

    function onEsc(e) {
      if (e.key === "Escape") setMenuOpen(false);
    }

    document.addEventListener("mousedown", onDocumentDown);
    document.addEventListener("touchstart", onDocumentDown);
    document.addEventListener("keydown", onEsc);

    return () => {
      document.removeEventListener("mousedown", onDocumentDown);
      document.removeEventListener("touchstart", onDocumentDown);
      document.removeEventListener("keydown", onEsc);
    };
  }, [menuOpen]);



  return (
    <>
      {/* <!--==================== HEADER ====================--> */}
      <header className={`header ${menuOpen ? 'menu-open' : ''}`} id="header">
        {/* <!-- <div>
          <h1>I'M <span className="auto-type"></span></h1>
        </div> --> */}

        <nav className="nav container">
          <a href="#" className="nav__logo">
            <span> <strong>Ayomide</strong> </span>
          </a>

          <div
            className={`nav__menu ${menuOpen ? "show-menu" : ""}`}
            id="nav-menu"
            ref={navMenuRef}
            aria-hidden={!menuOpen}
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
            ref={toggleRef}
            role="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <i className="ri-menu-line"></i>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
