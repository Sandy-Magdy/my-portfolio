import { useState, useEffect } from 'react'
import { useLang } from '../context/LangContext'

export default function Hero() {
  const { translations } = useLang()
  const titles = translations?.hero?.titles || []
  const [displayText, setDisplayText] = useState('')
  const [index, setIndex] = useState(0)
  const [isTyping, setIsTyping] = useState(true)

  useEffect(() => {
    if (!titles.length) return
    const current = titles[index]
    if (isTyping) {
      if (displayText.length < current.length) {
        const t = setTimeout(() => setDisplayText(current.slice(0, displayText.length + 1)), 100)
        return () => clearTimeout(t)
      }
      const t = setTimeout(() => setIsTyping(false), 2000)
      return () => clearTimeout(t)
    }
    if (displayText.length > 0) {
      const t = setTimeout(() => setDisplayText(displayText.slice(0, -1)), 50)
      return () => clearTimeout(t)
    }
    setIndex((i) => (i + 1) % titles.length)
    setIsTyping(true)
  }, [displayText, index, isTyping, titles])

  const t = (key) => {
    const k = key.split('.')
    let v = translations
    for (const x of k) v = v?.[x]
    return v ?? key
  }

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center text-center pt-16 relative particles-bg">
      <div className="max-w-3xl mx-auto px-4">
        <p className="text-muted-foreground text-lg mb-2">{t('hero.hello')}</p>
        <h1 className="text-4xl md:text-6xl font-bold mb-2">
          <span className="gradient-text">Sandy Magdy</span>
        </h1>
        <p className="text-xl md:text-2xl text-primary font-semibold mb-2 min-h-[2rem]">
          {displayText}
          <span className="animate-pulse">|</span>
        </p>
        <p className="text-muted-foreground mb-10 max-w-xl mx-auto">
          {t('hero.bio')}
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <a href="#projects" className="px-6 py-3 rounded-full bg-gradient-to-r from-primary to-accent text-white font-semibold shadow-lg shadow-primary/25 hover:scale-105 transition">
            {t('hero.exploreWork')}
          </a>
          <a href="#contact" className="px-6 py-3 rounded-full border-2 border-primary/50 text-foreground font-semibold hover:bg-primary/10 transition">
            {t('hero.getInTouch')}
          </a>
        </div>
        <div className="grid grid-cols-3 gap-4 max-w-md mx-auto mb-10">
          <div className="glass-effect rounded-gl p-4 hover-lift">
            <p className="text-2xl font-bold text-primary">5+</p>
            <p className="text-sm text-muted-foreground">{t('hero.projectsBuilt')}</p>
          </div>
          <div className="glass-effect rounded-gl p-4 hover-lift">
            <p className="text-2xl font-bold text-primary">2+</p>
            <p className="text-sm text-muted-foreground">{t('hero.yearsExp')}</p>
          </div>
          <div className="glass-effect rounded-gl p-4 hover-lift">
            <p className="text-2xl font-bold text-primary">∞</p>
            <p className="text-sm text-muted-foreground">{t('hero.funFactor')}</p>
          </div>
        </div>
        <p className="text-muted-foreground text-sm flex items-center justify-center gap-2 flex-wrap">
          <span>{t('hero.available')}</span>
          <span className="text-accent">📍 Cairo, Egypt</span>
        </p>
        <div className="flex justify-center gap-6 mt-8">
          <a href="https://github.com/Sandy-Magdy" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition" aria-label="GitHub">
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.545 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
          </a>
          <a href="https://www.linkedin.com/in/sandymagdy" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition" aria-label="LinkedIn">
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          </a>
        </div>
      </div>
    </section>
  )
}
