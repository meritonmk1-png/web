import adapter from '@sveltejs/adapter-netlify';
import { mdsvex } from 'mdsvex';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md'],

	preprocess: [
		mdsvex({
			extensions: ['.md']
		})
	],

	kit: {
		adapter: adapter(),

		// Prerendering for static site generation
		prerender: {
			entries: ['*'],
			handleHttpError: ({ path, referrer, message }) => {
				// ignore 404s for optional routes
				if (message.includes('Not found')) return;
				throw new Error(message);
			}
		}
	}
};

export default config;
