import i18next from "i18next";
import { initReactI18next } from "react-i18next";

// resources
import en_content from "./locales/en/en_content.json";
import en_extra_content from "./locales/en/en_extra_content.json";
import ar_content from "./locales/ar/ar_content.json";
import ar_extra_content from "./locales/ar/ar_extra_content.json";

i18next.use(initReactI18next).init({
  lng: "en",
  fallbackLng: "en",
  fallbackNS: "translation",
  debug: true,
  interpolation: { escapeValue: false },
  resources: {
    en: {
      translation: en_content,
      extraNs: en_extra_content,
    },
    ar: {
      translation: ar_content,
      extraNs: ar_extra_content,
    },
  },
});

export default i18next;
