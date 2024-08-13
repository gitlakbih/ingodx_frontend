import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    fallbackLng: "fr",
    detection: {
      order: [
        "htmlTag",
        "cookie",
        "localStorage",
        "navigator"],
      caches: ["cookie"],
    },
    ns: [
      "translation",
      "navbar",
      "main",
      "footer",
      "tsakherliya",
      "delivery",
      "market",
      "login",
      "about",
      "profile",
    ],
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json",
    },
    debug: false,
    // lng:'ar',
  });

export default i18n;
