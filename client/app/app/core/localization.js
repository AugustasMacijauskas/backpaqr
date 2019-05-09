import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import { en,lt } from './translations';

i18n.use(initReactI18next).init({
    resources: {
        en,
        lt
    },
    fallbackLng: 'en',
    lng: 'en',
    ns: ['translations'],
    defaultNS: 'translations',
    debug: false,
    interpolation: {
        escapeValue: false,
    },
    react: {
        wait: true,
    },
});

export default i18n;
