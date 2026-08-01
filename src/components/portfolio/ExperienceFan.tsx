import { Layers } from "lucide-react"
import SocialCards, { type CardItem } from "@/components/ui/card-fan-carousel"
import { Reveal } from "./Reveal"
import { portfolio } from "@/content/portfolio"

/**
 * ExperienceFan — the GSAP SocialCards fan carousel rendered as designed
 * "monogram tiles" (NOT fetched images). Each card is a dark aurora tile with a
 * company monogram, role, dates, and a one-line description.
 *
 * Why monogram tiles instead of real company logos: LinkedIn company logos are
 * trademarked assets and can't be fetched here (no web access this session), so
 * we render cohesive on-brand tiles from the verified experience data instead.
 * The fan physics/hover come straight from the pasted SocialCards component; we
 * pass a `render` prop so each card draws DOM instead of an <img>.
 */

// Short monogram per org, keyed off the experience id.
const MONOGRAM: Record<string, string> = {
  ibm: "IBM",
  "umd-math-coach": "UMD",
  "abc-care": "ABC",
  "catt-lab": "CATT",
  "nasa-coop": "NASA",
  "howard-ta": "HCC",
}

// Fan tint per card so the deck reads as a spectrum, not a monotone stack.
const TINTS = [
  "from-violet-500/25 to-indigo-500/10",
  "from-cyan-400/25 to-sky-500/10",
  "from-emerald-400/25 to-teal-500/10",
  "from-fuchsia-500/25 to-violet-500/10",
  "from-blue-500/25 to-cyan-400/10",
  "from-amber-400/20 to-orange-500/10",
]

// Each tile links to that role's dedicated section: the IBM centerpiece is
// #ibm, every other role is #exp-<id> (see ExperienceSection cards).
const cards: CardItem[] = portfolio.experiences.map((exp, i) => ({
  alt: `${exp.role} — ${exp.org}`,
  linkUrl: i === 0 ? "#ibm" : `#exp-${exp.id}`,
}))

export function ExperienceFan() {
  return (
    <section
      id="experience-fan"
      className="snap-section relative scroll-mt-24 py-24 sm:py-28"
    >
      <div className="relative mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="flex items-center justify-center gap-3">
            <Layers className="h-5 w-5 text-cyan-300" />
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-white/50">
              Every role, fanned out
            </span>
          </div>
          <h2 className="mt-3 text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Experience at a glance
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-sm text-white/55">
            Hover a card to lift it. The deck fans every role I've held —
            monogram, title, and a one-line take.
          </p>
        </Reveal>

        <div className="mt-8">
          <SocialCards
            cards={cards}
            render={(_card, index) => {
              const exp = portfolio.experiences[index]
              const mono = MONOGRAM[exp.id] ?? exp.org.slice(0, 3).toUpperCase()
              const tint = TINTS[index % TINTS.length]
              return (
                <div
                  className={`relative flex h-full w-full flex-col justify-between overflow-hidden rounded-[1.25rem] border border-white/10 bg-gradient-to-br ${tint} p-5`}
                >
                  {/* aurora glow */}
                  <div className="pointer-events-none absolute inset-0 aurora-mesh opacity-30" />
                  <div className="relative">
                    <div className="font-black leading-none tracking-tight text-white/95">
                      <span
                        className={
                          mono.length >= 4
                            ? "text-3xl sm:text-4xl"
                            : "text-4xl sm:text-5xl"
                        }
                      >
                        {mono}
                      </span>
                    </div>
                    <p className="mt-3 font-mono text-[0.65rem] uppercase tracking-[0.25em] text-white/50">
                      {exp.period}
                    </p>
                  </div>
                  <div className="relative">
                    <h3 className="text-base font-semibold leading-tight text-white sm:text-lg">
                      {exp.role}
                    </h3>
                    <p className="mt-1 text-xs text-white/60">{exp.org.split("(")[0].trim()}</p>
                    <p className="mt-3 text-pretty text-xs leading-relaxed text-white/70 line-clamp-4">
                      {exp.short}
                    </p>
                  </div>
                </div>
              )
            }}
          />
        </div>
      </div>
    </section>
  )
}

export default ExperienceFan
