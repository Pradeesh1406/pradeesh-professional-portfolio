function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen bg-[#F6F7FB] px-5 py-24 text-zinc-900 dark:bg-[#08090D] dark:text-white"
    >
      <div className="mx-auto max-w-[1400px]">

        {/* Section label */}
        <div className="flex items-center gap-4">
          <span className="h-px w-10 bg-[#e1fa6b]" />

          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-zinc-500 dark:text-white/40">
            05 / Contact
          </p>
        </div>

        {/* Heading */}
        <div className="mt-12">
          <h2 className="text-5xl font-semibold tracking-tight sm:text-6xl lg:text-8xl">
            Let's build
            <br />
            <span className="text-zinc-400 dark:text-white/30">
              something meaningful.
            </span>
          </h2>
        </div>

        {/* Description */}
        <p className="mt-8 max-w-2xl text-base leading-7 text-zinc-600 dark:text-white/50 sm:text-lg">
          I'm open to software development opportunities where I can
          contribute to real-world products, solve meaningful problems,
          and continue growing as a developer.
        </p>

        {/* Contact cards */}
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">

          {/* Email */}
          <a
            href="mailto:pradeesh1406@gmail.com"
            className="group rounded-2xl border border-zinc-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#e1fa6b] dark:border-white/10 dark:bg-white/[0.03]"
          >
            <p className="text-xs uppercase tracking-widest text-zinc-400 dark:text-white/30">
              Email
            </p>

            <p className="mt-4 text-base font-medium">
              pradeesh1406@gmail.com
            </p>

            <p className="mt-6 text-sm text-zinc-400 transition-colors group-hover:text-zinc-700 dark:text-white/30 dark:group-hover:text-white/70">
              Get in touch →
            </p>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/pradeesh-g-506774252/"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-2xl border border-zinc-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#e1fa6b] dark:border-white/10 dark:bg-white/[0.03]"
          >
            <p className="text-xs uppercase tracking-widest text-zinc-400 dark:text-white/30">
              LinkedIn
            </p>

            <p className="mt-4 text-base font-medium">
              Connect with me
            </p>

            <p className="mt-6 text-sm text-zinc-400 transition-colors group-hover:text-zinc-700 dark:text-white/30 dark:group-hover:text-white/70">
              View profile →
            </p>
          </a>

         {/* Mobile */}
<a
  href="tel:+919876543210"
  className="group rounded-2xl border border-zinc-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#e1fa6b] dark:border-white/10 dark:bg-white/[0.03]"
>
  <p className="text-xs uppercase tracking-widest text-zinc-400 dark:text-white/30">
    Mobile
  </p>

  <p className="mt-4 text-base font-medium">
    +91 9626020986
  </p>

  <p className="mt-6 text-sm text-zinc-400 transition-colors group-hover:text-zinc-700 dark:text-white/30 dark:group-hover:text-white/70">
    Call me →
  </p>
</a>

        </div>

        {/* Resume */}
        <div className="mt-10">
          <a
            href="/pradeesh_resume.pdf"
            download
            className="inline-flex items-center gap-3 rounded-full bg-zinc-900 px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#e1fa6b] hover:text-zinc-900 dark:bg-white dark:text-zinc-900 dark:hover:bg-[#e1fa6b]"
          >
            Download Resume
            <span>↗</span>
          </a>
        </div>

        {/* Footer */}
        <div className="mt-24 border-t border-zinc-200 pt-6 dark:border-white/10">
          <div className="flex flex-col gap-2 text-xs text-zinc-400 dark:text-white/30 sm:flex-row sm:justify-between">
            <p>© {new Date().getFullYear()} Pradeesh G</p>

            <p>Software Developer</p>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Contact