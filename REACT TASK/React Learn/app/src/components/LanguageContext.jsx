// LanguageContext.js

import React, { createContext, useState } from 'react';

// Create Context
export const LanguageContext = createContext();

// Provider Component
export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('en');

  const toggleLanguage = () => {
    setLanguage(prev => (prev === 'en' ? 'ta' : 'en'));
  };

  const value = {
    language,
    toggleLanguage,
    translations: {
      en: {
        greeting: 'Welcome',
        switchLang: 'Switch to Tamil'
      },
      ta: {
        greeting: 'வணக்கம்',
        switchLang: 'ஆங்கிலத்திற்கு மாற்றவும்'
      }
    }
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}
