import { Link, useParams } from 'react-router-dom';
import { projects, getProject } from '../data/projects.js';
import { ArrowLeftIcon, ArrowRightIcon } from '../components/Icons.jsx';
import NotFound from './NotFound.jsx';

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = getProject(slug);
  if (!project) return <NotFound />;

  const index = projects.indexOf(project);
  const next = projects[(index + 1) % projects.length];

  return (
    <article className="case" aria-label={`${project.name} case study`}>
      <h1 className="visually-hidden">{project.name} — UI/UX case study</h1>

      {/* The case study is delivered as tall artwork, split into slices so it loads progressively */}
      <div className="case__art">
        {project.slices.map((s, i) => (
          <img
            key={s.src}
            src={s.src}
            width={s.width}
            height={s.height}
            alt={i === 0 ? `${project.name} case study` : ''}
            loading={i < 2 ? 'eager' : 'lazy'}
            decoding="async"
          />
        ))}
      </div>

      <nav className="case__nav container" aria-label="More projects">
        <Link to="/projects" className="case__navlink">
          <ArrowLeftIcon /> All projects
        </Link>
        <Link to={`/projects/${next.slug}`} className="case__navlink case__navlink--next">
          <span>
            <small>Next project</small>
            {next.name}
          </span>
          <ArrowRightIcon />
        </Link>
      </nav>
    </article>
  );
}
