import { Github, Linkedin } from 'lucide-react'
import { socialLinks } from '../data'
import { useLanguage } from '@/i18n/LanguageContext'
import { Container } from './Container'

const iconMap: Record<string, typeof Github> = {
  Github,
  Linkedin,
}

export function Footer() {
  const { t } = useLanguage()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-gray-400 py-10">
      <Container size="xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm">
            {currentYear} Jakub Patkowski. {t('footer.info')}
          </p>

          <div className="flex items-center gap-3">
            {socialLinks.map(link => {
              const Icon = iconMap[link.icon] ?? Github
              return (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                  className="p-2 hover:text-white transition-colors"
                >
                  <Icon size={20} />
                </a>
              )
            })}
          </div>
        </div>
      </Container>
    </footer>
  )
}
