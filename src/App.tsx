import { VersionBadge } from "@/components/portfolio/VersionBadge"
import { Hero } from "@/components/portfolio/Hero"
import { IBMDeepDive } from "@/components/portfolio/IBMDeepDive"
import { ExperienceSection } from "@/components/portfolio/ExperienceSection"
import { ExperienceFan } from "@/components/portfolio/ExperienceFan"
import { EducationSkills } from "@/components/portfolio/EducationSkills"
import { Gallery } from "@/components/portfolio/Gallery"
import { Contact } from "@/components/portfolio/Contact"

/**
 * Aurora Ledger — Joshua Young's portfolio.
 * "Constraint is the medium."
 *
 * Flow: scroll-driven hero (name → headshot+résumé → the work) hands off to the
 * IBM token-optimization centerpiece, then the per-role ledger, foundations,
 * gallery, and contact. Dark #0b0b12 canvas, violet→cyan→green aurora.
 */
function App() {
  return (
    <div className="dark min-h-svh bg-background text-foreground antialiased">
      <VersionBadge />

      <Hero />

      <main className="relative">
        {/* Section-spanning aurora wash sitting behind the ledger. */}
        <div className="pointer-events-none absolute inset-0 aurora-mesh opacity-40" />

        <div className="relative">
          {/* Fan comes SECOND (right after the hero): a jump board — each tile
              links to that role's dedicated section below. The IBM tile jumps
              to #ibm, which now lives at the BOTTOM as the centerpiece. */}
          <ExperienceFan />
          <div className="mx-auto max-w-5xl px-6">
            <div className="aurora-rule" />
          </div>

          {/* Per-role feed-post sections (everything except IBM). */}
          <ExperienceSection />
          <div className="mx-auto max-w-5xl px-6">
            <div className="aurora-rule" />
          </div>

          <EducationSkills />
          <div className="mx-auto max-w-5xl px-6">
            <div className="aurora-rule" />
          </div>

          <Gallery />
          <div className="mx-auto max-w-5xl px-6">
            <div className="aurora-rule" />
          </div>

          {/* IBM token-optimization centerpiece — ALL of IBM, together, at the
              bottom (per request). #ibm is the fan's IBM-tile jump target. */}
          <IBMDeepDive />
          <div className="mx-auto max-w-5xl px-6">
            <div className="aurora-rule" />
          </div>

          <Contact />
        </div>
      </main>
    </div>
  )
}

export default App
