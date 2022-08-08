import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { I18nextProvider } from 'react-i18next'
import i18next from 'i18next';
import global_es from './translations/es/global.json'
import global_en from './translations/en/global.json';
import LanguageDetector from 'i18next-browser-languagedetector';

i18next
  .use(LanguageDetector)
  .init({
  interpolation: { escapeValue: false },
  resources: {
    es: {
      global: global_es
    },
    en: {
      global: global_en
    }
  }
});

const loadingMarkup = (
  <div className="py-4 text-center">
    <h3>Loading..</h3>
  </div>
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Suspense fallback={loadingMarkup}>
    <React.StrictMode>
      <I18nextProvider i18n={i18next}>
        <App />
      </I18nextProvider>
    </React.StrictMode>
  </Suspense>,
);
