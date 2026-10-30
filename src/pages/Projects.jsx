import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects.js';

export default function Projects() {
  return (
    <section className="container projects" aria-labelledby="projects-title">
      <h1 id="projects-title" className="page-title">My Projects</h1>

      <div className="plist">
        {projects.map((p, i) => (
          <Fragment key={p.slug}>
          {i > 0 && <hr className="plist__divider" />}
          <article className={`prow prow--image-${p.imageSide}`}>
            <div className="prow__body">
              <h2 className="prow__name">{p.name}</h2>
              <p className="prow__text">{p.summary}</p>
              <Link to={`/projects/${p.slug}`} className="btn btn--primary btn--sm">
                View Project
              </Link>
            </div>
            <div className="prow__media">
              <img src={p.cover} alt={`${p.name} screens`} width="1000" height="1056" loading="lazy" />
            </div>
          </article>
          </Fragment>
        ))}
      </div>
    </section>
  );
}
