import { useLang } from '../context/LangContext'

export default function Reviews() {
  const { translations } = useLang()
  const reviews = translations?.reviews

  if (!reviews) return null

  return (
    <section id="reviews" className="bg-muted/20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="section-title">{reviews.title}</h2>
        <div className="grid gap-6 md:grid-cols-2 mt-10">
          {reviews.items?.map((r, i) => (
            <div
              key={`${r.name}-${i}`}
              className="p-6 rounded-gl glass-effect border border-border hover-lift"
            >
              <p className="text-muted-foreground text-sm leading-relaxed whitespace-pre-line">
                “{r.text}”
              </p>
              <div className="mt-5">
                <div className="font-semibold text-foreground">{r.name}</div>
                <div className="text-primary text-sm">{r.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

