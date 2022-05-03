import i18n from "i18next"
import { initReactI18next } from "react-i18next"

import trEN from "./en/common.json"
import trFR from "./fr/common.json"
import trKO from "./ko/common.json"
import trDE from "./de/common.json"
import trES from "./es/common.json"
import trAR from "./ar/common.json"
import trJA from "./ja/common.json"
import trZH from "./zh/common.json"

const resources = {
  en: { common: trEN },
  fr: { common: trFR },
  ko: { common: trKO },
  de: { common: trDE },
  es: { common: trES },
  ar: { common: trAR },
  ja: { common: trJA },
  zh: { common: trZH }
}

i18n
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    resources,
    lng: localStorage.getItem('i18nextLng'),
    ns: ["common"],
    defaultNS: "common",
    fallbackNS: "common",
    fallbackLng: ["en", "fr", "dev"],
    debug: false,
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    react: {
      wait: true,
      useSuspense: false
    },
  })

export default i18n
