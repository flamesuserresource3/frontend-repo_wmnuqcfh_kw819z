import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Interactive 3D Portfolio',
    description:
      'A playful, modern portfolio powered by WebGL and 3D interactions to showcase work with flair.',
    tags: ['React', 'Spline', 'Tailwind'],
    link: '#',
  },
  {
    title: 'Realtime Chat App',
    description:
      'A fast, reliable messaging app with presence, typing indicators, and message reactions.',
    tags: ['React', 'WebSocket', 'FastAPI'],
    link: '#',
  },
  {
    title: 'E‑commerce UI Kit',
    description:
      'A polished set of components and flows for modern online stores with responsive design.',
    tags: ['Design System', 'Accessibility', 'UX'],
    link: '#',
  },
];

function Tag({ label }) {
  return (
    <span className="inline-flex items-center rounded-full bg-zinc-100 dark:bg-zinc-800 px-2.5 py-1 text-xs font-medium text-zinc-700 dark:text-zinc-200">
      {label}
    </span>
  );
}

function ProjectCard({ title, description, tags, link }) {
  return (
    <a
      href={link}
      className="group block rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/70 backdrop-blur p-6 hover:shadow-lg transition-all"
    >
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <span className="opacity-0 group-hover:opacity-100 transition-opacity text-indigo-600">
          <ExternalLink size={18} />
        </span>
      </div>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">{description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((t) => (
          <Tag key={t} label={t} />
        ))}
      </div>
    </a>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Featured Projects</h2>
          <p className="mt-2 text-zinc-600 dark:text-zinc-300">
            A selection of things I’ve designed and built recently.
          </p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}
