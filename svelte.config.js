import { sveltePreprocess } from 'svelte-preprocess'
import autoprefixer from 'autoprefixer'
import adapter from '@sveltejs/adapter-static'
import { mdsvex } from 'mdsvex'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeSlug from 'rehype-slug'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	extensions: ['.svelte', '.md', '.svx'],
	preprocess: [
		sveltePreprocess({
			scss: {
				prependData: `@use 'src/lib/assets/styles/vars';`
			},
			postcss: {
				plugins: [autoprefixer]
			}
	}),
		mdsvex({
			extensions: ['.md'],
			highlight: {
				alias: { vue: 'html' }
			},
			rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings]
		})
	],

	kit: {
		adapter: adapter(),
		alias: {
			$lib: 'src/lib',
		},
		prerender: {
			handleMissingId: 'ignore'
		}
	}
}

export default config
