import { GraduationCap, Calendar, BookOpen, Link as LinkIcon } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Container, SectionHeader, Card, Badge } from '../../components'
import { education, formatDateRange } from '../../data'
import { useLanguage } from '../../i18n'

export function EducationSection() {
  const { t, lang } = useLanguage()

  return (
    <section id="education" className="py-20 bg-[var(--color-bg-secondary)] dark:bg-gray-800/50">
      <Container>
        <SectionHeader title={t('education.title')} subtitle={t('education.subtitle')} />

        <div className="space-y-8">
          {education.map(edu => {
            const degree = lang === 'en' && edu.degreeEn ? edu.degreeEn : edu.degree
            const institution = lang === 'en' && edu.institutionEn ? edu.institutionEn : edu.institution
            const field = lang === 'en' && edu.fieldEn ? edu.fieldEn : edu.field
            const specialization = edu.specialization && lang === 'en' && edu.specializationEn
              ? edu.specializationEn
              : edu.specialization
            const description = lang === 'en' && edu.descriptionEn ? edu.descriptionEn : edu.description
            const achievements = lang === 'en' && edu.achievementsEn ? edu.achievementsEn : edu.achievements
            const thesisTitle = edu.thesis && lang === 'en' && edu.thesis.titleEn
              ? edu.thesis.titleEn
              : edu.thesis?.title
            const thesisDescription = edu.thesis && lang === 'en' && edu.thesis.descriptionEn
              ? edu.thesis.descriptionEn
              : edu.thesis?.description

            return (
              <Card key={edu.id} variant="bordered" hoverable>
                <Card.Body className="p-6">
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center">
                        <GraduationCap className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                      </div>
                    </div>

                    <div className="flex-grow">
                      <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                            {degree}
                          </h3>
                          <p className="text-blue-600 dark:text-blue-400 font-medium">
                            {institution}
                          </p>
                        </div>
                        {edu.endDate === 'present' && (
                          <Badge variant="success" size="md">{t('education.present')}</Badge>
                        )}
                      </div>

                      <p className="text-gray-700 dark:text-gray-300 mb-2">
                        {field}
                        {specialization && (
                          <span className="text-gray-500 dark:text-gray-400">
                            {' '}• {specialization}
                          </span>
                        )}
                      </p>

                      <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-4">
                        <Calendar size={14} />
                        <span>{formatDateRange(edu.startDate, edu.endDate, lang)}</span>
                      </div>

                      {description && (
                        <p className="text-gray-600 dark:text-gray-400 mb-4">{description}</p>
                      )}

                      {edu.thesis && (
                        <div className="bg-gray-100 dark:bg-gray-700/50 rounded-lg p-4 mb-4">
                          <div className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                            <BookOpen size={14} />
                            {t('education.thesis')}
                          </div>
                          <p className="text-gray-900 dark:text-white font-medium">
                            {thesisTitle}
                          </p>
                          {thesisDescription && (
                            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                              {thesisDescription}
                            </p>
                          )}

                          {edu.thesis.projectId && (
                            <Link
                              to={`/project/${edu.thesis.projectId}`}
                              className="inline-flex items-center gap-1 text-sm text-blue-600 dark:text-blue-400 hover:underline mt-2"
                            >
                              <LinkIcon size={14} />
                              {t('education.viewProject')}
                            </Link>
                          )}
                        </div>
                      )}

                      {achievements && achievements.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                          {achievements.map((achievement, i) => (
                            <Badge key={i} variant="tech" size="sm">
                              {achievement}
                            </Badge>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </Card.Body>
              </Card>
            )
          })}
        </div>
      </Container>
    </section>
  )
}