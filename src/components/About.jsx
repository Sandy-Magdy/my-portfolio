import { useLang } from '../context/LangContext'

export default function About() {
  const { t } = useLang()

  return (
    <section id="about" className="bg-muted/20">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title">{t('about.title')}</h2>
        <p className="text-muted-foreground text-lg leading-relaxed">
          {t('about.paragraph')}
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <span className="px-4 py-2 rounded-gl glass-effect text-muted-foreground text-sm">Cairo, Egypt</span>
          <span className="px-4 py-2 rounded-gl glass-effect text-muted-foreground text-sm">{t('about.arabic')}</span>
          <span className="px-4 py-2 rounded-gl glass-effect text-muted-foreground text-sm">{t('about.english')}</span>
        </div>
      </div>
    </section>
  )
}
