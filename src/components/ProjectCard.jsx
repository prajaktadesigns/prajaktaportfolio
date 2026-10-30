import { Link } from 'react-router-dom';

// Card used in the "Selected Projects" grid on the home page.
export default function ProjectCard({ project }) {
  return (
    <article className="pcard">
      <Link to={`/projects/${project.slug}`} className="pcard__link">
        <div className="pcard__media">
          <img src={project.thumb} alt={`${project.name} preview`} width="700" height="452" loading="lazy" />
        </div>
        <p className="pcard__category">{project.category}</p>
        <h3 className="pcard__name">
          {project.name}
          {project.concept && <span className="pcard__concept"> (Concept)</span>}
        </h3>
      </Link>
    </article>
  );
}
