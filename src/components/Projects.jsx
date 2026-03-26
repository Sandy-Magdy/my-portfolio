import { useLang } from '../context/LangContext'
import { projectUrls } from '../translations'

function ProjectCard({ project, liveUrl, repoUrl, t }) {
  return (
    <div className="group glass-effect rounded-gl overflow-hidden border border-border hover-lift">
      <div className="p-6">
        <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition">
          {project.title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 whitespace-pre-line leading-relaxed">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, j) => (
            <span key={j} className="px-2 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-3">
          {liveUrl && (
            <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary to-accent text-white text-sm font-medium hover:opacity-90 transition">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              {t('projects.liveDemo')}
            </a>
          )}
          {repoUrl && (
            <a href={repoUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border text-foreground text-sm font-medium hover:bg-primary/10 hover:border-primary transition">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.545 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
              {t('projects.code')}
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  const { t, translations } = useLang()
  const projectsData = translations?.projects

  if (!projectsData) return null
  const list = projectsData.list ?? []

  return (
    <section id="projects" className="bg-muted/30">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="section-title">{projectsData.title}</h2>
        <p className="section-subtitle">{projectsData.subtitle}</p>
        <div className="grid gap-8 md:grid-cols-2">
          {list.map((project, i) => (
            <ProjectCard
              key={i}
              project={project}
              liveUrl={projectUrls[i]?.liveUrl}
              repoUrl={projectUrls[i]?.repoUrl}
              t={t}
            />
          ))}
        </div>
        <div className="text-center mt-12">
          <a href="#contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary to-accent text-white font-semibold shadow-lg shadow-primary/25 hover:scale-105 transition">
            {projectsData.getInTouch}
          </a>
        </div>
      </div>
    </section>
  )
}
