import { Award, BookOpen } from "lucide-react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Reveal } from "./Reveal"
import { iconFor } from "@/lib/icon"
import { portfolio } from "@/content/portfolio"

const { education, skills, honors } = portfolio

export function EducationSkills() {
  return (
    <section id="education" className="snap-section relative scroll-mt-24 py-24 sm:py-28">
      <div className="mx-auto max-w-5xl px-6">
        {/* Education */}
        <Reveal>
          <div className="flex items-center gap-3">
            <BookOpen className="h-5 w-5 text-emerald-300" />
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-white/50">
              Foundations
            </span>
          </div>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Education
          </h2>
        </Reveal>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {education.map((ed, i) => {
            const Icon = iconFor(ed.icon)
            return (
              <Reveal key={ed.id} delay={(i % 2) * 0.08}>
                <Card className="h-full border-white/10 bg-white/[0.03] backdrop-blur">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-400/20 to-cyan-400/20 ring-1 ring-white/10">
                        <Icon className="h-5 w-5 text-emerald-300" />
                      </div>
                      <div>
                        <h3 className="text-base font-semibold text-white">{ed.credential}</h3>
                        <p className="text-sm text-white/70">{ed.institution}</p>
                        <p className="mt-1 font-mono text-xs text-cyan-300/70">{ed.period}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {ed.details.map((d, di) => (
                        <li key={di} className="flex gap-2 text-sm text-white/65">
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-emerald-400/70" />
                          <span className="text-pretty">{d}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </Reveal>
            )
          })}
        </div>

        {/* Honors */}
        <Reveal delay={0.05}>
          <div className="mt-6 flex flex-wrap items-center gap-2">
            <Award className="h-4 w-4 text-amber-300/80" />
            {honors.map((h) => (
              <span
                key={h}
                className="rounded-full border border-amber-300/20 bg-amber-300/[0.06] px-3 py-1 text-xs text-amber-100/80"
              >
                {h}
              </span>
            ))}
          </div>
        </Reveal>

        {/* Skills */}
        <div id="skills" className="mt-20 scroll-mt-24">
          <Reveal>
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-white/50">
              The toolkit
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Skills
            </h2>
          </Reveal>

          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {skills.map((group, i) => {
              const Icon = iconFor(group.icon)
              return (
                <Reveal key={group.label} delay={i * 0.08}>
                  <div className="h-full rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur">
                    <div className="flex items-center gap-2">
                      <Icon className="h-5 w-5 text-violet-300" />
                      <h3 className="text-sm font-semibold text-white">{group.label}</h3>
                    </div>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {group.items.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 font-mono text-xs text-white/65"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default EducationSkills
