import { Mail, Github, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-gradient-to-br from-white to-zinc-50 dark:from-zinc-950 dark:to-zinc-900 p-10">
          <div className="max-w-2xl">
            <h3 className="text-3xl font-bold">Let’s build something great</h3>
            <p className="mt-2 text-zinc-600 dark:text-zinc-300">
              I’m open to freelance work, collaborations, or just a friendly chat.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="mailto:hello@fraol.design"
                className="inline-flex items-center gap-2 rounded-full bg-indigo-600 text-white px-5 py-3 font-medium shadow hover:bg-indigo-500 transition-colors"
              >
                <Mail size={18} /> Email Me
              </a>
              <a
                href="https://github.com/" target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-zinc-200 dark:border-zinc-800 px-5 py-3 font-medium hover:border-indigo-300 hover:text-indigo-600 transition-colors"
              >
                <Github size={18} /> GitHub
              </a>
              <a
                href="https://linkedin.com/" target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-zinc-200 dark:border-zinc-800 px-5 py-3 font-medium hover:border-indigo-300 hover:text-indigo-600 transition-colors"
              >
                <Linkedin size={18} /> LinkedIn
              </a>
            </div>
          </div>
        </div>

        <p className="mt-10 text-center text-sm text-zinc-500">© {new Date().getFullYear()} Fraol Teshome. All rights reserved.</p>
      </div>
    </section>
  );
}
