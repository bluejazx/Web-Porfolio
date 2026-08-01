import { MapPin, ArrowUp } from "lucide-react"
import { GradientShimmer } from "@/components/ui/gradient-shimmer"
import { Reveal } from "./Reveal"
import { iconFor } from "@/lib/icon"
import { portfolio } from "@/content/portfolio"

const { person, meta } = portfolio

export function Contact() {
  return (
    <section id="contact" className="snap-section relative scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <Reveal>
          <p className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.35em] text-white/40">
            <MapPin className="h-3.5 w-3.5 text-cyan-300/70" />
            Constraint is the medium.
          </p>
          <GradientShimmer
            as="h2"
            gradient="twilight"
            className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl"
          >
            Let&apos;s build something efficient.
          </GradientShimmer>
          <p className="mx-auto mt-5 max-w-xl text-pretty text-white/70">
            {person.summary}
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            {person.contact.map((c) => {
              const Icon = iconFor(c.icon)
              return (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-5 py-2.5 text-sm text-white/80 transition hover:border-cyan-400/40 hover:text-white"
                  title={c.placeholder ? "Placeholder — update before publishing" : undefined}
                >
                  <Icon className="h-4 w-4" />
                  {c.label}
                  {c.placeholder ? (
                    <span className="font-mono text-[0.6rem] uppercase tracking-wider text-amber-300/70">
                      TODO
                    </span>
                  ) : null}
                </a>
              )
            })}
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          {/* Back to top — jumps to the hero (#top). */}
          <a
            href="#top"
            className="mt-16 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-5 py-2.5 text-sm text-white/70 transition hover:border-cyan-400/40 hover:text-white"
          >
            <ArrowUp className="h-4 w-4" />
            Back to top
          </a>
          <p className="mt-10 font-mono text-xs text-white/35">
            {person.name} · {meta.repo} · v{meta.version}
          </p>
        </Reveal>
      </div>
    </section>
  )
}

export default Contact
