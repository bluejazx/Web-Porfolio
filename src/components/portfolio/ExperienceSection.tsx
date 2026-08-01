import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Reveal } from "./Reveal"
import { iconFor } from "@/lib/icon"
import { portfolio } from "@/content/portfolio"

// Everything after the IBM centerpiece gets its own card.
const rest = portfolio.experiences.slice(1)

export function ExperienceSection() {
  return (
    <section id="experience" className="relative scroll-mt-24 py-24 sm:py-28">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-white/50">
            The ledger
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Experience
          </h2>
        </Reveal>

        {/* Jump nav to each experience (IBM + the rest). */}
        <Reveal delay={0.05}>
          <nav className="mt-6 flex flex-wrap gap-2">
            <a
              href="#ibm"
              className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-sm text-white/70 transition hover:border-cyan-400/40 hover:text-white"
            >
              IBM Consulting
            </a>
            {rest.map((exp) => (
              <a
                key={exp.id}
                href={`#exp-${exp.id}`}
                className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-sm text-white/70 transition hover:border-cyan-400/40 hover:text-white"
              >
                {exp.org.split("(")[0].trim()}
              </a>
            ))}
          </nav>
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {rest.map((exp, i) => {
            const Icon = iconFor(exp.icon)
            return (
              <Reveal key={exp.id} delay={(i % 2) * 0.08}>
                <Card
                  id={`exp-${exp.id}`}
                  className="h-full scroll-mt-24 border-white/10 bg-white/[0.03] backdrop-blur transition hover:border-white/20"
                >
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500/20 to-cyan-400/20 ring-1 ring-white/10">
                        <Icon className="h-5 w-5 text-cyan-300" />
                      </div>
                      <div className="min-w-0">
                        <h3 className="text-lg font-semibold text-white">{exp.role}</h3>
                        <p className="text-sm text-white/70">{exp.org}</p>
                        <p className="mt-1 font-mono text-xs text-cyan-300/70">
                          {exp.period} · {exp.location}
                        </p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm leading-relaxed text-white/70">{exp.short}</p>
                    <ul className="mt-4 space-y-2">
                      {exp.highlights.map((h, hi) => (
                        <li key={hi} className="flex gap-2 text-sm text-white/65">
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-cyan-400/70" />
                          <span className="text-pretty">{h}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {exp.tags.map((t) => (
                        <span
                          key={t}
                          className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-0.5 font-mono text-[0.7rem] text-white/55"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ExperienceSection
