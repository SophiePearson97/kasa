import { NavLink } from "react-router-dom";
import "./Header.css";
import logo from "../../assets/logo-kasa.svg";

function Header() {
  return (
    <header className="kasa-header">
      <div className="kasa-container kasa-header__inner">
        <img className="kasa-header__logo" src={logo} alt="Kasa logo" />

        <nav className="kasa-header__nav">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "kasa-link kasa-link--active" : "kasa-link"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "kasa-link kasa-link--active" : "kasa-link"
            }
          >
            About
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;