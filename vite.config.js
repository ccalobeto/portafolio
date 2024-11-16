import { sveltekit } from '@sveltejs/kit/vite'

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	build: {
		minify: false,
		terserOptions: {
			compress: false,
			mangle: false
		}
	}
}

export default config
