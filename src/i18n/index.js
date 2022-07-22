import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './lang/en';

i18n
	.use(initReactI18next)
	.init({
		detection: {
			order: ['querystring', 'cookie', 'localStorage', 'sessionStorage', 'htmlTag', 'path', 'subdomain', 'navigator'],
			caches:[],
		},
		lng: 'en',
		resources: {
			en: {
				translations: en,
			},
		},
		fallbackLng: 'en',
		debug: false,
		returnObjects: true,
		// have a common namespace used around the full app
		ns: ['translations'],
		defaultNS: 'translations',

		keySeparator: false, // we use content as keys
		interpolation: {
			escapeValue: false, // not needed for react!!
			formatSeparator: ',',
		},

		react: {
			wait: true,
		},
	});

const translate = (key, opt) => i18n.t(key, opt);

export default i18n;
export { translate };