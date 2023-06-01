import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
	site: 'https://duquejo01.github.io',
	output: 'static',
	base: '/react-ts-redux-timers',
	integrations: [
		tailwind({
			config: { applyBaseStyles: false },
		}),
		react(),
	],
});
