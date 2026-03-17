import { useState, useEffect, useCallback, useMemo } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { navItems, personalInfo } from '../data'
import { useTheme } from '../hooks/useTheme'
import { useLanguage } from '../i18n'
import { Container } from './Container'

/**
 * Header — Fixed navbar with three additional mechanisms:
 *
 * 1. **Active Section** — scroll-based tracking on the homepage;
 *    on subpages (project / experience), derived from the route.
 *
 * 2. **Reading Progress Bar** — thin blue bar at the bottom of the navbar
 *    that fills proportionally to page scroll.
 *
 * 3. **Navigation from Subpages** — clicking a nav item on a subpage
 *    returns to the homepage and smoothly scrolls to the target section.
 */
export function Header() {
  const { isDark, toggleTheme } = useTheme()
  const { t, lang, toggleLang } = useLanguage()
  const location = useLocation()
  const navigate = useNavigate()

  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState<string>('hero')
  const [readingProgress, setReadingProgress] = useState(0)

  const isHomePage = location.pathname === '/'

  // ------------------------------------------------------------------
  // 1. Scroll-based active section on the homepage
  // ------------------------------------------------------------------
  const updateActiveSection = useCallback(() => {
    if (!isHomePage) return

    const sectionIds = navItems.map(item => item.href.replace('#', ''))
    const scrollY = window.scrollY
    const OFFSET = 120

    // If near the very bottom of the page → last section is active
    const atBottom =
      window.innerHeight + scrollY >= document.documentElement.scrollHeight - 50
    if (atBottom) {
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        if (document.getElementById(sectionIds[i])) {
          setActiveSection(sectionIds[i])
          return
        }
      }
    }

    // Normal case: last section whose top is <= scrollY + OFFSET
    let current = sectionIds[0]
    for (const id of sectionIds) {
      const el = document.getElementById(id)
      if (el && el.offsetTop <= scrollY + OFFSET) {
        current = id
      }
    }
    setActiveSection(current)
  }, [isHomePage])

  useEffect(() => {
    if (!isHomePage) return

    window.addEventListener('scroll', updateActiveSection, { passive: true })

    // Deferred initial calculation — avoids synchronous setState in the effect body
    const rafId = requestAnimationFrame(updateActiveSection)

    return () => {
      window.removeEventListener('scroll', updateActiveSection)
      cancelAnimationFrame(rafId)
    }
  }, [isHomePage, updateActiveSection])

  // ------------------------------------------------------------------
  // 1b. On subpages — derive active section from the route.
  //     Uses useMemo instead of useEffect to avoid setState-in-effect.
  // ------------------------------------------------------------------
  const routeBasedSection = useMemo(() => {
    if (isHomePage) return null
    if (location.pathname.startsWith('/project')) return 'projects'
    if (location.pathname.startsWith('/experience')) return 'experience'
    return ''
  }, [isHomePage, location.pathname])

  useEffect(() => {
    if (routeBasedSection !== null) {
      // Defer to next frame to avoid synchronous setState warning
      const rafId = requestAnimationFrame(() => {
        setActiveSection(routeBasedSection)
      })
      return () => cancelAnimationFrame(rafId)
    }
  }, [routeBasedSection])

  // ------------------------------------------------------------------
  // 2. Reading progress bar
  // ------------------------------------------------------------------
  const handleScroll = useCallback(() => {
    const scrollTop = window.scrollY
    const docHeight = document.documentElement.scrollHeight - window.innerHeight
    const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0
    setReadingProgress(Math.min(progress, 100))
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })

    // Deferred initial calculation
    const rafId = requestAnimationFrame(handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      cancelAnimationFrame(rafId)
    }
  }, [handleScroll, location.pathname])

  // ------------------------------------------------------------------
  // 3. Section navigation (including subpages)
  // ------------------------------------------------------------------
  const scrollToSection = useCallback(
    (sectionId: string) => {
      setMenuOpen(false)

      if (isHomePage) {
        const el = document.getElementById(sectionId)
        el?.scrollIntoView({ behavior: 'smooth' })
      } else {
        navigate('/', { state: { scrollTo: sectionId } })
      }
    },
    [isHomePage, navigate]
  )

  // ------------------------------------------------------------------
  // Identify which nav-item is active
  // ------------------------------------------------------------------
  const isActive = (href: string) => {
    const sectionId = href.replace('#', '')
    return sectionId === activeSection
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[var(--color-bg)]/90 dark:bg-gray-900/90 backdrop-blur-md border-b border-[var(--color-border)] dark:border-gray-800">
      <Container size="xl">
        <div className="flex items-center justify-between h-16">
          {/* ---- Logo ---- */}
          <button
            onClick={() => scrollToSection('hero')}
            className="text-xl font-bold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <img
              src={personalInfo.avatarUrl}
              alt={personalInfo.name}
              className="w-9 h-9 rounded-full object-cover
                         border-2 border-white dark:border-gray-700
                         shadow-sm
                         hover:border-blue-400 dark:hover:border-blue-400
                         transition-all duration-200"
            />
          </button>

          {/* ---- Desktop navigation ---- */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map(item => {
              const sectionId = item.href.replace('#', '')
              const active = isActive(item.href)

              return (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(sectionId)}
                  className={`
                    px-3 py-2 text-sm font-medium rounded-lg transition-colors
                    ${
                      active
                        ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30'
                        : 'text-[var(--color-text-secondary)] dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800'
                    }
                  `}
                >
                  {t(item.labelKey as Parameters<typeof t>[0])}
                </button>
              )
            })}
          </nav>

          {/* ---- Switches (language + theme) + hamburger ---- */}
          <div className="flex items-center gap-2">
            {/* Language */}
            <button
              onClick={toggleLang}
              className="px-2.5 py-1.5 text-sm font-semibold text-[var(--color-text-secondary)] dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
              aria-label="Toggle language"
            >
              {lang === 'pl' ? 'EN' : 'PL'}
            </button>

            {/* Theme */}
            <button
              onClick={toggleTheme}
              className="p-2 text-[var(--color-text-secondary)] dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
              aria-label={isDark ? 'Light mode' : 'Dark mode'}
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {/* Hamburger — mobile */}
            <button
              onClick={() => setMenuOpen(prev => !prev)}
              className="md:hidden p-2 text-[var(--color-text-secondary)] dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
              aria-label="Menu"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </Container>

      {/* ---- Mobile menu ---- */}
      {menuOpen && (
        <div className="md:hidden border-t border-[var(--color-border)] dark:border-gray-800 bg-[var(--color-bg)] dark:bg-gray-900">
          <Container size="xl">
            {navItems.map(item => {
              const sectionId = item.href.replace('#', '')
              const active = isActive(item.href)

              return (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(sectionId)}
                  className={`
                    px-4 py-3 text-base font-medium rounded-lg text-left transition-colors
                    ${
                      active
                        ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30'
                        : 'text-[var(--color-text-secondary)] dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800'
                    }
                  `}
                >
                  {t(item.labelKey as Parameters<typeof t>[0])}
                </button>
              )
            })}
          </Container>
        </div>
      )}

      {/* ---- Reading progress bar ---- */}
      <div className="h-[2px] bg-transparent">
        <div
          className="h-full bg-blue-600 transition-[width] duration-150 ease-out"
          style={{ width: `${readingProgress}%` }}
        />
      </div>
    </header>
  )
}
