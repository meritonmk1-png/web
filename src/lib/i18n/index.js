import { register, init } from 'svelte-i18n';

register('en', () => import('./en.json'));
register('de', () => import('./de.json'));

init({
    fallbackLocale: 'en',
    initialLocale: 'en', // Changed from getLocaleFromNavigator for SSR compatibility
});
