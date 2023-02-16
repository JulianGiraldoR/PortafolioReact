import React from "react";
import "./footer.css"

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Julian Giraldo</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>
          <li>
            <a href="#Projects" className="footer__link">
              Projects
            </a>
          </li>
          <li>
            <a href="#home" className="footer__link">
              Home
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://www.linkedin.com/in/julian-andres-giraldo-riveros-8b9b88163/"
            className="footer__social-link"
            target="_blank"
          >
            <i class="uil uil-linkedin"></i>
          </a>

          <a
            href="https://github.com/JulianGiraldoR"
            className="footer__social-link"
            target="_blank"
          >
            <i class="uil uil-github"></i>
          </a>

          <a
            href="https://www.talentpitch.co/user/julian-andres-giraldo"
            className="footer__social-link"
            target="_blank"
          >
            <i class="uil uil-megaphone"></i>
          </a>
        </div>

        <span className="footer__copy"> &#169; JulianGiraldoCoder. All rigths reserved</span>
      </div>
    </footer>
  );
};
export default Footer;
