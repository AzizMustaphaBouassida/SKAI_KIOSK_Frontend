import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationEN from './en/translation.json';
import translationFR from './fr/translation.json';

// Translation resources
const resources = {
  en: {
    translation: translationEN
  },
  fr: {
    translation: translationFR
  }
};

i18n
  .use(LanguageDetector) // Detects user language
  .use(initReactI18next) // Passes i18n down to react-i18next
  .init({
    resources,
    fallbackLng: 'en', // Default language if detection fails
    lng: 'en', // Initial language
    debug: false, // Set to true for debugging
    
    interpolation: {
      escapeValue: false // React already escapes values
    },
    
    detection: {
      // Order of language detection methods
      order: ['localStorage', 'navigator'],
      caches: ['localStorage']
    }
  });

export default i18n;
