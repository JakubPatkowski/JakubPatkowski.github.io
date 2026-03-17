import { ArrowDown, Github, Linkedin } from 'lucide-react'
import { Container, Button } from '../../components'
import { personalInfo, socialLinks } from '../../data'
import { useLanguage } from '../../i18n'

const iconMap: Record<string, typeof Github> = { Github, Linkedin }

export function HeroSection() {
  const { t, lang } = useLanguage()

  const title = lang === 'en' && personalInfo.titleEn ? personalInfo.titleEn : personalInfo.title
  const bio   = lang === 'en' && personalInfo.bioEn   ? personalInfo.bioEn   : personalInfo.bio

  function scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-blue-950" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 dark:bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/20 dark:bg-purple-500/10 rounded-full blur-3xl" />

      <Container className="relative z-10">
        <div className="flex flex-col items-center text-center py-20">
          {/* Avatar */}
          <div className="mb-8">
            {personalInfo.avatarUrl ? (
              <img
                src={personalInfo.avatarUrl}
                alt={personalInfo.name}
                className="w-32 h-32 rounded-full object-cover shadow-lg border-4 border-white dark:border-gray-700"
              />
            ) : (
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-4xl font-bold text-white shadow-lg">
                {personalInfo.name
                  .split(' ')
                  .map(n => n[0])
                  .join('')}
              </div>
            )}
          </div>

          <p className="text-lg text-blue-600 dark:text-blue-400 font-medium mb-4">
            {t('hero.greeting')}
          </p>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-4">
            {personalInfo.name}
          </h1>

          <h2 className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-6">
            {title}
          </h2>

          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mb-10 leading-relaxed">
            {bio}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <Button
              variant="primary"
              size="lg"
              onClick={() => scrollTo('projects')}
            >
              {t('hero.viewProjects')}
              <ArrowDown size={20} className="ml-2" />
            </Button>

            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollTo('contact')}
            >
              {t('hero.contact')}
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map(link => {
              const Icon = iconMap[link.icon] ?? Github
              return (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
                  aria-label={link.name}
                >
                  <Icon size={24} />
                </a>
              )
            })}
          </div>
        </div>
      </Container>

      {/* "Scroll down" arrow */}
      <button
        onClick={() => scrollTo('about')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-400 dark:text-gray-600 hover:text-blue-600 dark:hover:text-blue-400 animate-bounce transition-colors cursor-pointer bg-transparent border-none"
        aria-label={
                    lang === 'en'
                      ? `Scroll down`
                      : `Przewiń w dół`
                  }
      >
        <ArrowDown size={32} />
      </button>
    </section>
  )
}
