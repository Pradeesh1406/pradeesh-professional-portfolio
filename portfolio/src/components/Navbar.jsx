import { useEffect, useState } from 'react'
import { Menu, Moon, Sun, X, ArrowUpRight } from 'lucide-react'

function Navbar({ darkMode, setDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // ==============================
  // Detect page scroll
  // ==============================
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30)
    }

    window.addEventListener('scroll', handleScroll)

    // Check initial position
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <>
      {/* ==============================
          MAIN NAVBAR
      =============================== */}

      <header
        className={`
          fixed
          left-0
          top-0
          z-50
          w-full
          text-[#171725]
          transition-all
          duration-300
          dark:text-[#F4F4F8]

          ${
            scrolled
              ? `
                border-b
                border-black/10
                bg-[#F6F7FB]/80
                shadow-[0_8px_30px_rgba(0,0,0,0.04)]
                backdrop-blur-xl
                dark:border-white/10
                dark:bg-[#08090D]/80
                dark:shadow-[0_8px_30px_rgba(0,0,0,0.18)]
              `
              : `
                border-b
                border-transparent
                bg-transparent
              `
          }
        `}
      >
        <div
          className={`
            mx-auto
            max-w-[1400px]
            px-5
            transition-all
            duration-500
            sm:px-8
            lg:px-10

            ${
              scrolled
                ? 'py-4 sm:py-5'
                : 'py-5'
            }
          `}
        >
          <nav className="flex items-center justify-between">

            {/* ==============================
                BRAND
            =============================== */}

            <a
              href="#home"
              onClick={closeMenu}
              className="group flex items-center gap-3"
            >
              <span
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-black/15
                  text-xs
                  font-bold
                  text-[#171725]
                  transition-all
                  duration-300
                  group-hover:border-[#e1fa6b]
                  group-hover:bg-[#e1fa6b]/20
                  dark:border-white/15
                  dark:text-[#F4F4F8]
                  dark:group-hover:border-[#e1fa6b]
                  dark:group-hover:bg-[#e1fa6b]/10
                "
              >
                PG
              </span>

              <span
                className="
                  hidden
                  text-sm
                  font-medium
                  tracking-tight
                  text-[#171725]
                  sm:block
                  dark:text-[#F4F4F8]
                "
              >
                Pradeesh G.
              </span>
            </a>


            {/* ==============================
                DESKTOP CENTER NAVIGATION
            =============================== */}

            <div
              className="
                absolute
                left-1/2
                hidden
                -translate-x-1/2
                md:block
              "
            >
              <div
                className={`
                  flex
                  items-center
                  gap-1
                  rounded-full
                  border
                  p-1
                  backdrop-blur-md
                  transition-all
                  duration-500

                  ${
                    scrolled
                      ? `
                        border-black/10
                        bg-white/60
                        dark:border-white/10
                        dark:bg-white/[0.06]
                      `
                      : `
                        border-black/10
                        bg-white/40
                        dark:border-white/10
                        dark:bg-white/[0.04]
                      `
                  }
                `}
              >

                <a
                  href="#work"
                  className="
                    rounded-full
                    px-5
                    py-2
                    text-xs
                    font-medium
                    text-black/50
                    transition-all
                    duration-200
                    hover:bg-black/5
                    hover:text-black
                    dark:text-white/60
                    dark:hover:bg-white/10
                    dark:hover:text-white
                  "
                >
                  Work
                </a>

                <a
                  href="#experience"
                  className="
                    rounded-full
                    px-5
                    py-2
                    text-xs
                    font-medium
                    text-black/50
                    transition-all
                    duration-200
                    hover:bg-black/5
                    hover:text-black
                    dark:text-white/60
                    dark:hover:bg-white/10
                    dark:hover:text-white
                  "
                >
                  Experience
                </a>

                <a
                  href="#about"
                  className="
                    rounded-full
                    px-5
                    py-2
                    text-xs
                    font-medium
                    text-black/50
                    transition-all
                    duration-200
                    hover:bg-black/5
                    hover:text-black
                    dark:text-white/60
                    dark:hover:bg-white/10
                    dark:hover:text-white
                  "
                >
                  About
                </a>

              </div>
            </div>


            {/* ==============================
                RIGHT SIDE
            =============================== */}

            <div className="flex items-center gap-2.5 sm:gap-3">

              {/* Availability */}

              <div
                className="
                  hidden
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-black/10
                  px-4
                  py-2
                  sm:flex
                  dark:border-white/10
                "
              >
                <span
                  className="
                    h-1.5
                    w-1.5
                    animate-pulse
                    rounded-full
                    bg-[#e1fa6b]
                  "
                />

                <span
                  className="
                    text-[10px]
                    font-medium
                    uppercase
                    tracking-wider
                    text-black/50
                    dark:text-white/60
                  "
                >
                  Open to work
                </span>
              </div>


              {/* Theme switch */}

              <button
                onClick={() => setDarkMode(!darkMode)}
                aria-label={
                  darkMode
                    ? 'Switch to light mode'
                    : 'Switch to dark mode'
                }
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-black/10
                  text-[#171725]
                  transition-all
                  duration-200
                  hover:border-[#e1fa6b]
                  hover:bg-[#e1fa6b]/20
                  dark:border-white/10
                  dark:text-[#F4F4F8]
                  dark:hover:border-[#e1fa6b]
                  dark:hover:bg-[#e1fa6b]/10
                "
              >
                {darkMode ? (
                  <Sun size={16} />
                ) : (
                  <Moon size={16} />
                )}
              </button>


              {/* Desktop contact */}

              <a
                href="#contact"
                className="
                  hidden
                  rounded-full
                  bg-[#171725]
                  px-5
                  py-2.5
                  text-xs
                  font-medium
                  text-white
                  transition-all
                  duration-300
                  hover:bg-[#e1fa6b]
                  hover:text-[#171725]
                  sm:block
                  dark:bg-[#F4F4F8]
                  dark:text-[#101018]
                  dark:hover:bg-[#e1fa6b]
                  dark:hover:text-[#101018]
                "
              >
                Hire Me
              </a>


              {/* ==============================
                  MOBILE MENU BUTTON
              =============================== */}

              <button
                onClick={() => setMenuOpen(true)}
                aria-label="Open navigation menu"
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-black/10
                  text-[#171725]
                  transition-all
                  duration-200
                  hover:border-[#e1fa6b]
                  hover:bg-[#e1fa6b]/20
                  md:hidden
                  dark:border-white/10
                  dark:text-[#F4F4F8]
                  dark:hover:border-[#e1fa6b]
                  dark:hover:bg-[#e1fa6b]/10
                "
              >
                <Menu size={18} />
              </button>

            </div>

          </nav>
        </div>
      </header>


      {/* ==============================
          MOBILE OVERLAY
      =============================== */}

      <div
        onClick={closeMenu}
        className={`
          fixed
          inset-0
          z-[60]
          bg-black/30
          backdrop-blur-sm
          transition-all
          duration-500
          md:hidden

          ${
            menuOpen
              ? 'pointer-events-auto opacity-100'
              : 'pointer-events-none opacity-0'
          }
        `}
      />


      {/* ==============================
          MOBILE SIDEBAR
      =============================== */}

      <aside
        className={`
          fixed
          right-0
          top-0
          z-[70]
          flex
          h-dvh
          w-[85%]
          max-w-[380px]
          flex-col
          bg-[#F6F7FB]
          text-[#171725]
          shadow-[-20px_0_60px_rgba(0,0,0,0.12)]
          transition-transform
          duration-500
          ease-[cubic-bezier(0.22,1,0.36,1)]
          dark:bg-[#0C0D12]
          dark:text-[#F4F4F8]
          md:hidden

          ${
            menuOpen
              ? 'translate-x-0'
              : 'translate-x-full'
          }
        `}
      >

        {/* ==============================
            SIDEBAR HEADER
        =============================== */}

        <div
          className="
            flex
            items-center
            justify-between
            border-b
            border-black/10
            px-6
            py-5
            dark:border-white/10
          "
        >
          <div className="flex items-center gap-3">

            <span
              className="
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-full
                bg-[#171725]
                text-xs
                font-bold
                text-[#e1fa6b]
                dark:bg-[#F4F4F8]
                dark:text-[#171725]
              "
            >
              PG
            </span>

            <div>
              <p className="text-sm font-semibold">
                Pradeesh G.
              </p>

              <p className="mt-0.5 text-[9px] uppercase tracking-[0.16em] text-black/35 dark:text-white/35">
                Software Developer
              </p>
            </div>

          </div>


          {/* Close button */}

          <button
            onClick={closeMenu}
            aria-label="Close navigation menu"
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              border
              border-black/10
              transition-all
              duration-200
              hover:border-[#e1fa6b]
              hover:bg-[#e1fa6b]/20
              dark:border-white/10
              dark:hover:border-[#e1fa6b]
              dark:hover:bg-[#e1fa6b]/10
            "
          >
            <X size={17} />
          </button>

        </div>


        {/* ==============================
            SIDEBAR NAVIGATION
        =============================== */}

        <div className="flex-1 overflow-y-auto px-6 py-10">

          <p
            className="
              mb-5
              text-[10px]
              font-semibold
              uppercase
              tracking-[0.2em]
              text-black/35
              dark:text-white/35
            "
          >
            Navigation
          </p>


          <nav className="border-t border-black/10 dark:border-white/10">

            {/* Work */}

            <a
              href="#work"
              onClick={closeMenu}
              className="
                group
                flex
                items-center
                justify-between
                border-b
                border-black/10
                py-5
                dark:border-white/10
              "
            >
              <div className="flex items-center gap-4">

                <span className="text-[10px] text-black/30 dark:text-white/30">
                  01
                </span>

                <span className="text-lg font-medium">
                  Work
                </span>

              </div>

              <ArrowUpRight
                size={17}
                className="
                  text-black/30
                  transition-all
                  duration-300
                  group-hover:translate-x-1
                  group-hover:-translate-y-1
                  group-hover:text-[#171725]
                  dark:text-white/30
                  dark:group-hover:text-white
                "
              />
            </a>


            {/* Experience */}

            <a
              href="#experience"
              onClick={closeMenu}
              className="
                group
                flex
                items-center
                justify-between
                border-b
                border-black/10
                py-5
                dark:border-white/10
              "
            >
              <div className="flex items-center gap-4">

                <span className="text-[10px] text-black/30 dark:text-white/30">
                  02
                </span>

                <span className="text-lg font-medium">
                  Experience
                </span>

              </div>

              <ArrowUpRight
                size={17}
                className="
                  text-black/30
                  transition-all
                  duration-300
                  group-hover:translate-x-1
                  group-hover:-translate-y-1
                  group-hover:text-[#171725]
                  dark:text-white/30
                  dark:group-hover:text-white
                "
              />
            </a>


            {/* About */}

            <a
              href="#about"
              onClick={closeMenu}
              className="
                group
                flex
                items-center
                justify-between
                border-b
                border-black/10
                py-5
                dark:border-white/10
              "
            >
              <div className="flex items-center gap-4">

                <span className="text-[10px] text-black/30 dark:text-white/30">
                  03
                </span>

                <span className="text-lg font-medium">
                  About
                </span>

              </div>

              <ArrowUpRight
                size={17}
                className="
                  text-black/30
                  transition-all
                  duration-300
                  group-hover:translate-x-1
                  group-hover:-translate-y-1
                  group-hover:text-[#171725]
                  dark:text-white/30
                  dark:group-hover:text-white
                "
              />
            </a>


            {/* Contact */}

            <a
              href="#contact"
              onClick={closeMenu}
              className="
                group
                flex
                items-center
                justify-between
                border-b
                border-black/10
                py-5
                dark:border-white/10
              "
            >
              <div className="flex items-center gap-4">

                <span className="text-[10px] text-black/30 dark:text-white/30">
                  04
                </span>

                <span className="text-lg font-medium">
                  Contact
                </span>

              </div>

              <ArrowUpRight
                size={17}
                className="
                  text-black/30
                  transition-all
                  duration-300
                  group-hover:translate-x-1
                  group-hover:-translate-y-1
                  group-hover:text-[#171725]
                  dark:text-white/30
                  dark:group-hover:text-white
                "
              />
            </a>

          </nav>


          {/* ==============================
              AVAILABILITY
          =============================== */}

          <div
            className="
              mt-10
              rounded-2xl
              border
              border-black/10
              p-5
              dark:border-white/10
            "
          >
            <div className="flex items-center gap-2">

              <span
                className="
                  h-2
                  w-2
                  animate-pulse
                  rounded-full
                  bg-[#e1fa6b]
                "
              />

              <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-black/45 dark:text-white/45">
                Open to work
              </span>

            </div>

            <p className="mt-3 text-[13px] leading-6 text-black/50 dark:text-white/50">
              Currently open to software development opportunities.
            </p>

          </div>

        </div>


        {/* ==============================
            SIDEBAR FOOTER
        =============================== */}

        <div
          className="
            border-t
            border-black/10
            px-6
            py-6
            dark:border-white/10
          "
        >
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="
              flex
              w-full
              items-center
              justify-between
              rounded-xl
              border
              border-black/10
              px-4
              py-3.5
              text-sm
              transition-all
              duration-300
              hover:border-[#e1fa6b]
              hover:bg-[#e1fa6b]/10
              dark:border-white/10
              dark:hover:border-[#e1fa6b]
              dark:hover:bg-[#e1fa6b]/10
            "
          >
            <span className="flex items-center gap-3">

              {darkMode ? (
                <Sun size={16} />
              ) : (
                <Moon size={16} />
              )}

              {darkMode ? 'Light mode' : 'Dark mode'}

            </span>

            <span className="text-[10px] text-black/30 dark:text-white/30">
              Switch
            </span>

          </button>
        </div>

      </aside>
    </>
  )
}

export default Navbar