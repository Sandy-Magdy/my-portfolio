import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Services from './components/Services'
import Reviews from './components/Reviews'
import Contact from './components/Contact'
import { useLang } from './context/LangContext'

export default function App() {
  const { t } = useLang()
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Services />
        <Reviews />
        <Contact />
      </main>
      <footer className="py-6 text-center text-muted-foreground text-sm border-t border-border">
        © {new Date().getFullYear()} Sandy Magdy. {t('footer')}.
      </footer>
    </>
  )
}
