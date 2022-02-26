import i18next from "i18next"
import { initReactI18next } from "react-i18next"

import resources from "./translations.json"

export const languages = {
	cs: "cs",
	en: "en",
}

void i18next
	//
	.use(initReactI18next)
	.init({
		// the translations
		// (tip move them in a JSON file and import them,
		// or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
		resources,
		fallbackLng: languages.en,

		interpolation: {
			// react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
			escapeValue: false,
		},
	})
