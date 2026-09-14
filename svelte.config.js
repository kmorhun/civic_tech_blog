import adapter from '@sveltejs/adapter-static';

const config = {
	kit: {
		adapter: adapter(),
		paths: {
			base: process.env.NODE_ENV === 'production'
				? '/civic_tech_blog'
				: ''
		}
	}
};

export default config;