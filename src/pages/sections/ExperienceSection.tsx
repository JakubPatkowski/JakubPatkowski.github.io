import { MapPin, Calendar, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Container, SectionHeader, Card, Badge } from '../../components'
import { experiences, formatDateRange } from '../../data'
import { useLanguage } from '../../i18n'
import { renderHighlighted } from '@/utils/renderHighlighted'

export function ExperienceSection() {
  const { t, lang } = useLanguage()

  return (
    <section id="experience" className="py-20">
      <Container>
        <SectionHeader
          title={t('experience.title')}
          subtitle={t('experience.subtitle')}
        />

        {/* Left timeline */}
        <div className="relative">
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700" />

          <div className="space-y-8">
            {experiences.map(exp => {
              const position = lang === 'en' && exp.positionEn ? exp.positionEn : exp.position

              /* Summary */
              const cardSummary =
                lang === 'en' && exp.summaryEn
                  ? exp.summaryEn
                  : exp.summary

              return (
                <div key={exp.id} className="relative pl-14 md:pl-20">
                  {/* Dot on axis */}
                  <div className="absolute left-2 md:left-6 top-6 w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-gray-900 z-10" />

                  <Card variant="elevated" hoverable>
                    <Card.Body className="p-6">
                      {/* Card Header */}
                      <div className="flex flex-wrap items-start justify-between gap-2 mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                            {position}
                          </h3>
                          <p className="text-blue-600 dark:text-blue-400 font-medium">
                            {exp.company}
                          </p>
                        </div>
                        {exp.endDate === 'present' && (
                          <Badge variant="success" size="md">{t('experience.present')}</Badge>
                        )}
                      </div>

                      {/* Metadata  */}
                      <div className="flex flex-wrap gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
                        <span className="flex items-center gap-1">
                          <Calendar size={14} />
                          {formatDateRange(exp.startDate, exp.endDate, lang)}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin size={14} />
                          {exp.location}
                        </span>
                      </div>

                      {/* Card Summary */}
                      {cardSummary && (
                        <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                          {renderHighlighted(cardSummary)}
                        </p>
                      )}

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {exp.technologies.map(tech => (
                          <Badge key={tech} variant="tech" size="sm">
                            {tech}
                          </Badge>
                        ))}
                      </div>

                      {/* Details subpage link */}
                      <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                        <Link
                          to={`/experience/${exp.id}`}
                          className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
                        >
                          {t('experience.details')}
                          <ArrowRight size={16} />
                        </Link>
                      </div>
                    </Card.Body>
                  </Card>
                </div>
              )
            })}
          </div>
        </div>
      </Container>
    </section>
  )
}