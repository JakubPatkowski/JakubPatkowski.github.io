import { Shield, Globe } from 'lucide-react'
import { Container, SectionHeader } from '../../components'
import { skillGroups } from '../../data'
import { useLanguage } from '../../i18n'

const LUCIDE_FALLBACKS: Record<string, { icon: typeof Shield; color: string }> = {
  'cyber':   { icon: Shield, color: 'text-emerald-500' },
  'sieci':   { icon: Globe,  color: 'text-blue-500' },
  'network': { icon: Globe,  color: 'text-blue-500' },
}

/** Searches for a Lucide fallback icon by technology name. */
function findLucideFallback(techName: string) {
  const lower = techName.toLowerCase()
  for (const [prefix, cfg] of Object.entries(LUCIDE_FALLBACKS)) {
    if (lower.startsWith(prefix)) return cfg
  }
  return null
}

export function SkillsSection() {
  const { lang } = useLanguage()

  return (
    <section id="skills" className="py-20">
      <Container>
        <SectionHeader
          title={lang === 'en' ? 'Skills & Technologies' : 'Umiejętności i Technologie'}
          subtitle={
            lang === 'en'
              ? 'Technologies and tools I work with on a daily basis'
              : 'Technologie i narzędzia, z których korzystam na co dzień'
          }
        />

        {/* CSS columns masonry — auto-balances cards of uneven heights */}
        <style>{`
          .skills-masonry {
            column-count: 1;
            column-gap: 1.25rem;
          }
          @media (min-width: 640px) {
            .skills-masonry { column-count: 2; }
          }
          @media (min-width: 1024px) {
            .skills-masonry { column-count: 3; }
          }
        `}</style>

        <div className="skills-masonry">
          {skillGroups.map(group => {
            const categoryName =
              lang === 'en' && group.categoryEn ? group.categoryEn : group.category

            return (
              <div
                key={group.category}
                className="break-inside-avoid mb-5
                           group relative rounded-2xl overflow-hidden
                           bg-white dark:bg-gray-800
                           border border-gray-200/80 dark:border-gray-700
                           hover:border-blue-400/60 dark:hover:border-blue-500/60
                           shadow-sm hover:shadow-xl hover:shadow-blue-500/10
                           dark:hover:shadow-blue-500/5
                           transition-all duration-300 ease-out"
              >
                {/* Category header with colored accent */}
                <div className="relative px-6 pt-5 pb-4">
                  <div className="absolute top-0 left-0 right-0 h-1
                                  bg-gradient-to-r from-blue-500 via-blue-400 to-cyan-400
                                  opacity-0 group-hover:opacity-100
                                  transition-opacity duration-300" />

                  <h3 className="text-lg font-bold text-gray-900 dark:text-white
                                 flex items-center gap-3">
                    <span className="text-xl">{group.icon}</span>
                    {categoryName}
                  </h3>
                </div>

                {/* Technology list */}
                <div className="px-6 pb-5 space-y-4">
                  {group.technologies.map(tech => {
                    const context =
                      lang === 'en' && tech.contextEn ? tech.contextEn : tech.context
                    const lucideFallback = !tech.iconClass ? findLucideFallback(tech.name) : null
                    const LucideIcon = lucideFallback?.icon

                    return (
                      <div
                        key={tech.name}
                        className="flex items-start gap-4 p-2 -mx-2
                                   rounded-xl
                                   hover:bg-gray-100/70 dark:hover:bg-gray-700/50
                                   transition-colors duration-200
                                   group/tech"
                      >

                        {/* Icon container — on hover, bg inverts for better contrast.
                            Light mode: white → dark gray (so dark icons like .NET pop)
                            Dark mode: gray-700 → white (so light/colored icons pop) */}
                        <div className="flex-shrink-0
                                        w-12 h-12 rounded-xl
                                        bg-white dark:bg-gray-700
                                        group-hover/tech:bg-gray-800 dark:group-hover/tech:bg-white
                                        shadow-[0_1px_3px_rgba(0,0,0,0.08),0_1px_2px_rgba(0,0,0,0.06)]
                                        ring-1 ring-gray-200/80 dark:ring-gray-600
                                        group-hover/tech:ring-gray-700 dark:group-hover/tech:ring-gray-300
                                        flex items-center justify-center
                                        group-hover/tech:shadow-md group-hover/tech:scale-[1.06]
                                        transition-all duration-200">
                          {tech.iconClass ? (
                            <i className={`${tech.iconClass} colored`}
                               style={{ fontSize: '28px', lineHeight: 1 }} />
                          ) : LucideIcon ? (
                            <LucideIcon size={26} className={lucideFallback!.color} strokeWidth={1.8} />
                          ) : (
                            <span className="text-xl">{group.icon}</span>
                          )}
                        </div>

                        {/* Name + context */}
                        <div className="min-w-0 pt-0.5 flex-1">
                          <span className="text-sm font-bold text-gray-900 dark:text-gray-50
                                           leading-snug block">
                            {tech.name}
                          </span>
                          <p className="text-[13px] leading-relaxed text-gray-500 dark:text-gray-400 mt-1">
                            {context}
                          </p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}