import { Download, ArrowDown } from "lucide-react"
import { GradientShimmer } from "@/components/ui/gradient-shimmer"
import { portfolio } from "@/content/portfolio"

const { person } = portfolio

// Resolve public assets against Vite's base so links work at /Web-Porfolio/ on
// GitHub Pages AND at / in dev.
const resumeHref = `${import.meta.env.BASE_URL}Joshua-Young-Resume.pdf`

/**
 * Single hero beat (the "the work" handoff beat was removed per request):
 *   full-viewport name in <GradientShimmer gradient="twilight"> — the largest
 *   thing on screen, aurora mesh behind — with the Download Résumé button
 *   directly under the name. A snap-section that snaps straight to the fan
 *   carousel below. `id="top"` is the target for the back-to-top arrow.
 * Snap is `proximity` (set on <html>), so mid-beat scrolling stays free.
 */
export function Hero() {
  return (
    <div className="relative">
      {/* The name + résumé download */}
      <section id="top" className="snap-section relative flex min-h-svh flex-col items-center justify-center overflow-hidden px-6 text-center">
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

          {/* Download Résumé — directly under the name. */}
          <a
            href={resumeHref}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-9 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-500 via-indigo-500 to-cyan-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-500/20 transition hover:brightness-110"
          >
            <Download className="h-4 w-4" />
            Download Résumé
          </a>
        </div>

        <div className="absolute bottom-10 flex flex-col items-center gap-2 text-white/50">
          <span className="font-mono text-[0.7rem] uppercase tracking-[0.3em]">
            Scroll
          </span>
          <ArrowDown className="h-4 w-4 animate-bounce" />
        </div>
      </section>
    </div>
  )
}

export default Hero
