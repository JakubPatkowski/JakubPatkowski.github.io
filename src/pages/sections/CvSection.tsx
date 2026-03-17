import { Download, Eye, FileText } from 'lucide-react'
import { Container, SectionHeader } from '../../components'
import { personalInfo } from '../../data'
import { useLanguage } from '../../i18n'

interface CvCardProps {
  lang: string
  downloadUrl: string
  downloadLabel: string
  previewLabel: string
  flagEmoji: string
}

function CvCard({ lang, downloadUrl, downloadLabel, previewLabel, flagEmoji }: CvCardProps) {
  return (
    <div className="bg-[var(--color-bg)] dark:bg-gray-800 rounded-2xl p-6 shadow-md border border-gray-200 dark:border-gray-700 flex flex-col gap-4">

      {/* Card Header */}
      <div className="flex items-center gap-3">
        <div className="p-3 bg-[var(--color-bg-secondary)] dark:bg-blue-900/30 rounded-xl">
          <FileText className="w-6 h-6 text-blue-500" />
        </div>
        <div>
          <h3 className="font-semibold text-gray-900 dark:text-white">
            {flagEmoji} {lang}
          </h3>
          <p className="text-xs text-gray-500 dark:text-gray-400">PDF</p>
        </div>
      </div>

      {/* Action button */}
      <div className="flex gap-3 mt-auto">

        {/* Download */}
        <a
          href={downloadUrl}
          download
          className="flex-1 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl px-4 py-2.5 text-sm font-medium transition-colors duration-200 whitespace-pre-line"
        >
          <Download className="w-4 h-4" />
          {downloadLabel}
        </a>

        {/* Preview */}
        <a
          href={downloadUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200 rounded-xl px-4 py-2.5 text-sm font-medium transition-colors duration-200"
        >
          <Eye className="w-4 h-4" />
          {previewLabel}
        </a>

      </div>
    </div>
  )
}

export function CvSection() {
  const { t } = useLanguage()

  return (
    <section id="cv" className="py-20 bg-[var(--color-bg-secondary)] dark:bg-gray-900">
      <Container size="md">
        <SectionHeader
          title={t('cv.title')}
          subtitle={t('cv.subtitle')}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <CvCard
            lang="Polski"
            downloadUrl={personalInfo.resumeUrlPl ?? ''}
            downloadLabel={t('cv.downloadPl')}
            previewLabel={t('cv.previewPl')}
            flagEmoji="PL"
          />
          <CvCard
            lang="English"
            downloadUrl={personalInfo.resumeUrlEn ?? ''}
            downloadLabel={t('cv.downloadEn')}
            previewLabel={t('cv.previewEn')}
            flagEmoji="EN"
          />
        </div>
      </Container>
    </section>
  )
}
