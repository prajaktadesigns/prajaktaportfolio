import { Link } from 'react-router-dom';
import { profile } from '../data/profile.js';
import { projects } from '../data/projects.js';
import ProjectCard from '../components/ProjectCard.jsx';
import { PhoneOutlineIcon, MailOutlineIcon, ArrowRightIcon } from '../components/Icons.jsx';
import hero from '../assets/home/hero.webp';
import heroColor from '../assets/home/hero-color.webp';
import moments1 from '../assets/home/moments-1.webp';
import moments2 from '../assets/home/moments-2.webp';

export default function Home() {
  const half = Math.ceil(profile.skills.length / 2);
  const skillCols = [profile.skills.slice(0, half), profile.skills.slice(half)];

  return (
    <>
      {/* Hero */}
      <section className="hero container" aria-labelledby="hero-title">
        <div className="hero__text">
          <p className="hero__hi">Hi I am</p>
          <h1 id="hero-title" className="hero__name">
            I’m {profile.name},
          </h1>
          <p className="hero__role">{profile.role}</p>
          <p className="hero__intro">{profile.heroIntro}</p>
          <ul className="hero__contact">
            <li>
              <PhoneOutlineIcon className="icon-blue" width="18" height="18" />
              <a href={profile.phoneHref}>{profile.phone}</a>
            </li>
            <li>
              <MailOutlineIcon className="icon-blue" width="18" height="18" />
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </li>
          </ul>
        </div>

        <div className="hero__visual">
          <div className="hero__glow" aria-hidden="true" />
          <img
            className="hero__photo"
            src={hero}
            alt={`Portrait of ${profile.name}`}
            width="900"
            height="1119"
            fetchpriority="high"
          />
          {/* Color copy revealed in a spotlight that follows the cursor */}
          <img
            className="hero__photo hero__photo--color"
            src={heroColor}
            alt=""
            aria-hidden="true"
            width="900"
            height="1119"
            onPointerMove={(e) => {
              const el = e.currentTarget;
              const r = el.getBoundingClientRect();
              el.style.setProperty('--mx', `${e.clientX - r.left}px`);
              el.style.setProperty('--my', `${e.clientY - r.top}px`);
            }}
          />
          {profile.heroTags.map((t, i) => (
            <span key={t.label} className={`chip chip--${t.color} chip--pos${i + 1}`}>
              {t.label}
            </span>
          ))}
        </div>
      </section>

      {/* Help / skills */}
      <section className="container">
        <div className="help" aria-labelledby="help-title">
          <h2 id="help-title" className="help__title">{profile.helpTitle}</h2>
          <p className="help__text">{profile.helpText}</p>
          <div className="help__skills">
            {skillCols.map((col, i) => (
              <ul key={i}>
                {col.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </section>

      {/* Selected projects */}
      <section className="container section" aria-labelledby="selected-title">
        <div className="section__head">
          <h2 id="selected-title" className="section__title">Selected Projects</h2>
          <Link to="/projects" className="link-plain">See all</Link>
        </div>
        <div className="pgrid">
          {projects.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </section>

      {/* More of what I've been up to */}
      <section className="container section moments" aria-labelledby="moments-title">
        <h2 id="moments-title" className="section__title section__title--center">
          More of What I've Been up to
        </h2>
        <div className="moments__grid">
          <img src={moments1} alt="Prajakta with friends at a college celebration" width="712" height="553" loading="lazy" />
          <img src={moments2} alt="Prajakta with friends on the campus lawn" width="712" height="553" loading="lazy" />
        </div>
        <Link to="/about" className="btn btn--primary btn--lg moments__btn">
          Know more about me <ArrowRightIcon width="22" height="22" />
        </Link>
      </section>
    </>
  );
}
