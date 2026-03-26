import { useState } from 'react'
import { useLang } from '../context/LangContext'

export default function Contact() {
  const { t, translations, lang } = useLang()
  const contact = translations?.contact

  if (!contact) return null

  const form = contact.form
  const emailTo = 'sandymagd09@gmail.com'
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const hintRaw = t?.('contact.form.hint')
  const hintText = hintRaw === 'contact.form.hint'
    ? (lang === 'ar' ? 'سيتم فتح رسالة في تطبيق البريد الإلكتروني.' : 'Your message will open in your email app.')
    : hintRaw

  const onSubmit = (e) => {
    e.preventDefault()
    const subject = `Portfolio contact from ${name || email || 'visitor'}`
    const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    const href = `mailto:${emailTo}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    window.location.href = href
  }

  return (
    <section id="contact" className="bg-muted/20">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="section-title">{contact.title}</h2>
        <p className="text-muted-foreground text-lg mb-10">{contact.subtitle}</p>
        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-6">
          <a href={`mailto:${emailTo}`} className="flex items-center justify-center gap-3 text-foreground hover:text-primary transition font-medium">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            {emailTo}
          </a>
          <a href="https://www.linkedin.com/in/sandymagdy" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 text-foreground hover:text-primary transition font-medium">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            LinkedIn
          </a>
        </div>

        <div className="mt-10 max-w-xl mx-auto glass-effect rounded-gl border border-border p-6">
          <form onSubmit={onSubmit} className="text-start">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="text-sm text-muted-foreground">{form?.name}</span>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  className="mt-2 w-full bg-transparent border border-border rounded-gl px-4 py-2 text-foreground outline-none focus:border-primary"
                  required
                />
              </label>
              <label className="block">
                <span className="text-sm text-muted-foreground">{form?.email}</span>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  className="mt-2 w-full bg-transparent border border-border rounded-gl px-4 py-2 text-foreground outline-none focus:border-primary"
                  required
                />
              </label>
            </div>

            <label className="block mt-4">
              <span className="text-sm text-muted-foreground">{form?.message}</span>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={5}
                className="mt-2 w-full bg-transparent border border-border rounded-gl px-4 py-2 text-foreground outline-none focus:border-primary"
                required
              />
            </label>

            <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
              <p className="text-muted-foreground text-sm">
                {hintText}
              </p>
              <button
                type="submit"
                className="px-6 py-3 rounded-full bg-gradient-to-r from-primary to-accent text-white font-semibold shadow-lg shadow-primary/25 hover:scale-105 transition"
              >
                {form?.send}
              </button>
            </div>
          </form>
        </div>

        <p className="text-muted-foreground mt-10">📍 {contact.cairo}</p>
      </div>
    </section>
  )
}
