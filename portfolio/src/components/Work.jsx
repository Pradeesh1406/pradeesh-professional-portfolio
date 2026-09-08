
import { ArrowUpRight, Check } from 'lucide-react'

function Work() {
  const projects = [
    {
      number: '01',
      title: 'Alumni Portal',
      subtitle: 'Full-Stack Web Application',
      description:
        'Developed a complete alumni management platform with a dynamic public website and admin panel. The system allows administrators to manage alumni profiles, events, newsletters, announcements, galleries and website content without code changes.',
      details:
        'Built end-to-end functionality covering alumni registration, mentor management, event registration, payment handling and database-driven administration. Integrated WhatsApp API and Amazon SES for automated invitations, notifications and event communications.',
      technologies: [
        'PHP',
        'CodeIgniter 4',
        'MySQL',
        'JavaScript',
        'WhatsApp API',
        'Amazon SES',
      ],
      highlights: [
        'Dynamic admin content management',
        'Alumni & mentor management',
        'Event registration & payment workflows',
        'WhatsApp & email automation',
      ],
      featured: true,
    },

    {
      number: '02',
      title: 'SMVRCH Website',
      subtitle: 'Full-Stack Dynamic Website',
      description:
        'Developed a fully dynamic, database-driven website with a dedicated admin panel for managing banners, sliders, highlight images, galleries, signature events and FAQs.',
      details:
        'Created reusable backend modules and database-driven functionality so administrators can add, edit, update and delete website content without modifying source code. Also implemented enquiry management with secure database storage and automated email notifications.',
      technologies: [
        'PHP',
        'CodeIgniter 4',
        'MySQL',
        'JavaScript',
        'HTML',
        'CSS',
      ],
      highlights: [
        'Dynamic website content management',
        'Gallery & event management',
        'Reusable backend modules',
        'Contact enquiry & email notifications',
      ],
    },

    {
      number: '03',
      title: 'Multi-Discipline Class Management System',
      subtitle: 'Web Application',
      description:
        'Developed a role-based class management system serving Students, Teachers, Parents and Administrators. The platform provides controlled access to academic and administrative functionality based on user roles.',
      details:
        'Implemented Keycloak-based authentication and authorization with role-based access control. Developed REST APIs for students, teachers, parents, fees, class schedules and session management, with MySQL used for secure and structured data storage.',
      technologies: [
        'PHP',
        'CodeIgniter 4',
        'Keycloak',
        'MySQL',
        'REST APIs',
      ],
      highlights: [
        'Student, teacher & parent management',
        'Keycloak authentication',
        'Role-based access control',
        'REST APIs for academic workflows',
      ],
    },

    {
      number: '04',
      title: 'MASSET / HRMS',
      subtitle: 'IT Service Management System',
      description:
        'Developed an internal IT Service Management and Ticketing System for handling service requests and incident tickets across multiple departments with structured workflows and role-based access.',
      details:
        'Implemented the complete ticket lifecycle including creation, assignment, acknowledgement, work in progress, pending, closure, duplicate handling and incident reopening. Built dashboards, search, filtering, notifications, replies and activity history for different organizational roles.',
      technologies: [
        'PHP',
        'MySQL',
        'JavaScript',
        'HTML',
        'CSS',
      ],
      highlights: [
        'Service request & incident management',
        'Role-based dashboards',
        'Ticket assignment & workflow tracking',
        'Audit history & notifications',
      ],
    },

    {
      number: '05',
      title: 'Vendor Flow',
      subtitle: 'Procurement & Vendor Management System',
      description:
        'Developed an end-to-end vendor lifecycle management system covering vendor registration, onboarding, verification, approval and procurement workflows.',
      details:
        'Implemented vendor invitations, email and mobile verification, Aadhaar, PAN, GST, bank and document verification. Developed RFQ and quotation workflows supporting existing vendors, new vendor invitations and secure token-based links with expiry.',
      technologies: [
        'PHP',
        'MySQL',
        'JavaScript',
        'REST APIs',
      ],
      highlights: [
        'Complete vendor onboarding workflow',
        'Aadhaar, PAN & GST verification',
        'RFQ & quotation management',
        'Secure token-based invitations',
      ],
    },
  ]

  return (
    <section
      id="work"
      className="
        relative
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
          opacity-[0.018]
          dark:opacity-[0.035]
        "
        style={{
          backgroundImage: `
            linear-gradient(currentColor 1px, transparent 1px),
            linear-gradient(90deg, currentColor 1px, transparent 1px)
          `,
          backgroundSize: 'clamp(48px, 5vw, 72px) clamp(48px, 5vw, 72px)',
        }}
      />

      {/* Ambient glow */}

      <div
        className="
          pointer-events-none
          absolute
          right-[-180px]
          top-[280px]
          h-[400px]
          w-[400px]
          rounded-full
          bg-[#e1fa6b]/10
          blur-[140px]
          dark:bg-[#e1fa6b]/[0.05]
        "
      />

      {/* =========================================
          MAIN CONTAINER
      ========================================== */}

      <div
        className="
          relative
          mx-auto
          max-w-[1440px]
          px-5
          py-20
          sm:px-8
          sm:py-24
          lg:px-12
          lg:py-32
        "
      >

        {/* =========================================
            SECTION HEADER
        ========================================== */}

        <div
          className="
            grid
            gap-8
            lg:grid-cols-12
            lg:items-end
          "
        >

          <div className="lg:col-span-8">

            <div className="mb-6 flex items-center gap-3">

              <span
                className="
                  font-mono
                  text-[10px]
                  tracking-[0.2em]
                  text-[#7A7A86]
                  dark:text-[#777782]
                "
              >
                02
              </span>

              <span className="h-px w-8 bg-[#e1fa6b] sm:w-12" />

              <span
                className="
                  text-[9px]
                  font-semibold
                  uppercase
                  tracking-[0.25em]
                  text-[#777783]
                  dark:text-[#858590]
                "
              >
                Selected Work
              </span>

            </div>

            <h2
              className="
                max-w-4xl
                text-[clamp(2.7rem,7vw,6.5rem)]
                font-semibold
                leading-[0.9]
                tracking-[-0.065em]
              "
            >
              Systems I've built
              <br />

              <span className="text-[#78852F] dark:text-[#e1fa6b]">
                for real businesses.
              </span>
            </h2>

          </div>


          <div className="lg:col-span-4 lg:pb-1">

            <p
              className="
                max-w-md
                text-[13px]
                leading-6
                text-[#666671]
                sm:text-sm
                sm:leading-7
                dark:text-[#9999A5]
              "
            >
              Real-world applications covering business workflows,
              user management, authentication, APIs, databases,
              automation and responsive web interfaces.
            </p>

          </div>

        </div>


        {/* =========================================
            FEATURED PROJECT
        ========================================== */}

        {projects
          .filter((project) => project.featured)
          .map((project) => (

            <article
              key={project.number}
              className="
                group
                relative
                mt-14
                overflow-hidden
                rounded-[1.5rem]
                border
                border-black/10
                bg-white/70
                backdrop-blur-sm
                sm:mt-18
                sm:rounded-[2rem]
                lg:mt-24
                dark:border-white/10
                dark:bg-white/[0.025]
              "
            >

              {/* Top accent */}

              <div className="absolute left-0 top-0 h-1 w-full bg-[#e1fa6b]" />


              <div className="grid lg:grid-cols-12">

                {/* =====================================
                    PROJECT CONTENT
                ====================================== */}

                <div
                  className="
                    p-6
                    sm:p-8
                    lg:col-span-7
                    lg:p-12
                    xl:p-14
                  "
                >

                  {/* Project number */}

                  <div className="mb-8 flex items-center justify-between sm:mb-10">

                    <span
                      className="
                        font-mono
                        text-[10px]
                        tracking-[0.2em]
                        text-[#9999A5]
                        dark:text-[#666672]
                      "
                    >
                      {project.number}
                    </span>

                    <span
                      className="
                        rounded-full
                        border
                        border-black/10
                        px-3
                        py-1.5
                        text-[8px]
                        font-semibold
                        uppercase
                        tracking-[0.15em]
                        text-[#777783]
                        dark:border-white/10
                        dark:text-[#858590]
                      "
                    >
                      Featured Project
                    </span>

                  </div>


                  {/* Category */}

                  <p
                    className="
                      mb-3
                      text-[9px]
                      font-semibold
                      uppercase
                      tracking-[0.22em]
                      text-[#78852F]
                      dark:text-[#e1fa6b]
                    "
                  >
                    {project.subtitle}
                  </p>


                  {/* Title */}

                  <h3
                    className="
                      max-w-2xl
                      text-[clamp(2.4rem,5vw,5rem)]
                      font-semibold
                      leading-[0.92]
                      tracking-[-0.06em]
                    "
                  >
                    {project.title}
                  </h3>


                  {/* Description */}

                  <p
                    className="
                      mt-6
                      max-w-2xl
                      text-[13px]
                      leading-6
                      text-[#555560]
                      sm:mt-7
                      sm:text-sm
                      sm:leading-7
                      dark:text-[#B5B5BF]
                    "
                  >
                    {project.description}
                  </p>


                  {/* Detailed information */}

                  <p
                    className="
                      mt-4
                      max-w-2xl
                      text-[12px]
                      leading-6
                      text-[#777783]
                      sm:text-[13px]
                      sm:leading-6
                      dark:text-[#858590]
                    "
                  >
                    {project.details}
                  </p>


                  {/* Highlights */}

                  <div
                    className="
                      mt-7
                      grid
                      gap-3
                      sm:mt-8
                      sm:grid-cols-2
                      sm:gap-x-6
                    "
                  >

                    {project.highlights.map((highlight) => (

                      <div
                        key={highlight}
                        className="flex items-start gap-2.5"
                      >

                        <span
                          className="
                            mt-0.5
                            flex
                            h-4
                            w-4
                            shrink-0
                            items-center
                            justify-center
                            rounded-full
                            bg-[#e1fa6b]
                            text-[#171725]
                          "
                        >
                          <Check
                            size={9}
                            strokeWidth={3}
                          />
                        </span>

                        <span
                          className="
                            text-[11px]
                            leading-5
                            text-[#555560]
                            dark:text-[#BDBDC6]
                          "
                        >
                          {highlight}
                        </span>

                      </div>

                    ))}

                  </div>


                  {/* Technologies */}

                  <div
                    className="
                      mt-8
                      flex
                      flex-wrap
                      gap-2
                    "
                  >

                    {project.technologies.map((technology) => (

                      <span
                        key={technology}
                        className="
                          rounded-full
                          border
                          border-black/10
                          px-3
                          py-1.5
                          text-[9px]
                          font-medium
                          text-[#555560]
                          dark:border-white/10
                          dark:text-[#BDBDC6]
                        "
                      >
                        {technology}
                      </span>

                    ))}

                  </div>

                </div>


                {/* =====================================
                    VISUAL PANEL
                ====================================== */}

                <div
                  className="
                    relative
                    min-h-[300px]
                    overflow-hidden
                    bg-[#171725]
                    sm:min-h-[380px]
                    lg:col-span-5
                    lg:min-h-full
                    dark:bg-[#101116]
                  "
                >

                  {/* Grid */}

                  <div
                    className="absolute inset-0 opacity-[0.08]"
                    style={{
                      backgroundImage: `
                        linear-gradient(#ffffff 1px, transparent 1px),
                        linear-gradient(90deg, #ffffff 1px, transparent 1px)
                      `,
                      backgroundSize: '40px 40px',
                    }}
                  />


                  {/* Glow */}

                  <div
                    className="
                      absolute
                      left-1/2
                      top-1/2
                      h-56
                      w-56
                      -translate-x-1/2
                      -translate-y-1/2
                      rounded-full
                      bg-[#e1fa6b]/20
                      blur-[90px]
                    "
                  />


                  {/* Dashboard visual */}

                  <div
                    className="
                      absolute
                      left-[8%]
                      top-[14%]
                      w-[84%]
                      rounded-xl
                      border
                      border-white/10
                      bg-white/[0.06]
                      p-4
                      shadow-2xl
                      backdrop-blur-xl
                      transition-transform
                      duration-700
                      group-hover:scale-[1.025]
                      sm:p-5
                    "
                  >

                    {/* Dashboard header */}

                    <div className="mb-5 flex items-center justify-between">

                      <div className="flex gap-1.5">

                        <span className="h-2 w-2 rounded-full bg-white/20" />
                        <span className="h-2 w-2 rounded-full bg-white/20" />
                        <span className="h-2 w-2 rounded-full bg-[#e1fa6b]" />

                      </div>

                      <span
                        className="
                          text-[7px]
                          uppercase
                          tracking-[0.2em]
                          text-white/40
                        "
                      >
                        Admin Dashboard
                      </span>

                    </div>


                    {/* Stats */}

                    <div className="grid grid-cols-3 gap-2">

                      <div className="h-16 rounded-lg bg-white/[0.05] p-2.5">

                        <div className="h-1.5 w-8 rounded-full bg-[#e1fa6b]/70" />

                        <div className="mt-3 h-2 w-12 rounded-full bg-white/10" />

                      </div>

                      <div className="h-16 rounded-lg bg-white/[0.05] p-2.5">

                        <div className="h-1.5 w-10 rounded-full bg-white/20" />

                        <div className="mt-3 h-2 w-8 rounded-full bg-white/10" />

                      </div>

                      <div className="h-16 rounded-lg bg-white/[0.05] p-2.5">

                        <div className="h-1.5 w-7 rounded-full bg-white/20" />

                        <div className="mt-3 h-2 w-10 rounded-full bg-white/10" />

                      </div>

                    </div>


                    {/* Chart */}

                    <div className="mt-2 h-24 rounded-lg bg-white/[0.04] p-3">

                      <div className="flex h-full items-end gap-2">

                        <div className="h-[35%] flex-1 rounded-t bg-[#e1fa6b]/30" />
                        <div className="h-[55%] flex-1 rounded-t bg-[#e1fa6b]/40" />
                        <div className="h-[45%] flex-1 rounded-t bg-[#e1fa6b]/30" />
                        <div className="h-[75%] flex-1 rounded-t bg-[#e1fa6b]/60" />
                        <div className="h-[65%] flex-1 rounded-t bg-[#e1fa6b]/50" />

                      </div>

                    </div>

                  </div>


                  {/* Visual label */}

                  <div
                    className="
                      absolute
                      bottom-6
                      left-6
                      max-w-[80%]
                      text-[8px]
                      uppercase
                      leading-4
                      tracking-[0.18em]
                      text-white/40
                      sm:bottom-8
                      sm:left-8
                    "
                  >
                    Content · Events · Alumni · Payments
                  </div>

                </div>

              </div>

            </article>

          ))}


        {/* =========================================
            OTHER PROJECTS
        ========================================== */}

      {/* =========================================
    OTHER PROJECTS
========================================== */}

<div
  className="
    mt-10
    border-t
    border-black/10
    dark:border-white/10
  "
>
  {projects
    .filter((project) => !project.featured)
    .map((project) => (
      <article
        key={project.number}
        className="
          group
          relative
          border-b
          border-black/10
          py-10
          sm:py-12
          lg:py-14
          dark:border-white/10
        "
      >

        {/* Hover accent */}

        <div
          className="
            absolute
            left-0
            top-0
            h-full
            w-0.5
            origin-top
            scale-y-0
            bg-[#e1fa6b]
            transition-transform
            duration-500
            group-hover:scale-y-100
          "
        />


        <div
          className="
            grid
            gap-7
            lg:grid-cols-[80px_minmax(280px,1fr)_minmax(360px,1.2fr)_60px]
            lg:gap-8
            xl:gap-12
          "
        >

          {/* =====================================
              NUMBER
          ====================================== */}

          <div>

            <span
              className="
                font-mono
                text-[11px]
                tracking-[0.18em]
                text-[#9999A5]
                dark:text-[#5E5E68]
              "
            >
              {project.number}
            </span>

          </div>


          {/* =====================================
              TITLE
          ====================================== */}

          <div>

            <p
              className="
                mb-3
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.18em]
                text-[#78852F]
                sm:text-[11px]
                dark:text-[#e1fa6b]
              "
            >
              {project.subtitle}
            </p>

            <h3
              className="
                max-w-lg
                pr-10
                text-[clamp(1.8rem,3vw,2.8rem)]
                font-semibold
                leading-[1]
                tracking-[-0.05em]
                transition-transform
                duration-300
                lg:group-hover:translate-x-2
              "
            >
              {project.title}
            </h3>

          </div>


          {/* =====================================
              DETAILS
          ====================================== */}

          <div>

            <p
              className="
                max-w-2xl
                text-[13px]
                leading-6
                text-[#555560]
                sm:text-[14px]
                sm:leading-7
                dark:text-[#B5B5BF]
              "
            >
              {project.description}
            </p>

            <p
              className="
                mt-4
                max-w-2xl
                text-[12px]
                leading-6
                text-[#777783]
                sm:text-[13px]
                sm:leading-6
                dark:text-[#858590]
              "
            >
              {project.details}
            </p>


            {/* Highlights */}

            <div
              className="
                mt-6
                grid
                gap-x-8
                gap-y-3
                sm:grid-cols-2
              "
            >

              {project.highlights.map((highlight) => (

                <div
                  key={highlight}
                  className="
                    flex
                    items-start
                    gap-2.5
                  "
                >

                  <span
                    className="
                      mt-[7px]
                      h-1.5
                      w-1.5
                      shrink-0
                      rounded-full
                      bg-[#e1fa6b]
                    "
                  />

                  <span
                    className="
                      text-[11px]
                      leading-5
                      text-[#5F5F69]
                      sm:text-[12px]
                      dark:text-[#A5A5AF]
                    "
                  >
                    {highlight}
                  </span>

                </div>

              ))}

            </div>


            {/* Technologies */}

            <div
              className="
                mt-6
                flex
                flex-wrap
                gap-2
              "
            >

              {project.technologies.map((technology) => (

                <span
                  key={technology}
                  className="
                    rounded-full
                    border
                    border-black/10
                    px-3
                    py-1.5
                    text-[9px]
                    font-medium
                    text-[#555560]
                    dark:border-white/10
                    dark:text-[#BDBDC6]
                  "
                >
                  {technology}
                </span>

              ))}

            </div>

          </div>


          {/* =====================================
              ARROW
          ====================================== */}

          <div
            className="
              absolute
              right-0
              top-9
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              border
              border-black/10
              transition-all
              duration-300
              group-hover:border-[#e1fa6b]
              group-hover:bg-[#e1fa6b]
              group-hover:text-[#171725]
              sm:top-11
              lg:relative
              lg:right-auto
              lg:top-auto
              lg:mt-1
              lg:h-12
              lg:w-12
              dark:border-white/10
            "
          >

            <ArrowUpRight
              size={17}
              className="
                transition-transform
                duration-300
                group-hover:-translate-y-0.5
                group-hover:translate-x-0.5
              "
            />

          </div>

        </div>

      </article>
    ))}
</div>


        {/* =========================================
            FOOTER
        ========================================== */}

        <div
          className="
            mt-10
            flex
            flex-col
            gap-3
            sm:mt-12
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >

          <span
            className="
              font-mono
              text-[10px]
              uppercase
              tracking-[0.2em]
              text-[#A0A0AA]
              dark:text-[#5E5E68]
            "
          >
            projects · Full-stack development
          </span>

          <a
            href="#contact"
            className="
              group
              flex
              items-center
              gap-2
              text-[12px]
              font-medium
              text-[#555560]
              transition-colors
              hover:text-[#78852F]
              dark:text-[#BDBDC6]
              dark:hover:text-[#e1fa6b]
            "
          >
            Have a project in mind?

            <ArrowUpRight
              size={13}
              className="
                transition-transform
                group-hover:-translate-y-0.5
                group-hover:translate-x-0.5
              "
            />

          </a>

        </div>

      </div>

    </section>
  )
}


export default Work

