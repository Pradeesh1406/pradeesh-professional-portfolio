import {
  ArrowDown,
  ArrowUpRight,
  Download,
} from 'lucide-react'

function Hero() {
  const technologies = [
    'PHP',
    'Python',
    'React',
    'JavaScript',
    'MySQL',
  ]

  return (
    <section
      id="home"
      className="
        relative
        h-[100svh]
        min-h-[600px]
        w-full
        overflow-hidden
        bg-[#F6F7FB]
        text-[#171725]
        transition-colors
        duration-500
        dark:bg-[#08090D]
        dark:text-[#F4F4F8]
      "
    >

      {/* =========================================
          BACKGROUND GRID
      ========================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.025]
          dark:opacity-[0.045]
        "
        style={{
          backgroundImage: `
            linear-gradient(currentColor 1px, transparent 1px),
            linear-gradient(90deg, currentColor 1px, transparent 1px)
          `,
          backgroundSize: 'clamp(40px, 5vw, 72px) clamp(40px, 5vw, 72px)',
        }}
      />

      {/* =========================================
          PRIMARY COLOR GLOW
      ========================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -right-32
          top-0
          h-[300px]
          w-[300px]
          rounded-full
          bg-[#e1fa6b]/10
          blur-[110px]
          sm:h-[400px]
          sm:w-[400px]
          dark:bg-[#e1fa6b]/[0.07]
        "
      />

      {/* =========================================
          MAIN CONTAINER
      ========================================== */}

      <div
        className="
          relative
          mx-auto
          flex
          h-full
          max-w-[1440px]
          flex-col
          px-5
          pb-5
          pt-[76px]
          sm:px-8
          sm:pb-7
          sm:pt-[88px]
          lg:px-12
          lg:pb-8
          lg:pt-[96px]
        "
      >

        {/* =======================================
            SECTION LABEL
        ======================================== */}

        <div className="flex shrink-0 items-center gap-2.5 sm:gap-3">

          <span
            className="
              font-mono
              text-[9px]
              font-medium
              tracking-[0.2em]
              text-[#7A7A86]
              sm:text-[10px]
              dark:text-[#777782]
            "
          >
            01
          </span>

          <span
            className="
              h-px
              w-6
              bg-[#e1fa6b]
              sm:w-10
              lg:w-12
            "
          />

          <span
            className="
              text-[8px]
              font-semibold
              uppercase
              tracking-[0.2em]
              text-[#777783]
              sm:text-[9px]
              sm:tracking-[0.25em]
              dark:text-[#858590]
            "
          >
            Software Engineer
          </span>

        </div>


        {/* =======================================
            MAIN CONTENT
        ======================================== */}

        <div
          className="
            flex
            flex-1
            flex-col
            justify-center
            py-5
            sm:py-6
            lg:py-4
          "
        >

          {/* =======================================
              NAME
          ======================================== */}

          <h1
            className="
              whitespace-nowrap
              text-[clamp(3.5rem,15vw,8.5rem)]
              font-semibold
              leading-[0.82]
              tracking-[-0.075em]
            "
          >
            Pradeesh G
          </h1>


          {/* =======================================
              MAIN STATEMENT
          ======================================== */}

          <div
            className="
              mt-5
              max-w-4xl
              sm:mt-7
              lg:ml-[10vw]
              lg:mt-8
            "
          >

            <h2
              className="
                text-[clamp(1.45rem,3.6vw,3.5rem)]
                font-medium
                leading-[1.1]
                tracking-[-0.035em]
              "
            >
              I build{' '}

              <span
                className="
                  text-[#78852F]
                  dark:text-[#e1fa6b]
                "
              >
                digital products
              </span>

              {' '}that turn real-world problems
              into useful software.
            </h2>

          </div>


          {/* =======================================
              INFORMATION
          ======================================== */}

          <div
            className="
              mt-5
              grid
              gap-4
              border-t
              border-black/10
              pt-4
              sm:mt-7
              sm:gap-5
              sm:pt-5
              md:grid-cols-12
              md:gap-6
              lg:mt-8
              lg:pt-6
              dark:border-white/10
            "
          >

            {/* Introduction */}

            <div className="md:col-span-5">

              <p
                className="
                  max-w-lg
                  text-[11px]
                  leading-5
                  text-[#6F6F7A]
                  sm:text-xs
                  sm:leading-6
                  lg:text-sm
                  lg:leading-7
                  dark:text-[#9999A5]
                "
              >
                I work across frontend and backend development,
                creating responsive interfaces, business applications
                and database-driven systems with a focus on clean
                and maintainable solutions.
              </p>

            </div>


            {/* Technologies */}

            <div className="md:col-span-4">

              <p
                className="
                  mb-2
                  text-[7px]
                  font-semibold
                  uppercase
                  tracking-[0.25em]
                  text-[#9999A5]
                  sm:text-[8px]
                  dark:text-[#666672]
                "
              >
                Core technologies
              </p>

              <div className="flex flex-wrap gap-x-2 gap-y-1">

                {technologies.map((technology, index) => (

                  <div
                    key={technology}
                    className="flex items-center gap-2"
                  >

                    <span
                      className="
                        text-[10px]
                        font-medium
                        text-[#41414C]
                        sm:text-xs
                        dark:text-[#D0D0D8]
                      "
                    >
                      {technology}
                    </span>

                    {index !== technologies.length - 1 && (
                      <span className="text-[#B7C45A] dark:text-[#e1fa6b]/40">
                        /
                      </span>
                    )}

                  </div>

                ))}

              </div>

            </div>


            {/* Availability */}

            <div
              className="
                flex
                items-center
                gap-2
                md:col-span-3
                md:justify-end
              "
            >

              <span className="relative flex h-1.5 w-1.5 sm:h-2 sm:w-2">

                <span
                  className="
                    absolute
                    inline-flex
                    h-full
                    w-full
                    animate-ping
                    rounded-full
                    bg-[#e1fa6b]
                    opacity-60
                  "
                />

                <span
                  className="
                    relative
                    inline-flex
                    h-1.5
                    w-1.5
                    rounded-full
                    bg-[#e1fa6b]
                    sm:h-2
                    sm:w-2
                  "
                />

              </span>

              <span
                className="
                  text-[9px]
                  font-medium
                  text-[#777783]
                  sm:text-[10px]
                  dark:text-[#9999A5]
                "
              >
                Open to opportunities
              </span>

            </div>

          </div>


          {/* =======================================
              ACTION BUTTONS
          ======================================== */}

          <div
            className="
              mt-5
              flex
              flex-wrap
              gap-2.5
              sm:mt-6
              sm:gap-3
              lg:mt-7
            "
          >

            {/* Work */}

            <a
              href="#work"
              className="
                group
                flex
                items-center
                gap-2.5
                rounded-full
                bg-[#171725]
                px-4
                py-2.5
                text-[10px]
                font-medium
                text-white
                transition-all
                duration-300
                hover:bg-[#e1fa6b]
                hover:text-[#171725]
                sm:px-5
                sm:py-3
                sm:text-xs
                dark:bg-[#F4F4F8]
                dark:text-[#101018]
                dark:hover:bg-[#e1fa6b]
              "
            >
              View selected work

              <ArrowUpRight
                size={14}
                className="
                  transition-transform
                  duration-300
                  group-hover:-translate-y-0.5
                  group-hover:translate-x-0.5
                "
              />

            </a>


            {/* Resume */}

           <a
  href="/pradeesh_resume.pdf"
  download="Pradeesh_Resume.pdf"
  className="
    group
    flex
    items-center
    gap-2.5
    rounded-full
    border
    border-black/15
    px-4
    py-2.5
    text-[10px]
    font-medium
    transition-all
    duration-300
    hover:border-[#9BAE3C]
    hover:text-[#68751F]
    sm:px-5
    sm:py-3
    sm:text-xs
    dark:border-white/15
    dark:hover:border-[#e1fa6b]
    dark:hover:text-[#e1fa6b]
  "
>
  Download CV

  <Download
    size={13}
    className="
      transition-transform
      group-hover:translate-y-0.5
    "
  />
</a>

          </div>

        </div>


        {/* =======================================
            BOTTOM METADATA
        ======================================== */}

        <div
          className="
            hidden
            shrink-0
            items-center
            justify-between
            border-t
            border-black/10
            pt-3
            md:flex
            dark:border-white/10
          "
        >

          <span
            className="
              font-mono
              text-[10px]
              uppercase
              tracking-[0.2em]
              text-[#A0A0AA]
              lg:text-[10px]
              dark:text-[#5E5E68]
            "
          >
            Chennai · India
          </span>


          <span
            className="
              font-mono
              text-[10px]
              uppercase
              tracking-[0.2em]
              text-[#A0A0AA]
              lg:text-[10px]
              dark:text-[#5E5E68]
            "
          >
            Frontend · Backend · Database
          </span>


          <a
            href="#work"
            className="
              group
              flex
              items-center
              gap-2
              font-mono
              text-[10px]
              uppercase
              tracking-[0.2em]
              text-[#A0A0AA]
              transition-colors
              hover:text-[#78852F]
              lg:text-[10px]
              dark:text-[#5E5E68]
              dark:hover:text-[#e1fa6b]
            "
          >
            Scroll to explore

            <ArrowDown
              size={10}
              className="transition-transform group-hover:translate-y-1"
            />

          </a>

        </div>

      </div>

    </section>
  )
}

export default Hero