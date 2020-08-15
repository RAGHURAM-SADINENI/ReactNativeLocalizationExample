import I18n from 'i18n-js';

import de from './de.json';
import en from './en.json';
import es from './es.json';
import ru from './ru.json';

I18n.translations = {
    en,
    de,
    es,
    ru
}

I18n.fallbacks = true;
export default I18n;