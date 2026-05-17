import React, { createContext, useState, useContext, useEffect } from 'react'

const LanguageContext = createContext()

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider')
  }
  return context
}

const translations = {
  en: {
    home: 'Home',
    about: 'About',
    skills: 'Skills',
    projects: 'Projects',
    experience: 'Experience',
    contact: 'Contact',
    viewProjects: 'View Projects',
    contactMe: 'Contact Me',
    available: 'Available for work',
    getInTouch: 'Get In Touch',
    sendMessage: 'Send Message',
    name: 'Name',
    email: 'Email',
    message: 'Message',
  },
  am: {
    home: 'መነሻ',
    about: 'ስለ እኔ',
    skills: 'ክህሎቶች',
    projects: 'ፕሮጀክቶች',
    experience: 'ልምድ',
    contact: 'አግኙኝ',
    viewProjects: 'ፕሮጀክቶችን ይመልከቱ',
    contactMe: 'ያግኙኝ',
    available: 'ለስራ ዝግጁ',
    getInTouch: 'ያግኙኝ',
    sendMessage: 'መልዕክት ይላኩ',
    name: 'ስም',
    email: 'ኢሜይል',
    message: 'መልዕክት',
  },
}

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem('language') || 'en'
  })

  useEffect(() => {
    localStorage.setItem('language', language)
  }, [language])

  const t = (key) => {
    return translations[language][key] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}