import React from 'react';
import ReactDOM from 'react-dom/client';
import { StyledEngineProvider, ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import { I18nextProvider } from 'react-i18next';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import rtlPlugin from 'stylis-plugin-rtl';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { prefixer } from 'stylis';
import { translations } from './translations';
import App from './App';
import 'react-flow-renderer/dist/style.css';

// Initialize i18next
i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: translations.en },
      ar: { translation: translations.ar }
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    },
    react: {
      useSuspense: false,
      bindI18n: 'languageChanged'
    },
    debug: true,
    initImmediate: false,
    load: 'currentOnly',
    defaultNS: undefined,
  }, (err) => {
    if (err) {
      console.error('i18n initialization error:', err);
    } else {
      console.log('i18n initialized successfully');
      // Debug: print all loaded i18n resources and current language
      console.log('Loaded i18n resources:', i18n.options.resources);
      console.log('Current language:', i18n.language);
      // Optionally, print a few sample keys
      console.log('Sample t(appTitle):', i18n.t('appTitle'));
      console.log('Sample t(committee.sidebar.all):', i18n.t('committee.sidebar.all'));
    }
  });

// Set initial language from localStorage or browser
const savedLang = localStorage.getItem('i18nextLng');
if (savedLang) {
  i18n.changeLanguage(savedLang);
  document.documentElement.dir = savedLang === 'ar' ? 'rtl' : 'ltr';
  document.documentElement.lang = savedLang;
}

// Log initial translations
console.log('Initial translations:', {
  en: i18n.getResourceBundle('en', 'translation'),
  ar: i18n.getResourceBundle('ar', 'translation')
});

// Create rtl cache
const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [prefixer, rtlPlugin],
});

// Create ltr cache
const cacheLtr = createCache({
  key: 'muiltr',
});

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    background: {
      default: '#f5f7fa',
    },
  },
  direction: i18n.language === 'ar' ? 'rtl' : 'ltr',
});

// Set initial direction
document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
document.documentElement.lang = i18n.language;

const root = ReactDOM.createRoot(document.getElementById('root'));

i18n.on('languageChanged', (lng) => {
  document.dir = lng === 'ar' ? 'rtl' : 'ltr';
  document.body.dir = lng === 'ar' ? 'rtl' : 'ltr';
});

const RtlProvider = ({ children }) => {
  console.log('======>> We ae in index.js');
  const direction = i18n.language === 'ar' ? 'rtl' : 'ltr';
  const currentTheme = createTheme({
    ...theme,
    direction,
  });

  return (
    <CacheProvider value={direction === 'rtl' ? cacheRtl : cacheLtr}>
      <ThemeProvider theme={currentTheme}>
        {children}
      </ThemeProvider>
    </CacheProvider>
  );
};

root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <StyledEngineProvider injectFirst>
        <RtlProvider>
          <CssBaseline />
          <App />
        </RtlProvider>
      </StyledEngineProvider>
    </I18nextProvider>
  </React.StrictMode>
);
