import { portfolio } from "@/content/portfolio"

/**
 * Fixed top-right version badge (Joshua's convention: surface the shippable
 * version visibly in the running artifact). Reads portfolio.meta.version.
 */
export function VersionBadge() {
  return (
    <div className="fixed right-4 top-4 z-50">
      <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-3 py-1 font-mono text-xs text-white/70 backdrop-blur-md">
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_2px_rgba(52,211,153,0.6)]" />
        v{portfolio.meta.version}
      </span>
    </div>
  )
}

export default VersionBadge
