import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Download, ArrowDown } from "lucide-react"
import { GradientShimmer } from "@/components/ui/gradient-shimmer"
import { portfolio } from "@/content/portfolio"

const { person } = portfolio

// Resolve public assets against Vite's base so links work at /Web-Porfolio/ on
// GitHub Pages AND at / in dev.
const resumeHref = `${import.meta.env.BASE_URL}Joshua-Young-Resume.pdf`

/**
 * Three scroll-driven beats over one tall, sticky stage:
 *   (1) full-viewport name in <GradientShimmer gradient="twilight"> — the
 *       largest thing on screen, aurora mesh behind;
 *   (2) scroll crossfades to the navy-suit headshot + Download Résumé;
 *   (3) scroll hands off to the experience grid below (rendered by the page).
 * Driven by useScroll/useTransform so the beats blend rather than snap.
 */
export function Hero() {
  const ref = useRef<HTMLDivElement | null>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  })

  // Beat 1 — the name. Present at top, fades/lifts out through the first third.
  const nameOpacity = useTransform(scrollYProgress, [0, 0.28, 0.4], [1, 1, 0])
  const nameY = useTransform(scrollYProgress, [0, 0.4], [0, -80])
  const nameScale = useTransform(scrollYProgress, [0, 0.4], [1, 0.86])
  const cue1Opacity = useTransform(scrollYProgress, [0, 0.12], [1, 0])

  // Beat 2 — headshot + résumé. Rises in as beat 1 leaves, out before beat 3.
  const shotOpacity = useTransform(
    scrollYProgress,
    [0.32, 0.48, 0.78, 0.92],
    [0, 1, 1, 0],
  )
  const shotY = useTransform(scrollYProgress, [0.32, 0.5], [60, 0])
  const cue2Opacity = useTransform(scrollYProgress, [0.5, 0.62, 0.78], [0, 1, 0])

  return (
    <div ref={ref} className="relative h-[320vh]">
      {/* Sticky stage — every beat is composited in this single viewport. */}
      <div className="sticky top-0 flex h-svh items-center justify-center overflow-hidden">
        {/* Aurora atmosphere */}
        <div className="aurora-mesh aurora-drift aurora-vignette absolute inset-0" />

        {/* Beat 1 — the name */}
        <motion.div
          style={{ opacity: nameOpacity, y: nameY, scale: nameScale }}
          className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center"
        >
          <GradientShimmer
            as="h1"
            gradient="twilight"
            // twilight's dark tail (#38364E) is invisible on the #0b0b12 canvas;
            // set a light base so the name reads while the band sweeps.
            baseColor="#e8def2"
            className="font-black leading-[0.92] tracking-tight"
            style={{
              fontSize: "clamp(3.5rem, 15vw, 13rem)",
              letterSpacing: "-0.03em",
            }}
          >
            {person.name}
          </GradientShimmer>
          <p className="mt-6 max-w-2xl text-balance font-mono text-sm text-white/60 sm:text-base">
            {person.headline}
          </p>
          <p className="mt-3 font-mono text-xs uppercase tracking-[0.35em] text-white/40">
            Constraint is the medium.
          </p>

          <motion.div
            style={{ opacity: cue1Opacity }}
            className="absolute bottom-10 flex flex-col items-center gap-2 text-white/50"
          >
            <span className="font-mono text-[0.7rem] uppercase tracking-[0.3em]">
              Scroll
            </span>
            <ArrowDown className="h-4 w-4 animate-bounce" />
          </motion.div>
        </motion.div>

        {/* Beat 2 — headshot + résumé */}
        <motion.div
          style={{ opacity: shotOpacity, y: shotY }}
          className="absolute inset-0 flex flex-col items-center justify-center gap-8 px-6 text-center md:flex-row md:gap-12 md:text-left"
        >
          <div className="relative shrink-0">
            <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-violet-500/40 via-cyan-400/30 to-emerald-400/30 blur-2xl" />
            <img
              src={person.headshot.src}
              alt={person.headshot.alt}
              className="relative h-56 w-56 rounded-3xl border border-white/10 object-cover shadow-2xl sm:h-72 sm:w-72 md:h-80 md:w-80"
            />
          </div>

          <div className="max-w-md">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-cyan-300/80">
              {person.location}
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              {person.name}
            </h2>
            <p className="mt-4 text-pretty text-base leading-relaxed text-white/70">
              {person.summary}
            </p>
            <a
              href={resumeHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-500 via-indigo-500 to-cyan-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-500/20 transition hover:brightness-110"
            >
              <Download className="h-4 w-4" />
              Download Résumé
            </a>
          </div>

          <motion.div
            style={{ opacity: cue2Opacity }}
            className="absolute bottom-10 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-white/50"
          >
            <span className="font-mono text-[0.7rem] uppercase tracking-[0.3em]">
              The work
            </span>
            <ArrowDown className="h-4 w-4 animate-bounce" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default Hero
