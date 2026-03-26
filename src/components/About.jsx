import { useState } from 'react'
import { useLang } from '../context/LangContext'

export default function About() {
  const { t, lang, translations } = useLang()
  const [imgError, setImgError] = useState(false)
  const avatarSrc = '/avatar.png' // Put your avatar file here for the real image.
  const location = lang === 'ar' ? 'القاهرة، مصر' : 'Cairo, Egypt'
  const languages = `${t('about.arabic')} · ${t('about.english')}`
  const education = translations?.education?.degree ?? ''
  const closingLine = lang === 'ar'
    ? 'أؤمن أن أفضل البرامج تتولد عند تقاطع الكود النظيف والتصميم الذكي وتعاطف حقيقي مع المستخدم.'
    : 'I believe great software is built at the intersection of clean code, thoughtful design, and genuine empathy for the user.'

  return (
    <section id="about" className="bg-muted/20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <div className="w-44 h-44 rounded-full glass-effect hover-lift overflow-hidden flex items-center justify-center">
              {imgError ? (
                <div className="w-28 h-28 rounded-full bg-gradient-to-r from-primary to-accent" aria-hidden="true" />
              ) : (
                <img
                  src={avatarSrc}
                  alt="Sandy Magdy"
                  className="w-full h-full object-cover"
                  onError={() => setImgError(true)}
                />
              )}
            </div>
          </div>

          <div>
            <h2 className="section-title">{t('about.title')}</h2>
            <div className="mt-2">
              <h3 className="text-3xl md:text-4xl font-bold">
                {t('about.name') || 'Sandy Magdy'}
              </h3>
              <p className="text-primary font-semibold mt-2 text-lg">Frontend Developer</p>
            </div>

            <p className="text-muted-foreground text-lg leading-relaxed whitespace-pre-line mt-6">
              {t('about.paragraph')}
            </p>

            <div className="mt-8 grid sm:grid-cols-3 gap-3">
              <span className="px-4 py-2 rounded-gl glass-effect text-muted-foreground text-sm">
                <span className="block text-xs opacity-80 mb-1">{lang === 'ar' ? 'الموقع' : 'Location'}</span>
                {location}
              </span>
              <span className="px-4 py-2 rounded-gl glass-effect text-muted-foreground text-sm">
                <span className="block text-xs opacity-80 mb-1">{lang === 'ar' ? 'اللغات' : 'Languages'}</span>
                {languages}
              </span>
              <span className="px-4 py-2 rounded-gl glass-effect text-muted-foreground text-sm">
                <span className="block text-xs opacity-80 mb-1">{lang === 'ar' ? 'التعليم' : 'Education'}</span>
                {education || (lang === 'ar' ? '—' : '—')}
              </span>
            </div>

            <p className="text-muted-foreground mt-8 leading-relaxed">
              {t('about.closingLine') || closingLine}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
