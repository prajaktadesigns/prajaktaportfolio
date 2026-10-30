import { useState } from 'react';
import { profile } from '../data/profile.js';
import traveling from '../assets/hobbies/traveling.webp';
import photography from '../assets/hobbies/photography.webp';
import gaming from '../assets/hobbies/gaming.webp';
import reading from '../assets/hobbies/reading.webp';
import exploring from '../assets/hobbies/exploring.webp';

const hobbies = [
  { label: 'Traveling', img: traveling },
  { label: 'Photography', img: photography },
  { label: 'Gaming', img: gaming },
  { label: 'Reading', img: reading },
  { label: 'Exploring', img: exploring },
];

function Timeline({ title, items }) {
  return (
    <section className="timeline" aria-label={title}>
      <h2 className="section__title">{title}</h2>
      <ol className="timeline__list">
        {items.map((it) => (
          <li key={it.title} className="timeline__item">
            <p className="timeline__date">{it.date}</p>
            <div>
              <h3 className="timeline__title">{it.title}</h3>
              <p className="timeline__sub">{it.subtitle}</p>
              <p className="timeline__text">{it.text}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

export default function About() {
  const [active, setActive] = useState(0);

  return (
    <div className="container about">
      <section className="about__intro">
        <div className="about__copy">
          <h1 className="section__title">About me</h1>
          {profile.about.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
        </div>

        <div className="loves">
          <h2 className="loves__title" id="loves-title">Things I love to do</h2>
          <div className="loves__tabs" role="tablist" aria-labelledby="loves-title">
            {hobbies.map((h, i) => (
              <button
                key={h.label}
                role="tab"
                id={`tab-${i}`}
                aria-selected={active === i}
                aria-controls="loves-panel"
                className="pill"
                onClick={() => setActive(i)}
              >
                {h.label}
              </button>
            ))}
          </div>
          <div className="loves__panel" id="loves-panel" role="tabpanel" aria-labelledby={`tab-${active}`}>
            {hobbies.map((h, i) => (
              <img
                key={h.label}
                src={h.img}
                alt={h.label}
                width="607"
                height="360"
                className={i === active ? 'is-active' : ''}
                aria-hidden={i !== active}
              />
            ))}
          </div>
        </div>
      </section>

      <Timeline title="My Experience" items={profile.experience} />
      <Timeline title="Education" items={profile.education} />
      <Timeline title="Certificates" items={profile.certificates} />
    </div>
  );
}
