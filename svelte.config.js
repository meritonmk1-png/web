import adapter from '@sveltejs/adapter-netlify';

/** @type {import('@sveltejs/kit').Config} */
const config = {
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
