import { useLang } from '../context/LangContext'

export default function Skills() {
  const { translations } = useLang()
  const skills = translations?.skills

  if (!skills) return null

  return (
    <section id="skills" className="bg-muted/20">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title">{skills.title}</h2>
        <div className="grid gap-6 sm:grid-cols-2">
          {skills.groups?.map((group, i) => (
            <div key={i} className="p-5 rounded-gl glass-effect border border-border hover-lift">
              <h3 className="text-primary font-semibold mb-3">{group.title}</h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill, j) => (
                  <span key={j} className="px-3 py-1 rounded-full bg-primary/10 text-foreground text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
