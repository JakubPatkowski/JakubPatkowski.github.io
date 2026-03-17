import { HashRouter, Routes, Route } from 'react-router-dom'
import { Header, Footer } from './components'
import { HomePage } from './pages/HomePage'
import { ProjectPage } from './pages/project/ProjectPage'
import { ExperiencePage } from './pages/experience/ExperiencePage'
import { LanguageProvider } from './i18n'

/*
  HashRouter uses the segment after # in the URL (e.g. /#/project/korepetycje-online).
  It is required when hosting on GitHub Pages because the static server does not support
  server-side routing — every page refresh must resolve to index.html.

  LanguageProvider wraps the entire application so that every component can call
  useLanguage() and get the current language along with the t() translation function.
*/
function App() {
  return (
    <LanguageProvider>
      <HashRouter>
        <div className="min-h-screen bg-[var(--color-bg)] dark:bg-gray-900">
          <Header />

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/project/:id" element={<ProjectPage />} />
            <Route path="/experience/:id" element={<ExperiencePage />} />
          </Routes>

          <Footer />
        </div>
      </HashRouter>
    </LanguageProvider>
  )
}

export default App
