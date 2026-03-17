import { useState } from 'react'
import { MapPin, Github, Linkedin, Send, CheckCircle, AlertCircle, Loader } from 'lucide-react'
import { Container, SectionHeader, Card } from '../../components'
import { personalInfo, socialLinks } from '../../data'
import { useLanguage } from '../../i18n'

// ─────────────────────────────────────────────────────────────────────────────
// FORMSPREE CONFIGURATION
// Endpoint ID from formspree.io — contact form submissions are forwarded
// to the associated email without exposing it in the source code.
// ─────────────────────────────────────────────────────────────────────────────
const FORMSPREE_ID = 'mjgarjkw'

const iconMap: Record<string, typeof Github> = { Github, Linkedin }

// Form status — simplifies conditional rendering in JSX
type FormStatus = 'idle' | 'loading' | 'success' | 'error'

interface FormData {
  name: string
  email: string
  message: string
  // Honeypot — field invisible to humans, visible to bots.
  // If a bot fills it in, the submission is silently rejected.
  _gotcha: string
}

export function ContactSection() {
  const { t, lang } = useLanguage()
 
  const location =
    lang === 'en' && personalInfo.locationEn
      ? personalInfo.locationEn
      : personalInfo.location
 
  // Form state
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
    _gotcha: '',
  })
  const [status, setStatus] = useState<FormStatus>('idle')
 
  // Single handler for all input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }
 
  // Form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
 
    // Honeypot — silent bot protection
    if (formData._gotcha) return
 
    // Basic client-side validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      return
    }
 
    setStatus('loading')
 
    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _gotcha: formData._gotcha,
        }),
      })
 
      if (response.ok) {
        setStatus('success')
        // Clear form after successful submission
        setFormData({ name: '', email: '', message: '', _gotcha: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }
 
  return (
    <section id="contact" className="py-20 bg-[var(--color-bg-secondary)] dark:bg-gray-800/50">
      <Container size="md">
        <SectionHeader
          title={t('contact.title')}
          subtitle={t('contact.subtitle')}
        />

        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          {/* ── Left column: location + social media ── */}
          <div className="flex flex-col gap-6">
            <Card variant="bordered">
              <Card.Body className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
                  {t('contact.whereToFind')}
                </h3>
 
                <div className="flex items-center gap-4 p-3 rounded-lg">
                  <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {t('contact.location')}
                    </p>
                    <p className="text-gray-900 dark:text-white font-medium">
                      {location}
                    </p>
                  </div>
                </div>
              </Card.Body>
            </Card>
 
            <Card variant="bordered" className="flex-1">
              <Card.Body className="p-6 h-full flex flex-col">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  {t('contact.socialMedia')}
                </h3>
 
                <div className="space-y-3 flex-1">
                  {socialLinks.map(link => {
                    const Icon = iconMap[link.icon] ?? Github
                    return (
                      <a
                        key={link.name}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700/50 transition-colors group"
                      >
                        <div className="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center group-hover:bg-blue-100 dark:group-hover:bg-blue-900/30 transition-colors">
                          <Icon className="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
                        </div>
                        <span className="font-medium text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {link.name}
                        </span>
                      </a>
                    )
                  })}
                </div>
              </Card.Body>
            </Card>
          </div>
 
          {/* ── Right column: contact form ── */}
          <Card variant="bordered">
            <Card.Body className="p-6 h-full flex flex-col">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                {t('contact.writeToMe')}
              </h3>
 
              {/* Status: success */}
              {status === 'success' ? (
                <div className="flex flex-col items-center justify-center py-10 text-center gap-4 flex-1">
                  <CheckCircle className="w-12 h-12 text-green-500" />
                  <p className="text-gray-700 dark:text-gray-300 font-medium">
                    {t('contact.form.successMessage')}
                  </p>
                  <button
                    type="button"
                    onClick={() => setStatus('idle')}
                    className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    {t('contact.form.sendAnother')}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 flex-1 flex flex-col">
                  {/* Honeypot field — hidden from users, traps bots */}
                  <input
                    type="text"
                    name="_gotcha"
                    value={formData._gotcha}
                    onChange={handleChange}
                    className="hidden"
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                  />
 
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      {t('contact.form.name')}
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder={t('contact.form.namePlaceholder')}
                      disabled={status === 'loading'}
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition disabled:opacity-50"
                    />
                  </div>
 
                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      {t('contact.form.email')}
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder={t('contact.form.emailPlaceholder')}
                      disabled={status === 'loading'}
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition disabled:opacity-50"
                    />
                  </div>
 
                  {/* Message — flex-1 so it stretches to fill remaining space */}
                  <div className="flex-1 flex flex-col">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      {t('contact.form.message')}
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder={t('contact.form.messagePlaceholder')}
                      rows={5}
                      disabled={status === 'loading'}
                      className="w-full flex-1 min-h-[120px] px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition resize-none disabled:opacity-50"
                    />
                  </div>
 
                  {/* Error */}
                  {status === 'error' && (
                    <div className="flex items-center gap-2 text-red-600 dark:text-red-400 text-sm">
                      <AlertCircle className="w-4 h-4 flex-shrink-0" />
                      <span>{t('contact.form.errorMessage')}</span>
                    </div>
                  )}
 
                  {/* Submit button */}
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-lg bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-medium transition-colors"
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader className="w-4 h-4 animate-spin" />
                        {t('contact.form.sending')}
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        {t('contact.form.send')}
                      </>
                    )}
                  </button>
                </form>
              )}
            </Card.Body>
          </Card>
        </div>
      </Container>
    </section>
  )
}