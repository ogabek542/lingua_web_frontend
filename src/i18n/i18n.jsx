import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./translationEnglish";
import ru from "./translationRussian";
import uz from "./translationUzbek";

// Language resources
const resources = { en, ru, uz };

// i18n.use(initReactI18next).init({
//   resources,
//   lng: "uz",
//   fallbackLng: "uz",
//   interpolation: {
//     escapeValue: false,
//   },
// });

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  lng: localStorage.getItem("language") || "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
