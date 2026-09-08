import { useState } from 'react'

function Experience() {
  const [activePoint, setActivePoint] = useState(null)

  const responsibilities = [
    'Developed and maintained web applications and backend services for business requirements.',
    'Built REST APIs, database queries, and application integrations for various modules.',
    'Implemented new features, enhancements, and workflow changes based on project requirements.',
    'Debugged application issues and optimized existing functionality to improve reliability and performance.',
    'Collaborated with team members to deliver software features and provide ongoing application support.',
  ]

  const technologies = [
    'PHP',
    'CodeIgniter 4',
    'MySQL',
    'JavaScript',
    'REST APIs',
  ]

  return (
    <section
      id="experience"
      className="
        relative overflow-hidden
        bg-[#F6F7FB]
        px-5 py-24
        text-[#171725]
        dark:bg-[#08090D]
        dark:text-[#F4F4F8]
        sm:px-8 sm:py-28
        lg:px-10 lg:py-32
      "
    >
      {/* Background number */}
      <div
        className="
          pointer-events-none absolute
          -right-10 top-20
          select-none
          text-[220px]
          font-bold
          leading-none
          tracking-[-0.08em]
          text-black/[0.025]
          dark:text-white/[0.025]
          sm:text-[320px]
          lg:text-[420px]
        "
      >
        01
      </div>

      <div className="relative mx-auto max-w-[1400px]">

        {/* Section header */}
        <div className="mb-20 grid gap-8 lg:grid-cols-[180px_1fr] lg:gap-16">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-black/40 dark:text-white/40">
              03 / Experience
            </p>
          </div>

          <div>
            <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#171725]/40 dark:text-white/40">
              Professional journey
            </p>

            <h2 className="max-w-4xl text-4xl font-semibold tracking-[-0.05em] sm:text-5xl lg:text-6xl">
              Turning requirements into
              <span className="text-black/30 dark:text-white/30">
                {' '}working software.
              </span>
            </h2>
          </div>
        </div>

        {/* Experience */}
        <div className="lg:ml-[180px]">

          {/* Top information */}
          <div
            className="
              relative
              grid gap-10
              border-y border-black/10
              py-10
              dark:border-white/10
              lg:grid-cols-[1fr_220px]
              lg:gap-20
              lg:py-14
            "
          >

            <div>
              <div className="mb-6 flex flex-wrap items-center gap-3">
                <span
                  className="
                    rounded-full
                    bg-[#e1fa6b]
                    px-3 py-1.5
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-wider
                    text-[#171725]
                  "
                >
                  Current Role
                </span>

                <span className="text-xs text-black/40 dark:text-white/40">
                  Full-time
                </span>
              </div>

              <h3
                className="
                  text-3xl
                  font-semibold
                  tracking-[-0.04em]
                  sm:text-4xl
                  lg:text-5xl
                "
              >
                Junior Software Developer
              </h3>

              <p className="mt-3 text-base font-medium text-black/50 dark:text-white/50">
                MVG Digital Consulting Pvt. Ltd.
              </p>
            </div>

            <div className="lg:text-right">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-black/35 dark:text-white/35">
                Role focus
              </p>

              <p className="mt-3 text-sm leading-6 text-black/55 dark:text-white/55">
                Full-Stack Development
                <br />
                Backend & APIs
                <br />
                Business Applications
              </p>
            </div>
          </div>

          {/* Main experience area */}
          <div className="grid gap-14 py-14 lg:grid-cols-[1fr_220px] lg:gap-20">

            {/* Responsibilities */}
            <div>
              <div className="mb-8 flex items-center justify-between">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-black/40 dark:text-white/40">
                  What I worked on
                </p>

                <span className="text-[10px] text-black/30 dark:text-white/30">
                  05 Contributions
                </span>
              </div>

              <div className="relative">

                {/* Animated vertical line */}
                <div
                  className="
                    absolute left-[15px] top-0 bottom-0
                    w-px
                    bg-black/10
                    dark:bg-white/10
                  "
                />

                <div
                  className="
                    absolute left-[15px] top-0
                    h-full
                    w-px
                    origin-top
                    animate-[growLine_1.5s_ease-out_forwards]
                    bg-[#e1fa6b]
                  "
                />

                <div className="space-y-1">
                  {responsibilities.map((item, index) => (
                    <div
                      key={index}
                      onMouseEnter={() => setActivePoint(index)}
                      onMouseLeave={() => setActivePoint(null)}
                      className="
                        group
                        relative
                        flex gap-7
                        rounded-2xl
                        py-5 pl-0
                        transition-all
                        duration-300
                        hover:bg-black/[0.025]
                        dark:hover:bg-white/[0.025]
                        sm:py-6
                      "
                    >

                      {/* Number point */}
                      <div className="relative z-10 flex w-8 shrink-0 justify-center">
                        <div
                          className={`
                            mt-1.5
                            h-3 w-3
                            rounded-full
                            border-2
                            transition-all
                            duration-300
                            ${
                              activePoint === index
                                ? 'scale-150 border-[#e1fa6b] bg-[#e1fa6b]'
                                : 'border-black/20 bg-[#F6F7FB] dark:border-white/20 dark:bg-[#08090D]'
                            }
                          `}
                        />
                      </div>

                      {/* Content */}
                      <div className="flex gap-5">
                        <span
                          className="
                            pt-0.5
                            text-[11px]
                            font-semibold
                            text-black/25
                            dark:text-white/25
                            transition-colors
                            duration-300
                            group-hover:text-[#171725]
                            dark:group-hover:text-white
                          "
                        >
                          0{index + 1}
                        </span>

                        <p
                          className="
                            max-w-2xl
                            text-[14px]
                            leading-7
                            text-black/60
                            transition-colors
                            duration-300
                            group-hover:text-black/90
                            dark:text-white/55
                            dark:group-hover:text-white/90
                            sm:text-[15px]
                          "
                        >
                          {item}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Technologies */}
            <div>
              <p className="mb-6 text-[10px] font-semibold uppercase tracking-[0.2em] text-black/40 dark:text-white/40">
                Technologies
              </p>

              <div className="flex flex-wrap gap-2.5 lg:max-w-[210px]">
                {technologies.map((technology, index) => (
                  <span
                    key={technology}
                    className="
                      group
                      cursor-default
                      rounded-full
                      border
                      border-black/10
                      px-3.5 py-2
                      text-[11px]
                      font-medium
                      text-black/55
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:border-[#e1fa6b]
                      hover:bg-[#e1fa6b]
                      hover:text-[#171725]
                      dark:border-white/10
                      dark:text-white/55
                      dark:hover:border-[#e1fa6b]
                      dark:hover:bg-[#e1fa6b]
                      dark:hover:text-[#171725]
                    "
                    style={{
                      animationDelay: `${index * 100}ms`,
                    }}
                  >
                    {technology}
                  </span>
                ))}
              </div>

              <div className="mt-12 border-t border-black/10 pt-6 dark:border-white/10">
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-black/35 dark:text-white/35">
                  Core areas
                </p>

                <div className="mt-4 space-y-3">
                  {[
                    'Backend Development',
                    'REST API Development',
                    'Database Design',
                    'Application Debugging',
                    'Feature Development',
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 text-[12px] text-black/50 dark:text-white/50"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-[#e1fa6b]" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom statement */}
          <div
            className="
              flex flex-col gap-5
              border-t border-black/10
              pt-8
              dark:border-white/10
              sm:flex-row
              sm:items-center
              sm:justify-between
            "
          >
            <p className="max-w-2xl text-[13px] leading-6 text-black/45 dark:text-white/45">
              Experience focused on building reliable software, solving
              application problems, and continuously improving existing systems.
            </p>

            <span
              className="
                shrink-0
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.18em]
                text-black/30
                dark:text-white/30
              "
            >
              Build · Improve · Support
            </span>
          </div>
        </div>
      </div>

      {/* Animation */}
      <style>{`
        @keyframes growLine {
          from {
            transform: scaleY(0);
          }
          to {
            transform: scaleY(1);
          }
        }
      `}</style>
    </section>
  )
}

export default Experience