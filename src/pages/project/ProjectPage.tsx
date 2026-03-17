import { useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { Github, ArrowLeft, ExternalLink, X, ChevronLeft, ChevronRight, ImagePlus } from 'lucide-react'
import { Container, Badge, Button } from '../../components'
import { getProjectById } from '../../data'
import { useLanguage } from '../../i18n'
import { renderHighlighted } from '@/utils/renderHighlighted'
import { useEffect } from 'react'

function ImageLightbox({
  images,
  currentIndex,
  onClose,
  onPrev,
  onNext,
}: {
  images: string[]
  currentIndex: number
  onClose: () => void
  onPrev: () => void
  onNext: () => void
}) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onPrev()
      if (e.key === 'ArrowRight') onNext()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [onClose, onPrev, onNext])

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
      onClick={onClose}
    >
      <div className="relative max-w-5xl w-full" onClick={e => e.stopPropagation()}>
        <img
          src={images[currentIndex]}
          alt={`Screenshot ${currentIndex + 1}`}
          className="w-full object-contain max-h-[85vh] rounded-lg"
        />

        {images.length > 1 && (
          <>
            <button
              onClick={onPrev}
              className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
              aria-label="Previous"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={onNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
              aria-label="Next"
            >
              <ChevronRight size={24} />
            </button>
          </>
        )}

        <button
          onClick={onClose}
          className="absolute top-2 right-2 p-1 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
          aria-label="Close"
        >
          <X size={20} />
        </button>

        <p className="absolute bottom-2 left-1/2 -translate-x-1/2 text-white/70 text-sm">
          {currentIndex + 1} / {images.length}
        </p>
      </div>
    </div>
  )
}

export function ProjectPage() {
  const { id } = useParams<{ id: string }>()
  const { t, lang } = useLanguage()
  const navigate = useNavigate()
  const project = id ? getProjectById(id) : undefined

  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            {t('projects.notFound')}
          </h1>
          <Link to="/">
            <Button variant="primary">{t('common.goHome')}</Button>
          </Link>
        </div>
      </div>
    )
  }

  const title = lang === 'en' && project.titleEn ? project.titleEn : project.title
  const longDescription = lang === 'en' && project.longDescriptionEn ? project.longDescriptionEn : project.longDescription
  const highlights = lang === 'en' && project.highlightsEn ? project.highlightsEn : project.highlights

  const images = project.images ?? []

  const openLightbox = (index: number) => setLightboxIndex(index)
  const closeLightbox = () => setLightboxIndex(null)
  const prevImage = () => setLightboxIndex(i => (i !== null ? (i - 1 + images.length) % images.length : null))
  const nextImage = () => setLightboxIndex(i => (i !== null ? (i + 1) % images.length : null))

  return (
    <div className="min-h-screen bg-[var(--color-bg-secondary)] dark:bg-gray-900 pt-20">
      <Container className="py-12">
        <button
          onClick={() => navigate('/', { state: { scrollTo: 'projects' } })}
          className="inline-flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors mb-8"
        >
          <ArrowLeft size={18} />
          {t('projects.backToList')}
        </button>

        {/* Project Header */}
        <div className="mb-8">
          <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
            <div>
              <Badge variant="info" size="md" className="mb-2">
                {project.category}
              </Badge>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                {title}
              </h1>
            </div>

            {/* Links */}
            <div className="flex gap-3">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors font-medium"
              >
                <Github size={18} />
                GitHub
              </a>

              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  <ExternalLink size={18} />
                  Live Demo
                </a>
              )}
            </div>
          </div>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2">
            {project.technologies.map(tech => (
              <Badge key={tech} variant="tech" size="md">
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          {/* Main */}
          <div className="lg:col-span-2 space-y-8">
            {/* Description */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                {t('projects.aboutProject')}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {renderHighlighted(longDescription)}
              </p>
            </section>

            {/* Key Features */}
            {highlights && highlights.length > 0 && (
              <section>
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  {t('projects.keyElements')}
                </h2>
                <ul className="space-y-3">
                  {highlights.map((point, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-600 dark:text-gray-300">
                      <span className="w-6 h-6 bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                        {i + 1}
                      </span>
                      <span>{renderHighlighted(point)}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Screenshoots */}
            {images.length > 0 ? (
              <section>
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  {t('projects.screenshots')}
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  {images.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => openLightbox(i)}
                      className="rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 transition-colors"
                      aria-label={`Screenshot ${i + 1}`}
                    >
                      <img
                        src={img}
                        alt={`Screenshot ${i + 1}`}
                        className="w-full h-40 object-cover"
                      />
                    </button>
                  ))}
                </div>
              </section>
            ) : (
              <section>
                <div className="border-2 border-dashed border-gray-200 dark:border-gray-700 rounded-xl p-8 text-center">
                  <ImagePlus className="w-10 h-10 text-gray-400 mx-auto mb-3" />
                  <p className="text-gray-500 dark:text-gray-400 text-sm">
                    {t('projects.noScreenshots')}
                  </p>
                </div>
              </section>
            )}
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            <div className="bg-[var(--color-bg-secondary)] dark:bg-gray-800 rounded-xl p-6">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-4">{t('projects.technologies')}</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map(tech => (
                  <Badge key={tech} variant="tech">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="bg-[var(--color-bg-secondary)] dark:bg-gray-800 rounded-xl p-6">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-4">{t('projects.links')}</h3>
              <div className="space-y-3">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  <Github size={18} />
                  {t('projects.githubRepo')}
                </a>

                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    <ExternalLink size={18} />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </aside>
        </div>
      </Container>

      {/* Lightbox Gallery */}
      {lightboxIndex !== null && images.length > 0 && (
        <ImageLightbox
          images={images}
          currentIndex={lightboxIndex}
          onClose={closeLightbox}
          onPrev={prevImage}
          onNext={nextImage}
        />
      )}
    </div>
  )
}
