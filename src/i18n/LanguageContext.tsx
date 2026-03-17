/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState, useEffect, type ReactNode } from 'react'
import { translations, type Lang, type TranslationKey } from './translations'

// Types
interface LanguageContextValue {
  lang: Lang
  toggleLang: () => void
  /** Get the translated string. If the key doesn't exist, return the key itself as a fallback. */
  t: (key: TranslationKey) => string
}

// Context
const LanguageContext = createContext<LanguageContextValue | null>(null)

// Provider
export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(() => {
    // Check saved language, fallback to 'pl'
    const saved = localStorage.getItem('lang') as Lang | null
    return saved === 'en' || saved === 'pl' ? saved : 'pl'
  })

  useEffect(() => {
    localStorage.setItem('lang', lang)
    // Set the attribute to <html> – useful for accessibility and SEO tools
    document.documentElement.lang = lang
  }, [lang])

  const toggleLang = () => setLang(prev => (prev === 'pl' ? 'en' : 'pl'))

  const t = (key: TranslationKey): string => translations[lang][key] ?? key

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

// Hook
export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used inside <LanguageProvider>')
  return ctx
}
