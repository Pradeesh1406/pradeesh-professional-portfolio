import { useEffect, useState } from 'react'

function Loader({ onComplete }) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const duration = 2500
    const intervalTime = 20
    const increment = 100 / (duration / intervalTime)

    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + increment

        if (next >= 100) {
          clearInterval(interval)

          setTimeout(() => {
            onComplete()
          }, 250)

          return 100
        }

        return next
      })
    }, intervalTime)

    return () => clearInterval(interval)
  }, [onComplete])

  return (
    <div
      className={`
        fixed
        inset-0
        z-[9999]
        flex
        items-center
        justify-center
        bg-[#F6F7FB]
        text-[#171725]
        transition-all
        duration-700
        dark:bg-[#08090D]
        dark:text-white
      `}
    >
      <div className="w-full max-w-md px-6">

        {/* Top number */}
        <div className="mb-10 flex items-center justify-between">
          <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-black/30 dark:text-white/30">
            Portfolio
          </span>

          <span className="font-mono text-xs text-black/40 dark:text-white/40">
            {Math.floor(progress).toString().padStart(2, '0')}%
          </span>
        </div>

        {/* Name */}
        <div className="overflow-hidden">
          <h1
            className="
              translate-y-0
              text-5xl
              font-semibold
              tracking-[-0.06em]
              sm:text-6xl
            "
          >
            Pradeesh G
          </h1>
        </div>

        {/* Role */}
        <div className="mt-3 overflow-hidden">
          <p className="text-sm tracking-wide text-black/40 dark:text-white/40 sm:text-base">
            Software Developer
          </p>
        </div>

        {/* Progress line */}
        <div className="mt-10 h-px w-full overflow-hidden bg-black/10 dark:bg-white/10">
          <div
            className="h-full bg-[#e1fa6b] transition-all duration-100 ease-linear"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Bottom */}
        <div className="mt-4 flex items-center justify-between">
          <span className="text-[9px] uppercase tracking-[0.2em] text-black/30 dark:text-white/30">
            Welcome
          </span>

          <span className="text-[9px] uppercase tracking-[0.2em] text-black/30 dark:text-white/30">
            Preparing portfolio
          </span>
        </div>

      </div>
    </div>
  )
}

export default Loader