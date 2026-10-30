import manifest from './detail-manifest.json';

// Every case-study slice, keyed by path. Vite turns these into hashed URLs at build time.
const thumbs = import.meta.glob('../assets/projects/*/thumb.webp', { eager: true, import: 'default' });
const covers = import.meta.glob('../assets/projects/*/cover.webp', { eager: true, import: 'default' });
const details = import.meta.glob('../assets/projects/*/detail-*.webp', { eager: true, import: 'default' });

const asset = (map, slug, file) => map[`../assets/projects/${slug}/${file}`];

const detailSlices = (slug) => {
  const { width, heights } = manifest[slug];
  return heights.map((height, i) => ({
    src: asset(details, slug, `detail-${String(i + 1).padStart(2, '0')}.webp`),
    width,
    height,
  }));
};

const base = [
  {
    slug: 'aurelia',
    name: 'AURELIA',
    category: 'Website Design',
    concept: false,
    imageSide: 'right',
    summary:
      'The fashion platform prioritizes user experience with an elegant interface that makes style discovery and shopping effortless. Thoughtful layouts enhance product visibility, while curated visuals and interactive elements create an engaging experience, inspiring users to explore styles and discover their perfect looks.',
  },
  {
    slug: 'styleza',
    name: 'Styleza',
    category: 'App Design',
    concept: true,
    imageSide: 'left',
    summary:
      'The fashion app prioritizes user experience with an intuitive interface that makes personalized styling and outfit discovery effortless. Thoughtful design simplifies body measurements and outfit customization, while interactive features create an engaging experience, helping users create and explore looks that match their style.',
  },
  {
    slug: 'mechcareer',
    name: 'Mechcareer',
    category: 'App & Website Design',
    concept: false,
    imageSide: 'right',
    summary:
      'The career platform prioritizes user experience with an intuitive interface that simplifies job discovery and application. Thoughtful design makes complex job information easy to understand, while interactive features help users explore relevant opportunities and connect with the right career paths.',
  },
  {
    slug: 'creatorhub',
    name: 'CreatorHub',
    category: 'App Design',
    concept: true,
    imageSide: 'left',
    summary:
      'The creator platform prioritizes user experience with an intuitive interface that simplifies creator discovery and networking. Thoughtful design makes profiles and opportunities easy to explore, while interactive features encourage meaningful connections and collaboration within the creative community.',
  },
];

export const projects = base.map((p) => ({
  ...p,
  thumb: asset(thumbs, p.slug, 'thumb.webp'),
  cover: asset(covers, p.slug, 'cover.webp'),
  slices: detailSlices(p.slug),
}));

export const getProject = (slug) => projects.find((p) => p.slug === slug);
