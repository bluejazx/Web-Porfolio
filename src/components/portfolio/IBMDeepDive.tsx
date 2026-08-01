import { CheckCircle2, Coins, Gauge, Route, Sparkles, ShieldCheck } from "lucide-react"
import { Reveal } from "./Reveal"
import { portfolio } from "@/content/portfolio"

const ibm = portfolio.experiences[0]

/** Labeled metrics — every number carries its provenance label (Joshua's rule). */
const stats = [
  {
    icon: CheckCircle2,
    value: "68 / 68",
    label: "tests green from a clean build",
    tag: "Measured",
    accent: "text-emerald-300",
  },
  {
    icon: Coins,
    value: "~90%",
    label: "cut on one manual pricing process",
    tag: "Verified · stakeholder-reported",
    accent: "text-cyan-300",
  },
  {
    icon: Gauge,
    value: "Qualitative",
    label: "metered savings vs a premium-model baseline",
    tag: "Measured · stated qualitatively",
    accent: "text-violet-300",
  },
]

const pipeline = [
  {
    icon: Route,
    title: "Route by task, not by default",
    body: "Each step in an agent workflow is inspected and sent to the most cost-effective capable model — premium models are reserved for the genuinely hard steps.",
  },
  {
    icon: ShieldCheck,
    title: "Quality is never traded away",
    body: "An independent review pass guards output. Cost is metered for visibility only — it is never allowed to degrade quality.",
  },
  {
    icon: Gauge,
    title: "Prove it, live",
    body: "A real-time dashboard prices every AI call against a premium-model baseline and shows what each workflow costs and saves as it runs.",
  },
]

export function IBMDeepDive() {
  // Split the long-form narrative into paragraphs for typographic rhythm.
  const paragraphs = ibm.long.split("\n\n")

  return (
    <section id="ibm" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <div className="flex items-center gap-3">
            <Sparkles className="h-5 w-5 text-violet-300" />
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-white/50">
              The centerpiece
            </span>
          </div>
          <h2 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Making advanced AI agents{" "}
            <span className="aurora-text">affordable to run at scale</span>
          </h2>
          <p className="mt-3 font-mono text-sm text-cyan-300/80">
            {ibm.role} · {ibm.org} · {ibm.period}
          </p>
        </Reveal>

        {/* Labeled stat rail */}
        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          {stats.map((s, i) => (
            <Reveal key={s.value} delay={i * 0.08}>
              <div className="h-full rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur">
                <s.icon className={`h-6 w-6 ${s.accent}`} />
                <div className="mt-4 text-3xl font-bold text-white">{s.value}</div>
                <div className="mt-1 text-sm text-white/70">{s.label}</div>
                <div className="mt-3 font-mono text-[0.65rem] uppercase tracking-wider text-white/40">
                  {s.tag}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Narrative */}
        <Reveal delay={0.05}>
          <div className="mt-14 space-y-5 text-lg leading-relaxed text-white/75">
            {paragraphs.map((p, i) => (
              <p key={i} className={i === 0 ? "text-pretty text-white/90" : "text-pretty"}>
                {p}
              </p>
            ))}
          </div>
        </Reveal>

        {/* How it works — the routing motif */}
        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {pipeline.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.1}>
              <div className="relative h-full rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-transparent p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10">
                  <step.icon className="h-5 w-5 text-cyan-300" />
                </div>
                <div className="mt-4 font-mono text-xs text-white/40">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-1 text-lg font-semibold text-white">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/65">{step.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Tags */}
        <Reveal delay={0.05}>
          <div className="mt-10 flex flex-wrap gap-2">
            {ibm.tags.map((t) => (
              <span
                key={t}
                className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 font-mono text-xs text-white/60"
              >
                {t}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default IBMDeepDive
