import { ArrowDownRight } from 'lucide-react'

function About() {
  const values = [
    {
      number: '01',
      title: 'Understand',
      text: 'I start by understanding the actual business problem before thinking about the implementation.',
    },
    {
      number: '02',
      title: 'Build',
      text: 'I turn requirements into clean, practical, database-driven applications that are easy to maintain.',
    },
    {
      number: '03',
      title: 'Improve',
      text: 'I continuously debug, optimize, and improve existing functionality to make systems more reliable.',
    },
  ]

  return (
    <section
      id="about"
      className="
        relative overflow-hidden
        bg-[#F6F7FB]
        px-5 py-20
        text-[#171725]
        dark:bg-[#08090D]
        dark:text-[#F4F4F8]
        sm:px-8 sm:py-24
        lg:px-10 lg:py-28
      "
    >
      {/* Subtle background glow */}
      <div
        className="
          pointer-events-none
          absolute
          -right-40
          top-20
          h-[420px]
          w-[420px]
          rounded-full
          bg-[#e1fa6b]/[0.04]
          blur-3xl
          dark:bg-[#e1fa6b]/[0.03]
        "
      />

      {/* Decorative circle */}
      <div
        className="
          pointer-events-none
          absolute
          -right-32
          top-16
          h-[420px]
          w-[420px]
          rounded-full
          border
          border-black/[0.04]
          dark:border-white/[0.04]
          animate-[spin_35s_linear_infinite]
        "
      >
        <div
          className="
            absolute
            left-1/2
            top-0
            h-2
            w-2
            -translate-x-1/2
            rounded-full
            bg-[#e1fa6b]
          "
        />
      </div>

      <div className="relative mx-auto max-w-[1400px]">

        {/* Header */}
        <div className="flex items-center justify-between border-b border-black/10 pb-5 dark:border-white/10">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-black/40 dark:text-white/40">
            04 / About
          </p>

          <p className="hidden text-[10px] font-medium uppercase tracking-[0.18em] text-black/30 dark:text-white/30 sm:block">
            Developer · Problem Solver · Builder
          </p>
        </div>

        {/* Introduction */}
        <div className="grid gap-14 py-16 lg:grid-cols-[1fr_0.75fr] lg:gap-24 lg:py-24">

          {/* Left */}
          <div>
            <p className="mb-6 text-[11px] font-semibold uppercase tracking-[0.2em] text-black/40 dark:text-white/40">
              Who I am
            </p>

            <h2
              className="
                max-w-5xl
                text-[clamp(2.8rem,6vw,6.5rem)]
                font-semibold
                leading-[0.95]
                tracking-[-0.07em]
              "
            >
              I don't just
              <br />

              <span className="text-black/25 dark:text-white/25">
                write code.
              </span>

              <br />

              I solve problems.
            </h2>

            <div className="mt-10 flex items-start gap-4">
              <ArrowDownRight
                size={22}
                strokeWidth={1.5}
                className="mt-1 shrink-0 text-[#171725] dark:text-white"
              />

              <p className="max-w-xl text-[14px] leading-7 text-black/55 dark:text-white/55 sm:text-[15px]">
                I am a Junior Software Developer who enjoys turning
                real-world requirements into useful software. My experience
                covers backend development, APIs, databases, authentication,
                business workflows, and complete web applications.
              </p>
            </div>
          </div>

          {/* Right animated visual */}
          <div className="relative flex items-center justify-center lg:min-h-[450px]">

            <div
              className="
                relative
                flex
                h-[250px]
                w-[250px]
                items-center
                justify-center
                rounded-full
                border
                border-black/10
                dark:border-white/10
                animate-[float_5s_ease-in-out_infinite]
                sm:h-[300px]
                sm:w-[300px]
              "
            >
              {/* Inner rings */}
              <div className="absolute inset-7 rounded-full border border-black/[0.07] dark:border-white/[0.07]" />

              <div className="absolute inset-14 rounded-full border border-black/[0.07] dark:border-white/[0.07]" />

              {/* Center */}
              <div
                className="
                  relative
                  flex
                  h-28
                  w-28
                  items-center
                  justify-center
                  rounded-full
                  bg-[#171725]
                  shadow-[0_20px_60px_rgba(0,0,0,0.12)]
                  dark:bg-white
                  sm:h-32
                  sm:w-32
                "
              >
                <div className="text-center">
                  <p className="text-2xl font-bold tracking-[-0.05em] text-[#e1fa6b] dark:text-[#171725]">
                    Pradeesh G
                  </p>

                  <p className="mt-1 text-[8px] uppercase tracking-[0.2em] text-[#e1fa6b] dark:text-[#171725]">
                    Developer
                  </p>
                </div>
              </div>

              {/* Orbit points */}
              <span className="absolute left-8 top-10 h-2 w-2 rounded-full bg-[#e1fa6b]" />

              <span className="absolute bottom-8 right-10 h-2.5 w-2.5 rounded-full bg-[#171725] dark:bg-white" />

              <span className="absolute right-2 top-1/2 h-1.5 w-1.5 rounded-full bg-black/20 dark:bg-white/20" />
            </div>
          </div>
        </div>

        {/* Principles */}
        <div className="border-t border-black/10 pt-10 dark:border-white/10">

          <div className="mb-10 flex items-end justify-between">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-black/40 dark:text-white/40">
                How I approach development
              </p>

              <h3 className="mt-3 text-2xl font-semibold tracking-[-0.04em] sm:text-3xl">
                Simple thinking. Solid execution.
              </h3>
            </div>

            <span className="hidden text-[10px] font-medium uppercase tracking-wider text-black/30 dark:text-white/30 sm:block">
              3 principles
            </span>
          </div>

          <div className="grid border-t border-black/10 dark:border-white/10 md:grid-cols-3">

            {values.map((value) => (
              <div
                key={value.number}
                className="
                  group
                  relative
                  border-b
                  border-black/10
                  py-8
                  transition-all
                  duration-500
                  hover:bg-black/[0.025]
                  md:border-b-0
                  md:border-r
                  md:px-8
                  md:first:pl-0
                  md:last:border-r-0
                  dark:border-white/10
                  dark:hover:bg-white/[0.025]
                "
              >
                <div className="flex items-start justify-between">

                  <span
                    className="
                      text-[11px]
                      font-semibold
                      text-black/25
                      transition-colors
                      duration-300
                      group-hover:text-[#171725]
                      dark:text-white/25
                      dark:group-hover:text-white
                    "
                  >
                    {value.number}
                  </span>

                  <ArrowDownRight
                    size={17}
                    className="
                      text-black/25
                      transition-all
                      duration-300
                      group-hover:translate-x-1
                      group-hover:translate-y-1
                      group-hover:text-[#e1fa6b]
                      dark:text-white/25
                    "
                  />
                </div>

                <h4 className="mt-12 text-xl font-semibold tracking-tight">
                  {value.title}
                </h4>

                <p
                  className="
                    mt-3
                    max-w-sm
                    text-[13px]
                    leading-6
                    text-black/50
                    dark:text-white/50
                  "
                >
                  {value.text}
                </p>

                {/* Hover accent */}
                <div
                  className="
                    absolute
                    bottom-0
                    left-0
                    h-[2px]
                    w-0
                    bg-[#e1fa6b]
                    transition-all
                    duration-500
                    group-hover:w-full
                  "
                />
              </div>
            ))}

          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col gap-4 border-t border-black/10 pt-6 dark:border-white/10 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-black/35 dark:text-white/35">
            Always learning. Always improving.
          </p>

          <p className="text-[11px] font-medium text-black/35 dark:text-white/35">
            PHP · React · Django · MySQL · APIs
          </p>
        </div>

      </div>

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-12px);
          }
        }
      `}</style>
    </section>
  )
}

export default About