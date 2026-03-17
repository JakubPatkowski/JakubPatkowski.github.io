import { useParams, Link, useNavigate } from 'react-router-dom'
import { ArrowLeft, Calendar, MapPin } from 'lucide-react'
import { Container, Badge, Button } from '../../components'
import { getExperienceById, formatDateRange } from '../../data'
import { useLanguage } from '../../i18n'
import { renderHighlighted } from '@/utils/renderHighlighted'

export function ExperiencePage() {
  const { id } = useParams<{ id: string }>()
  const { t, lang } = useLanguage()
  const navigate = useNavigate()
  const exp = id ? getExperienceById(id) : undefined

  if (!exp) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            {t('experience.notFound')}
          </h1>
          <Link to="/">
            <Button variant="primary">{t('common.goHome')}</Button>
          </Link>
        </div>
      </div>
    )
  }

  const position = lang === 'en' && exp.positionEn ? exp.positionEn : exp.position
  const company = lang === 'en' && exp.companyEn ? exp.companyEn : exp.company
  const location = lang === 'en' && exp.locationEn ? exp.locationEn : exp.location
  const responsibilities = lang === 'en' && exp.responsibilitiesEn ? exp.responsibilitiesEn : exp.responsibilities
  const detailedDescription = lang === 'en' && exp.detailedDescriptionEn ? exp.detailedDescriptionEn : exp.detailedDescription
  const whatILearned = lang === 'en' && exp.whatILearnedEn ? exp.whatILearnedEn : exp.whatILearned

  return (
    <div className="min-h-screen bg-[var(--color-bg-secondary)] dark:bg-gray-900 pt-20">
      <Container className="py-12">
        {/* Back */}
        <button
          onClick={() => navigate('/', { state: { scrollTo: 'experience' } })}
          className="inline-flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors mb-8"
        >
          <ArrowLeft size={18} />
          {t('experience.backToList')}
        </button>

        {/* Header */}
        <div className="mb-10">
          <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                {position}
              </h1>
              <p className="text-xl text-blue-600 dark:text-blue-400 font-medium mt-1">
                {company}
              </p>
            </div>
            {exp.endDate === 'present' && <Badge variant="success" size="md">{t('experience.present')}</Badge>}
          </div>

          <div className="flex flex-wrap gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
            <span className="flex items-center gap-1">
              <Calendar size={15} />
              {formatDateRange(exp.startDate, exp.endDate, lang)}
            </span>
            <span className="flex items-center gap-1">
              <MapPin size={15} />
              {location}
            </span>
          </div>

          <div className="flex flex-wrap gap-2">
            {exp.technologies.map(tech => (
              <Badge key={tech} variant="tech" size="md">
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-8">
            {/* Detailed description */}
            {detailedDescription && detailedDescription.length > 0 && (
              <section>
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  {t('experience.aboutJob')}
                </h2>
                <div className="space-y-4">
                  {detailedDescription.map((paragraph, i) => (
                    <p key={i} className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {renderHighlighted(paragraph)}
                    </p>
                  ))}
                </div>
              </section>
            )}

            {/* Responsibilities */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                {t('experience.responsibilities')}
              </h2>
              <ul className="space-y-3">
                {responsibilities.map((resp, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-600 dark:text-gray-300">
                    <span className="text-blue-600 dark:text-blue-400 mt-1 flex-shrink-0">•</span>
                    {resp}
                  </li>
                ))}
              </ul>
            </section>

            {/* What I Learned */}
            {whatILearned && whatILearned.length > 0 && (
              <section>
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  {t('experience.whatILearned')}
                </h2>
                <ul className="space-y-3">
                  {whatILearned.map((lesson, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-600 dark:text-gray-300">
                      <span className="w-6 h-6 bg-green-100 dark:bg-green-900/40 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                        ✓
                      </span>
                      {lesson}
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </div>

          {/* Sidebar */}
          <aside>
            <div className="bg-[var(--color-bg-secondary)] dark:bg-gray-800 rounded-xl p-6 sticky top-24">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-4">{t('experience.summary')}</h3>

              <div className="space-y-3 text-sm">
                <div>
                  <span className="text-gray-500 dark:text-gray-400">{t('experience.position')}</span>
                  <p className="font-medium text-gray-900 dark:text-white mt-0.5">{position}</p>
                </div>
                <div>
                  <span className="text-gray-500 dark:text-gray-400">{t('experience.company')}</span>
                  <p className="font-medium text-gray-900 dark:text-white mt-0.5">{company}</p>
                </div>
                <div>
                  <span className="text-gray-500 dark:text-gray-400">{t('experience.period')}</span>
                  <p className="font-medium text-gray-900 dark:text-white mt-0.5">
                    {formatDateRange(exp.startDate, exp.endDate, lang)}
                  </p>
                </div>
                <div>
                  <span className="text-gray-500 dark:text-gray-400">{t('experience.location')}</span>
                  <p className="font-medium text-gray-900 dark:text-white mt-0.5">{location}</p>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                <h4 className="font-medium text-gray-900 dark:text-white mb-3">{t('experience.technologies')}</h4>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map(tech => (
                    <Badge key={tech} variant="tech" size="sm">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </Container>
    </div>
  )
}
