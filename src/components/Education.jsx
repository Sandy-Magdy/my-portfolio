import { useLang } from '../context/LangContext'

export default function Education() {
  const { t, translations } = useLang()
  const ed = translations?.education

  if (!ed) return null

  return (
    <section id="education" className="bg-muted/20">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title">{ed.title}</h2>
        <div className="border-l-2 border-accent pl-6 relative">
          <div className="absolute -left-2 top-0 w-3 h-3 rounded-full bg-accent" />
          <h3 className="text-xl font-semibold text-foreground">{ed.degree}</h3>
          <p className="text-primary font-medium">{ed.school}</p>
          <p className="text-muted-foreground text-sm">{ed.location}</p>
          <p className="mt-2 text-muted-foreground">{ed.gpa}</p>
        </div>
      </div>
    </section>
  )
}
