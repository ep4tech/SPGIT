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

// Initialize i18next
i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: translations.en },
      ar: { translation: translations.ar }
    },
    lng: 'ar',
    fallbackLng: 'ar',
    interpolation: {
      escapeValue: false
    }
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
