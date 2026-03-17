import { MapPin, Briefcase, GraduationCap} from 'lucide-react'
import { Badge, Container, SectionHeader } from '../../components'
import { personalInfo} from '../../data'
import { useLanguage } from '../../i18n'
import { ProjectShowcaseCube } from '@/components/ProjectShowcaseCube'
import { renderHighlighted } from '@/utils/renderHighlighted'

export function AboutSection() {
  const { t, lang } = useLanguage()

  const title = lang === 'en' && personalInfo.titleEn ? personalInfo.titleEn : personalInfo.title

  return (
    <section id="about" className="py-20 bg-[var(--color-bg-secondary)] dark:bg-gray-800/50">
      <Container>
        <SectionHeader title={t('about.title')} subtitle={t('about.subtitle')} />

        {/* Bio */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-3 mb-6">
            <Badge variant="info" size="md">
              <MapPin size={14} className="mr-1" />
              {personalInfo.location}
            </Badge>
            <Badge variant="tech" size="md">
              <Briefcase size={14} className="mr-1" />
              {title}
            </Badge>
            <Badge variant="success" size="md">
              <GraduationCap size={14} className="mr-1" />
              {t('about.field')}
            </Badge>
          </div>

          <div className="columns-1 md:columns-2 gap-8 space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
            {lang === 'en' && personalInfo.longBioEn
              ? personalInfo.longBioEn.map((paragraph, index) => (
                  <p key={index} className="break-inside-avoid">
                    {renderHighlighted(paragraph)}
                  </p>
                ))
              : personalInfo.longBio
              ? personalInfo.longBio.map((paragraph, index) => (
                  <p key={index} className="break-inside-avoid">
                    {renderHighlighted(paragraph)}
                  </p>
                ))
              : (
                 <p>
                  {lang === 'en' && personalInfo.bioEn ? renderHighlighted(personalInfo.bioEn) : renderHighlighted(personalInfo.bio)}
                </p>
              )}
          </div>
        </div>

        {/* 3D Project Showcase — with strong ambient back-light */}
        <div className="mb-16 relative rounded-2xl overflow-hidden
                        border border-blue-500/20 dark:border-blue-500/15
                        bg-gray-900/[0.03] dark:bg-gray-950/60
                        shadow-lg shadow-blue-500/[0.04]
                        dark:shadow-blue-500/[0.08]">

          {/* Ambient back-light glow — cranked up to be clearly visible.
              Three overlapping radial gradients simulate a light source
              sitting directly behind the cuboid. */}
          <div
            className="pointer-events-none absolute inset-0 z-0"
            aria-hidden="true"
          >
            {/* Core glow — bright blue, tight center */}
            <div
              className="absolute top-[52%] left-1/2 -translate-x-1/2 -translate-y-1/2
                          w-[55%] h-[70%] rounded-full"
              style={{
                background: 'radial-gradient(ellipse at center, rgba(59,130,246,0.50) 0%, rgba(59,130,246,0.15) 45%, transparent 70%)',
                filter: 'blur(40px)',
              }}
            />
            {/* Wide halo — softer blue spread */}
            <div
              className="absolute top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2
                          w-[85%] h-[90%] rounded-full"
              style={{
                background: 'radial-gradient(ellipse at center, rgba(59,130,246,0.20) 0%, rgba(59,130,246,0.06) 50%, transparent 75%)',
                filter: 'blur(50px)',
              }}
            />
            {/* Purple accent — adds depth and color richness */}
            <div
              className="absolute top-[56%] left-1/2 -translate-x-1/2 -translate-y-1/2
                          w-[45%] h-[55%] rounded-full"
              style={{
                background: 'radial-gradient(ellipse at center, rgba(147,51,234,0.30) 0%, transparent 65%)',
                filter: 'blur(45px)',
              }}
            />
          </div>

          {/* Title bar */}
          <div className="px-6 pt-5 pb-4 relative z-[1]">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white text-center">
              {lang === 'en' ? 'Project Showcase' : 'Przegląd projektów'}
            </h3>
          </div>
 
          {/* Cuboid area */}
          <div className="px-4 sm:px-8 pb-8 relative z-[1]">
            <ProjectShowcaseCube />
          </div>
        </div>
      </Container>
    </section>
  )
}