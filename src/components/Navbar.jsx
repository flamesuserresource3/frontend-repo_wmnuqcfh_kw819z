import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navClasses = `fixed top-0 inset-x-0 z-50 transition-all ${
    scrolled ? 'backdrop-blur-md bg-white/60 dark:bg-zinc-900/60 shadow-sm' : 'bg-transparent'
  }`;

  const NavLinks = () => (
    <ul className="flex flex-col md:flex-row md:items-center gap-6 text-sm font-medium">
      <li><a href="#about" className="hover:text-indigo-600">About</a></li>
      <li><a href="#projects" className="hover:text-indigo-600">Projects</a></li>
      <li><a href="#contact" className="hover:text-indigo-600">Contact</a></li>
      <li>
        <a
          href="#contact"
          className="inline-flex items-center rounded-full bg-indigo-600 text-white px-4 py-2 hover:bg-indigo-500 transition-colors"
        >
          Let’s Talk
        </a>
      </li>
    </ul>
  );

  return (
    <header className={navClasses}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#top" className="font-semibold tracking-tight text-lg">
            <span className="text-indigo-600">Fraol</span> Teshome
          </a>

          <nav className="hidden md:block">
            <NavLinks />
          </nav>

          <button
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800"
            aria-label="Toggle Menu"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/80 backdrop-blur">
          <div className="mx-auto max-w-7xl px-4 py-4">
            <NavLinks />
          </div>
        </div>
      )}
    </header>
  );
}
