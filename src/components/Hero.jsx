import { useLang } from '../context/LangContext'

export default function Hero() {
  const { t } = useLang()

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center text-center pt-16 relative particles-bg">
      <div className="max-w-3xl mx-auto px-4">
        <p className="text-muted-foreground text-lg mb-2">{t('hero.hello')}</p>
        <h1 className="text-4xl md:text-6xl font-bold mb-2">
          <span className="gradient-text">Sandy Magdy</span>
        </h1>
        <p className="text-xl md:text-2xl text-primary font-semibold mb-4">Frontend Developer</p>
        <p className="text-muted-foreground mb-10 max-w-xl mx-auto whitespace-pre-line">{t('hero.bio')}</p>
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <a href="#contact" className="px-6 py-3 rounded-full bg-gradient-to-r from-primary to-accent text-white font-semibold shadow-lg shadow-primary/25 hover:scale-105 transition">
            {t('hero.getInTouch')}
          </a>
          <a href="/CV.pdf" download className="px-6 py-3 rounded-full border-2 border-primary/50 text-foreground font-semibold hover:bg-primary/10 transition">
            Download CV
          </a>
        </div>
      </div>
    </section>
  )
}
