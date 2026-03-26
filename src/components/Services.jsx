import { useLang } from '../context/LangContext'

export default function Services() {
  const { translations } = useLang()
  const services = translations?.services

  if (!services) return null

  return (
    <section id="services" className="bg-muted/20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="section-title">{services.title}</h2>
        <div className="grid gap-6 md:grid-cols-2 mt-10">
          {services.items?.map((s, i) => (
            <div
              key={`${s.title}-${i}`}
              className="p-6 rounded-gl glass-effect border border-border hover-lift"
            >
              <h3 className="text-lg font-semibold text-primary">{s.title}</h3>
              <p className="text-muted-foreground text-sm mt-3 leading-relaxed whitespace-pre-line">
                {s.description}
              </p>
              {Array.isArray(s.details) && s.details.length > 0 && (
                <ul className="mt-4 space-y-2 text-muted-foreground text-sm list-disc list-inside">
                  {s.details.map((d, j) => (
                    <li key={j}>{d}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

