import { Link } from "react-router-dom";
import Title from "./Title";

export default function Footer() {
  return (
    <footer className="footer">
      <section className="footer__section footer__title-section">
        <Title className="footer__title" />
        <p>&copy; Bloggify 2023 All Rights Reserved</p>
      </section>
      <section className="footer__section">
        <h2 className="footer__section-title">Company</h2>
        <Link className="footer__link" to="/company/contactUs">
          Contact Us
        </Link>
        <Link className="footer__link" to="/company/aboutUs">
          About Us
        </Link>
        <Link className="footer__link" to="/company/employees">
          Employees
        </Link>
        <Link className="footer__link" to="/company/contactUs">
          Our Offices
        </Link>
      </section>
      <section className="footer__section">
        <h2 className="footer__section-title">Resources</h2>
        <Link className="footer__link" to="/resources/blog">
          Blog
        </Link>
        <Link className="footer__link" to="/resources/clients">
          Clients
        </Link>
        <Link className="footer__link" to="/resources/clients">
          Technologies
        </Link>
        <Link className="footer__link" to="/resources/clients">
          Sustainability
        </Link>
      </section>
      <section className="footer__section">
        <h2 className="footer__section-title">Miscellaneous</h2>
        <Link className="footer__link" to="/privacyPolicy">
          Privacy Policy
        </Link>
        <Link className="footer__link" to="/termsOfService">
          Terms of Service
        </Link>
        <Link className="footer__link" to="/faq">
          FAQ
        </Link>
        <Link className="footer__link" to="/gdpr">
          GDPR
        </Link>
      </section>
    </footer>
  );
}
