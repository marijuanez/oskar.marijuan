import React, { createContext, useContext, useState } from 'react';
import esData from '../content/es.json';
import enData from '../content/en.json';
import deData from '../content/de.json';

const translations = {
  es: esData,
  en: enData,
  de: deData
};

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState('es'); // Default Phase 1: Spanish

  const t = (path) => {
    const keys = path.split('.');
    let current = translations[lang] || translations.es;
    
    for (const key of keys) {
      if (current[key] !== undefined) {
        current = current[key];
      } else {
        // Fallback to Spanish if string missing in current lang
        let fallback = translations.es;
        for (const fk of keys) {
          if (fallback && fallback[fk] !== undefined) {
            fallback = fallback[fk];
          } else {
            return path;
          }
        }
        return fallback;
      }
    }
    return current;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, content: translations[lang] || translations.es }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useTranslation = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useTranslation must be used within a LanguageProvider');
  }
  return context;
};
