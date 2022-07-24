import { createContext, useState } from 'react';
import en from '../data/en.json';
import vi from '../data/vi.json';

const langs = {
  vi: JSON.parse(JSON.stringify(vi)),
  en: JSON.parse(JSON.stringify(en)),
};

const LanguageContext = createContext();

function LanguageProvider({ children }) {
  const [lang, setLang] = useState('en');
  const changeLanguage = () => {
    setLang(lang === 'en' ? 'vi' : 'en');
  };
  const value = {
    lang: langs[lang],
    changeLanguage,
  };
  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export { LanguageContext, LanguageProvider };
