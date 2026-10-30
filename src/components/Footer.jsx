import { Link } from 'react-router-dom';
import { profile } from '../data/profile.js';
import { WhatsAppIcon, MailIcon, PhoneIcon, InstagramIcon } from './Icons.jsx';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <section className="cta container" aria-labelledby="cta-title">
        <h2 id="cta-title" className="cta__title">
          Let’s make something amazing together.
        </h2>
        <a className="btn btn--primary btn--lg" href={`mailto:${profile.email}`}>
          Hire me
        </a>
      </section>

      <div className="footer__main">
        <div className="container footer__grid">
          <div className="footer__about">
            <p>{profile.footerBio}</p>
            <ul className="footer__social" aria-label="Get in touch">
              <li>
                <a href={profile.whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp">
                  <WhatsAppIcon width="24" height="24" />
                </a>
              </li>
              <li>
                <a href={`mailto:${profile.email}`} aria-label="Email">
                  <MailIcon width="24" height="24" />
                </a>
              </li>
              <li>
                <a href={profile.phoneHref} aria-label="Call">
                  <PhoneIcon width="22" height="22" />
                </a>
              </li>
              <li>
                <a href={profile.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">
                  <InstagramIcon width="24" height="24" />
                </a>
              </li>
            </ul>
          </div>

          <div className="footer__col">
            <h3>Navigation</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><a href={profile.resume} target="_blank" rel="noreferrer">Resume</a></li>
              <li><Link to="/projects">Project</Link></li>
            </ul>
          </div>

          <div className="footer__col">
            <h3>Contact</h3>
            <ul>
              <li><a href={profile.phoneHref}>{profile.phone}</a></li>
              <li><a className="u-underline" href={`mailto:${profile.email}`}>{profile.email}</a></li>
              <li><a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a></li>
            </ul>
          </div>

          <div className="footer__col">
            <h3>More</h3>
            <ul>
              <li><a href={profile.behance} target="_blank" rel="noreferrer">Be hance</a></li>
              <li><a href={profile.instagram} target="_blank" rel="noreferrer">Instagram</a></li>
              <li><a href={profile.resume} target="_blank" rel="noreferrer">Resume</a></li>
              <li><Link to="/projects">Project</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <p className="footer__credit">
        © {year} Designed &amp; Developed by{' '}
        <a href="https://nithishdesigns.netlify.app/" target="_blank" rel="noreferrer" className="footer__ns">
          NS
        </a>
      </p>
    </footer>
  );
}
