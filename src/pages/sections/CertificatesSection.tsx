import { useState } from 'react'
import { Award, Calendar, X } from 'lucide-react'
import { Container, SectionHeader, Card } from '../../components'
import { certificates } from '../../data'
import { useLanguage } from '../../i18n'
import type { Certificate } from '../../types'
import { useEffect } from 'react'

function CertificateModal({
  cert,
  lang,
  onClose,
}: {
  cert: Certificate
  lang: 'pl' | 'en'
  onClose: () => void
}) {
  const name = lang === 'en' && cert.nameEn ? cert.nameEn : cert.name

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
      onClick={onClose}
    >
      <div
        className="relative max-w-3xl w-full bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-2xl"
        onClick={e => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 p-1 bg-black/40 text-white rounded-full hover:bg-black/60 transition-colors"
          aria-label={
                    lang === 'en'
                      ? `Close`
                      : `Zamknij`
                  }
        >
          <X size={20} />
        </button>

        {cert.imageUrl ? (
          <img src={cert.imageUrl} alt={name} className="w-full object-contain max-h-[80vh]" />
        ) : (
          <div className="h-64 flex items-center justify-center">
            <Award className="w-20 h-20 text-gray-400" />
          </div>
        )}

        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{name}</h3>
          <p className="text-blue-600 dark:text-blue-400 text-sm">{cert.issuer}</p>
        </div>
      </div>
    </div>
  )
}

export function CertificatesSection() {
  const { t, lang } = useLanguage()
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null)

  return (
    <section id="certificates" className="py-20">
      <Container>
        <SectionHeader title={t('certificates.title')} subtitle={t('certificates.subtitle')} />

        <div className="grid md:grid-cols-2 gap-6">
          {certificates.map(cert => {
            const name = lang === 'en' && cert.nameEn ? cert.nameEn : cert.name
            const description = lang === 'en' && cert.descriptionEn ? cert.descriptionEn : cert.description

            return (
              <Card
                key={cert.id}
                variant="bordered"
                hoverable
                className="cursor-pointer"
              >
                <button
                  className="w-full text-left"
                  onClick={() => setSelectedCert(cert)}
                  aria-label={
                    lang === 'en'
                      ? `Preview certificate: ${name}`
                      : `Podgląd certyfikatu: ${name}`
                  }
                >
                  <Card.Body className="p-6">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        {cert.imageUrl ? (
                          <img
                            src={cert.imageUrl}
                            alt={name}
                            className="w-20 h-20 object-cover rounded-lg"
                          />
                        ) : (
                          <div className="w-20 h-20 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                            <Award className="w-10 h-10 text-blue-600 dark:text-blue-400" />
                          </div>
                        )}
                      </div>

                      <div className="flex-grow min-w-0">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1 truncate">
                          {name}
                        </h3>
                        <p className="text-blue-600 dark:text-blue-400 text-sm font-medium mb-2">
                          {cert.issuer}
                        </p>
                        <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400 mb-2">
                          <Calendar size={12} />
                          <span>{cert.date}</span>
                        </div>
                        {description && (
                          <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                            {description}
                          </p>
                        )}
                      </div>
                    </div>
                  </Card.Body>
                </button>
              </Card>
            )
          })}
        </div>

        {selectedCert && (
          <CertificateModal cert={selectedCert} lang={lang} onClose={() => setSelectedCert(null)} />
        )}
      </Container>
    </section>
  )
}
