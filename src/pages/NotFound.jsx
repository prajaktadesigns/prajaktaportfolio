import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section className="container notfound">
      <h1 className="section__title">This page doesn’t exist</h1>
      <p>The link may be old or mistyped. Head back to the projects to keep browsing.</p>
      <Link to="/projects" className="btn btn--primary">See projects</Link>
    </section>
  );
}
