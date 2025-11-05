import Spline from '@splinetool/react-spline';
import { ArrowRight, Github, Linkedin } from 'lucide-react';

export default function Hero() {
  return (
    <section id="top" className="relative min-h-screen w-full overflow-hidden">
      {/* 3D Scene */}
      <div className="absolute inset-0 z-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft gradient overlays that don't block interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/30 to-white/80 dark:from-zinc-950/80 dark:via-zinc-900/30 dark:to-zinc-950/90" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-40 pb-24 sm:pt-48 sm:pb-32">
        <div className="max-w-2xl">
          <p className="inline-flex items-center rounded-full border border-zinc-200/60 dark:border-zinc-700/60 bg-white/60 dark:bg-zinc-900/60 backdrop-blur px-3 py-1 text-xs font-medium text-zinc-700 dark:text-zinc-200">
            Tech • Portfolio • Interactive • Playful • Modern
          </p>
          <h1 className="mt-6 text-4xl sm:text-6xl font-bold tracking-tight leading-tight">
            Hi, I’m <span className="text-indigo-600">Fraol Teshome</span>
          </h1>
          <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-300">
            Software Engineer crafting delightful digital experiences with modern web technologies. I build fast, accessible, and elegant products.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-indigo-600 text-white px-5 py-3 font-medium shadow hover:bg-indigo-500 transition-colors"
            >
              View Projects <ArrowRight size={18} />
            </a>
            <a
              href="https://github.com/" target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white/80 dark:bg-zinc-900/80 backdrop-blur border border-zinc-200 dark:border-zinc-800 px-5 py-3 font-medium hover:border-indigo-300 hover:text-indigo-600 transition-colors"
            >
              <Github size={18} /> GitHub
            </a>
            <a
              href="https://linkedin.com/" target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white/80 dark:bg-zinc-900/80 backdrop-blur border border-zinc-200 dark:border-zinc-800 px-5 py-3 font-medium hover:border-indigo-300 hover:text-indigo-600 transition-colors"
            >
              <Linkedin size={18} /> LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
