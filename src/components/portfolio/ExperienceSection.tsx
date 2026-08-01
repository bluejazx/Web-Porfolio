import { Layers, MessageCircle, ThumbsUp, Share2, MapPin, Clock } from "lucide-react"
import { Reveal } from "./Reveal"
import { iconFor } from "@/lib/icon"
import { portfolio } from "@/content/portfolio"

// Everything after the IBM centerpiece gets its own full-width horizontal
// "feed post" section (the IBM deep-dive lives at the very bottom on its own).
const rest = portfolio.experiences.slice(1)

// Monogram per role id — mirrors the fan carousel tiles.
const MONOGRAM: Record<string, string> = {
  "umd-math-coach": "UMD",
  "abc-care": "ABC",
  "catt-lab": "CATT",
  "nasa-coop": "NASA",
  "howard-ta": "HCC",
}

// Deterministic aurora tint per card so the avatars read distinct.
const TINTS = [
  "from-violet-500/30 to-cyan-400/20",
  "from-cyan-400/30 to-emerald-400/20",
  "from-fuchsia-500/30 to-violet-500/20",
  "from-emerald-400/30 to-cyan-400/20",
  "from-indigo-500/30 to-fuchsia-500/20",
]

export function ExperienceSection() {
  return (
    <section id="experience" className="relative scroll-mt-24 py-20 sm:py-24">
      <div className="relative mx-auto max-w-4xl px-6">
        <Reveal>
          <div className="flex items-center gap-3">
            <Layers className="h-5 w-5 text-cyan-300" />
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-white/50">
              The ledger
            </span>
          </div>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Experience
          </h2>
          <p className="mt-3 max-w-xl text-pretty text-white/55">
            Each role, in full — posted like a feed. IBM's story sits at the
            bottom as the centerpiece.
          </p>
        </Reveal>

        <div className="mt-12 space-y-10">
          {rest.map((exp, i) => {
            const Icon = iconFor(exp.icon)
            const mono = MONOGRAM[exp.id] ?? exp.org.slice(0, 3).toUpperCase()
            const tint = TINTS[i % TINTS.length]
            return (
              <Reveal key={exp.id}>
                {/* Full-width horizontal "feed post" section per role. */}
                <article
                  id={`exp-${exp.id}`}
                  className="snap-section scroll-mt-24 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur transition hover:border-white/20"
                >
                  {/* Meta row — avatar + org + posted-style meta. */}
                  <div className="flex items-center gap-4 border-b border-white/5 px-6 py-5 sm:px-8">
                    <div
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${tint} ring-1 ring-white/10`}
                    >
                      <span className="font-black tracking-tight text-white/95">
                        <span className={mono.length >= 4 ? "text-sm" : "text-base"}>
                          {mono}
                        </span>
                      </span>
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-semibold text-white">
                        {exp.org}
                      </p>
                      <div className="mt-0.5 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[0.7rem] text-white/45">
                        <span className="inline-flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {exp.period}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          {exp.location}
                        </span>
                        {exp.current ? (
                          <span className="rounded-full bg-emerald-400/15 px-2 py-0.5 text-emerald-300/90">
                            Current
                          </span>
                        ) : null}
                      </div>
                    </div>
                    <div className="hidden shrink-0 sm:block">
                      <Icon className="h-6 w-6 text-cyan-300/70" />
                    </div>
                  </div>

                  {/* Body — title + summary + highlights. */}
                  <div className="px-6 py-6 sm:px-8">
                    <h3 className="text-xl font-bold text-white sm:text-2xl">
                      {exp.role}
                    </h3>
                    <p className="mt-3 text-pretty leading-relaxed text-white/70">
                      {exp.short}
                    </p>
                    <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
                      {exp.highlights.map((h, hi) => (
                        <li key={hi} className="flex gap-2 text-sm text-white/65">
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-cyan-400/70" />
                          <span className="text-pretty">{h}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tag chips. */}
                    <div className="mt-5 flex flex-wrap gap-1.5">
                      {exp.tags.map((t) => (
                        <span
                          key={t}
                          className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-0.5 font-mono text-[0.7rem] text-white/55"
                        >
                          #{t.replace(/^#/, "")}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action row — decorative, mirrors the reference post anatomy. */}
                  <div className="flex items-center gap-3 border-t border-white/5 px-6 py-4 text-white/45 sm:px-8">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-white/[0.05] px-3 py-1.5 text-sm">
                      <ThumbsUp className="h-3.5 w-3.5" />
                      Impact
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-white/[0.05] px-3 py-1.5 text-sm">
                      <MessageCircle className="h-3.5 w-3.5" />
                      {exp.highlights.length}
                    </span>
                    <Share2 className="ml-auto h-4 w-4" />
                  </div>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ExperienceSection
