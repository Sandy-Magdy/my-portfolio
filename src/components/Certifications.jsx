import { useLang } from '../context/LangContext'

export default function Certifications() {
  const { translations } = useLang()
  const certs = translations?.certifications

  if (!certs) return null

  return (
    <section id="certifications">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title">{certs.title}</h2>
        <div className="space-y-6">
          {certs.items?.map((c, i) => (
            <div key={i} className="p-5 rounded-gl glass-effect border border-border hover-lift">
              <h3 className="text-lg font-semibold text-foreground">{c.name}</h3>
              <p className="text-primary text-sm mt-1">{c.issuer}</p>
              <p className="text-muted-foreground text-sm">{c.period}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
