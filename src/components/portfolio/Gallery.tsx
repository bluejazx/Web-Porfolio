import { Camera } from "lucide-react"
import { Reveal } from "./Reveal"
import { portfolio } from "@/content/portfolio"

const { gallery } = portfolio

export function Gallery() {
  return (
    <section id="gallery" className="snap-section relative scroll-mt-24 py-24 sm:py-28">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <div className="flex items-center gap-3">
            <Camera className="h-5 w-5 text-violet-300" />
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-white/50">
              On site
            </span>
          </div>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Gallery
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {gallery.map((img, i) => (
            <Reveal key={img.src} delay={i * 0.08}>
              <figure className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                />
                {img.caption ? (
                  <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4 font-mono text-xs text-white/80">
                    {img.caption}
                  </figcaption>
                ) : null}
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery
