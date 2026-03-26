import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Experience from './components/Experience.jsx'
import Services from './components/Services.jsx'
import Reviews from './components/Reviews.jsx'
import Contact from './components/Contact.jsx'

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
