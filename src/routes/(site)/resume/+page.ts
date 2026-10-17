import type { Component } from 'svelte'

interface MarkdownPost {
	Resume: Component
}

export const load = async (): Promise<MarkdownPost> => {
	const [loadModule] = Object.values(
		import.meta.glob('../../../lib/content/resume.md')
	)
	const resume = (await loadModule()) as { default: Component }
	return {
		Resume: resume.default
	}
}
