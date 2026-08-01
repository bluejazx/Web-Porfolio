import { useState } from "react"
import { motion } from "framer-motion"
import { Download, ArrowDown } from "lucide-react"
import { GradientShimmer } from "@/components/ui/gradient-shimmer"
import { portfolio } from "@/content/portfolio"

const { person } = portfolio

// Resolve public assets against Vite's base so links work at /Web-Porfolio/ on
// GitHub Pages AND at / in dev.
const resumeHref = `${import.meta.env.BASE_URL}Joshua-Young-Resume.pdf`

/**
 * Three stacked full-viewport beats, each its own scroll-snap section:
 *   (1) full-viewport name in <GradientShimmer gradient="twilight"> — the
 *       largest thing on screen, aurora mesh behind;
 *   (2) navy-suit headshot + Download Résumé, veiled by an electric haze that
 *       clears over ~3s on entry;
 *   (3) "the work" handoff that points down into the ledger below.
 * Snap is `proximity` (set on <html>), so mid-beat scrolling stays free; the
 * page only settles onto a beat when you land near one.
 */
export function Hero() {
  // Electric haze: veils the headshot the moment beat 2 enters view, then
  // dissipates over ~3s. `hazeKey` bumps on each (re)entry so the CSS animation
  // restarts; `onViewportLeave` disarms so scrolling away and back replays it.
  const [hazeArmed, setHazeArmed] = useState(false)
  const [hazeKey, setHazeKey] = useState(0)

  return (
    <div className="relative">
      {/* Beat 1 — the name */}
      <section className="snap-section relative flex min-h-svh flex-col items-center justify-center overflow-hidden px-6 text-center">
        <div className="aurora-mesh aurora-drift aurora-vignette absolute inset-0" />
        <div className="relative flex flex-col items-center">
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
        </div>

        <div className="absolute bottom-10 flex flex-col items-center gap-2 text-white/50">
          <span className="font-mono text-[0.7rem] uppercase tracking-[0.3em]">
            Scroll
          </span>
          <ArrowDown className="h-4 w-4 animate-bounce" />
        </div>
      </section>

      {/* Beat 2 — headshot + résumé */}
      <motion.section
        className="snap-section relative flex min-h-svh flex-col items-center justify-center gap-8 overflow-hidden px-6 text-center md:flex-row md:gap-12 md:text-left"
        onViewportEnter={() => {
          setHazeArmed(true)
          setHazeKey((k) => k + 1)
        }}
        onViewportLeave={() => setHazeArmed(false)}
        viewport={{ amount: 0.5 }}
      >
        <div className="aurora-mesh aurora-drift aurora-vignette absolute inset-0" />

        <div className="relative shrink-0">
          <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-violet-500/40 via-cyan-400/30 to-emerald-400/30 blur-2xl" />
          <img
            src={person.headshot.src}
            alt={person.headshot.alt}
            className="relative h-56 w-56 rounded-3xl border border-white/10 object-cover shadow-2xl sm:h-72 sm:w-72 md:h-80 md:w-80"
          />
          {/* Electric haze overlay — armed on beat-2 entry, clears over ~3s.
              keyed so it restarts each time beat 2 is re-entered. */}
          {hazeArmed && (
            <div
              key={hazeKey}
              aria-hidden="true"
              className="electric-haze is-clearing rounded-3xl"
            />
          )}
        </div>

        <div className="relative max-w-md">
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
      </motion.section>

      {/* Beat 3 — "the work" handoff into the ledger below */}
      <section className="snap-section relative flex min-h-svh flex-col items-center justify-center overflow-hidden px-6 text-center">
        <div className="aurora-mesh aurora-drift aurora-vignette absolute inset-0" />
        <div className="relative flex flex-col items-center">
          <p className="font-mono text-xs uppercase tracking-[0.35em] text-white/40">
            Now — the ledger
          </p>
          <h2 className="mt-4 max-w-3xl text-balance text-4xl font-bold tracking-tight text-white sm:text-6xl">
            The work,{" "}
            <span className="aurora-text">accounted for</span>.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-pretty text-white/60">
            Every claim below carries its provenance. Scroll into the
            centerpiece — making advanced AI agents affordable to run at scale.
          </p>
        </div>

        <div className="absolute bottom-10 flex flex-col items-center gap-2 text-white/50">
          <span className="font-mono text-[0.7rem] uppercase tracking-[0.3em]">
            The work
          </span>
          <ArrowDown className="h-4 w-4 animate-bounce" />
        </div>
      </section>
    </div>
  )
}

export default Hero
