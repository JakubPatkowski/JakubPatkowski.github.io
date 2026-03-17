import { useState } from 'react'
import { Github, Star, GitFork, Clock, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Container, SectionHeader, Card, Badge, Button } from '../../components'
import { projects, repoToProjectId } from '../../data'
import { useGitHubRepos } from '../../hooks'
import { useLanguage } from '../../i18n'
import type { GitHubRepo } from '../../types'
import { renderHighlighted } from '@/utils/renderHighlighted'
import { RotatingProjectImage } from '@/components/RotatingProjectImage'

function formatLastUpdated(dateString: string, lang: 'pl' | 'en'): string {
  const diffDays = Math.floor((Date.now() - new Date(dateString).getTime()) / 86_400_000)

  if (lang === 'en') {
    if (diffDays === 0) return 'today'
    if (diffDays === 1) return 'yesterday'
    if (diffDays < 7) return `${diffDays} days ago`
    if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`
    if (diffDays < 365) return `${Math.floor(diffDays / 30)} months ago`
    return `${Math.floor(diffDays / 365)} years ago`
  }

  if (diffDays === 0) return 'dzisiaj'
  if (diffDays === 1) return 'wczoraj'
  if (diffDays < 7) return `${diffDays} dni temu`
  if (diffDays < 30) return `${Math.floor(diffDays / 7)} tyg. temu`
  if (diffDays < 365) return `${Math.floor(diffDays / 30)} mies. temu`
  return `${Math.floor(diffDays / 365)} lat temu`
}

function OverflowBadge({ technologies }: { technologies: string[] }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div
      className="relative inline-flex"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <Badge variant="default" className="cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
        +{technologies.length}
      </Badge>

      {/* Popover with hidden technologies */}
      {isOpen && (
        <div
          className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 z-20
                      bg-white dark:bg-gray-800
                      border border-gray-200 dark:border-gray-600
                      rounded-lg shadow-xl
                      p-2 min-w-max
                      animate-in fade-in slide-in-from-bottom-1 duration-150"
        >
          {/* Arrow */}
          <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-px">
            <div className="w-2.5 h-2.5 rotate-45
                            bg-white dark:bg-gray-800
                            border-r border-b border-gray-200 dark:border-gray-600" />
          </div>

          <div className="flex flex-wrap gap-1.5 max-w-[220px]">
            {technologies.map(tech => (
              <Badge key={tech} variant="tech">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export function ProjectsSection() {
  const { t, lang } = useLanguage()
  const { repos, loading, error } = useGitHubRepos()

  const getGitHubData = (projectId: string): GitHubRepo | undefined => {
    const repoName = Object.entries(repoToProjectId).find(([, id]) => id === projectId)?.[0]
    if (!repoName) return undefined
    return repos.find(repo => repo.name === repoName)
  }

  return (
    <section id="projects" className="py-20 bg-[var(--color-bg)] dark:bg-gray-900">
      <Container>
        <SectionHeader
          title={t('projects.title')}
          subtitle={t('projects.subtitle')}
          centered
        />

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map(project => {
            const githubData = getGitHubData(project.id)
            const description = lang === 'en' && project.descriptionEn
              ? project.descriptionEn
              : project.description
            const title = lang === 'en' && project.titleEn
              ? project.titleEn
              : project.title

            const visibleTech = project.technologies.slice(0, 5)
            const hiddenTech = project.technologies.slice(5)

            return (
              <Card key={project.id} variant="bordered" hoverable className="group flex flex-col">
                {/* Screenshots */}
                {project.images && project.images.length > 0 && (
                  <RotatingProjectImage
                    images={project.images}
                    alt={title}
                    interval={4000}
                  />
                )}

                <Card.Body className="p-6 flex flex-col flex-1">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {title}
                      </h3>
                      <Badge variant="info" size="sm">
                        {project.category}
                      </Badge>
                    </div>

                    {githubData && !loading && (
                      <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400 flex-shrink-0">
                        <div className="flex items-center gap-1" title="Stars">
                          <Star size={14} className="text-yellow-500" />
                          <span>{githubData.stargazers_count}</span>
                        </div>
                        <div className="flex items-center gap-1" title="Forks">
                          <GitFork size={14} />
                          <span>{githubData.forks_count}</span>
                        </div>
                      </div>
                    )}
                  </div>

                  <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                    {renderHighlighted(description)}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4 items-center">
                    {visibleTech.map(tech => (
                      <Badge key={tech} variant="tech">
                        {tech}
                      </Badge>
                    ))}
                    {hiddenTech.length > 0 && (
                      <OverflowBadge technologies={hiddenTech} />
                    )}
                  </div>

                  <div className="flex-1" />

                  <div className="pt-4 border-t border-gray-200 dark:border-gray-700 space-y-3">
                    {githubData && !loading && (
                      <div className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-500">
                        <Clock size={12} />
                        <span>
                          {t('projects.lastUpdate')}
                          {formatLastUpdated(githubData.updated_at, lang)}
                        </span>
                      </div>
                    )}

                    <div className="flex items-center justify-between">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        <Github size={16} />
                        {t('projects.code')}
                      </a>

                      <Link
                        to={`/project/${project.id}`}
                        className="inline-flex items-center gap-1 text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
                      >
                        {t('projects.details')}
                        <ArrowRight size={16} />
                      </Link>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            )
          })}
        </div>

        <div className="mt-12 text-center">
          <a href="https://github.com/JakubPatkowski" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="lg">
              <Github size={20} className="mr-2" />
              {t('projects.allOnGithub')}
            </Button>
          </a>
        </div>

        {error && (
          <p className="mt-4 text-center text-sm text-yellow-600 dark:text-yellow-400">
            {t('projects.githubError')}
          </p>
        )}
      </Container>
    </section>
  )
}