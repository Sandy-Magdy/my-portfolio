import { useState, useEffect } from 'react'
import { useLang } from '../context/LangContext'

const linkIds = [
  { href: '#home', key: 'home' },
  { href: '#projects', key: 'projects' },
  { href: '#about', key: 'about' },
  { href: '#experience', key: 'experience' },
  { href: '#contact', key: 'contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [isDark, setIsDark] = useState(false)
  const { lang, setLang, t } = useLang()

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains('dark'))
  }, [])

  const toggleTheme = () => {
    document.documentElement.classList.toggle('dark')
    const nowDark = document.documentElement.classList.contains('dark')
    localStorage.setItem('theme', nowDark ? 'dark' : 'light')
    setIsDark(nowDark)
  }

  const scrollTo = (e, href) => {
    e?.preventDefault()
    const id = href.replace('#', '')
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-effect">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
        <a href="#home" onClick={(e) => scrollTo(e, '#home')} className="text-xl font-bold gradient-text">
          Sandy Magdy
        </a>
        <ul className="hidden md:flex items-center gap-8">
          {linkIds.map(({ href, key }) => (
            <li key={href}>
              <a href={href} onClick={(e) => scrollTo(e, href)} className="text-foreground hover:text-primary transition-colors duration-300 font-medium">
                {t(`nav.${key}`)}
              </a>
            </li>
          ))}
          <li className="flex items-center gap-1">
            <button
              type="button"
              onClick={() => setLang('en')}
              className={`px-2 py-1 rounded text-sm font-medium transition ${lang === 'en' ? 'bg-primary text-white' : 'text-muted-foreground hover:text-foreground'}`}
              title="English"
            >
              EN
            </button>
            <span className="text-muted-foreground/60">|</span>
            <button
              type="button"
              onClick={() => setLang('ar')}
              className={`px-2 py-1 rounded text-sm font-medium transition ${lang === 'ar' ? 'bg-primary text-white' : 'text-muted-foreground hover:text-foreground'}`}
              title="العربية"
            >
              ع
            </button>
          </li>
          <li>
            <button
              type="button"
              onClick={toggleTheme}
              className="p-2 rounded-lg text-foreground hover:bg-primary/10 hover:text-primary transition"
              aria-label={isDark ? 'Light mode' : 'Dark mode'}
            >
              {isDark ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
              )}
            </button>
          </li>
        </ul>
        <div className="flex items-center gap-2 md:hidden">
          <button type="button" onClick={() => setLang(lang === 'en' ? 'ar' : 'en')} className="px-2 py-1 rounded text-sm font-medium text-foreground border border-border" title={lang === 'en' ? 'العربية' : 'English'}>
            {lang === 'en' ? 'ع' : 'EN'}
          </button>
          <button type="button" onClick={toggleTheme} className="p-2 text-foreground" aria-label="Theme">
            {isDark ? <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg> : <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>}
          </button>
          <button type="button" className="p-2 text-foreground" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg> : <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>}
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden py-4 px-4 border-t border-border">
          <ul className="flex flex-col gap-2">
            {linkIds.map(({ href, key }) => (
              <li key={href}>
                <a href={href} onClick={(e) => scrollTo(e, href)} className="block py-2 text-foreground hover:text-primary font-medium">
                  {t(`nav.${key}`)}
                </a>
              </li>
            ))}
            <li className="pt-2 border-t border-border flex gap-2">
              <button type="button" onClick={() => { setLang('en'); setOpen(false) }} className={`px-3 py-1.5 rounded text-sm ${lang === 'en' ? 'bg-primary text-white' : 'text-muted-foreground'}`}>EN</button>
              <button type="button" onClick={() => { setLang('ar'); setOpen(false) }} className={`px-3 py-1.5 rounded text-sm ${lang === 'ar' ? 'bg-primary text-white' : 'text-muted-foreground'}`}>ع</button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}
