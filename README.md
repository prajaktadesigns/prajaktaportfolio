# Prajakta — Portfolio (React + Vite)

## Run locally
```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in /dist
```

## Edit content
- `src/data/profile.js` — name, contact, social links, skills, about text, experience, education, certificates
- `src/data/projects.js` — project names, categories, descriptions, order
- `public/resume.pdf` — add the resume here (Resume buttons link to it)

## Structure
```
src/
  components/  Navbar, Footer, ProjectCard, Icons
  pages/       Home, Projects, ProjectDetail, About, NotFound
  assets/      optimized WebP images (case studies are split into slices)
  data/        all site content
  styles.css   design tokens + all styles
```

## Deploy to Netlify
Build command: `npm run build` · Publish directory: `dist`
`public/_redirects` is included so routes like /about work on refresh.
