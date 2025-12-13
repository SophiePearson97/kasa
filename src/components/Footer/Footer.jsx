import "./Footer.css";
import logo from "../../assets/logo-kasa-white.svg";

function Footer() {
  return (
    <footer className="kasa-footer">
      <div className="kasa-footer__inner">
        <img className="kasa-footer__logo" src={logo} alt="Kasa logo" />
        <p className="kasa-footer__text">© 2020 Kasa. All rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;