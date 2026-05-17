import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import { LanguageProvider } from './context/LanguageContext'
import Home from './pages/Home'
import AboutPage from './pages/AboutPage'
import ProjectsPage from './pages/ProjectsPage'
import ProjectDetail from './pages/ProjectDetail'
import ContactPage from './pages/ContactPage'
import BlogPage from './pages/BlogPage'
import BlogPost from './pages/BlogPost'
import Navbar from './components/common/Navbar'
import Footer from './components/common/Footer'
import BackToTop from './components/common/BackToTop'
import ScrollToTop from './components/common/ScrollToTop'
import Loader from './components/common/Loader'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])

  if (loading) {
    return <Loader />
  }

  return (
    <ThemeProvider>
      <LanguageProvider>
        <Router>
          <ScrollToTop />
          <div className="min-h-screen bg-light dark:bg-dark transition-colors duration-300">
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/project/:id" element={<ProjectDetail />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
            </Routes>
            <Footer />
            <BackToTop />
          </div>
        </Router>
      </LanguageProvider>
    </ThemeProvider>
  )
}

export default App