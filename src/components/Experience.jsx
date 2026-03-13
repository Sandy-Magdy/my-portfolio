import { useLang } from '../context/LangContext'

export default function Experience() {
  const { translations } = useLang()
  const jobs = translations?.experience?.jobs ?? []

  return (
    <section id="experience">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title">{translations?.experience?.title ?? 'Experience'}</h2>
        <div className="space-y-10">
          {jobs.map((job, i) => (
            <div key={i} className="border-l-2 border-accent pl-6 relative">
              <div className="absolute -left-2 top-0 w-3 h-3 rounded-full bg-accent" />
              <h3 className="text-xl font-semibold text-foreground">{job.role}</h3>
              <p className="text-primary font-medium">{job.company}</p>
              <p className="text-muted-foreground text-sm">{job.location} · {job.period}</p>
              <ul className="mt-3 space-y-1 text-muted-foreground list-disc list-inside">
                {job.points.map((point, j) => (
                  <li key={j}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
