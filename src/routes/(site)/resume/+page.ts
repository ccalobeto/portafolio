import type { Component } from 'svelte'

interface MarkdownPost {
	Resume: Component
}

//TODO: wrong typing
export const load = async (): Promise<MarkdownPost> => {
	const resume = await import('$lib/content/resume.md')
	return {
		Resume: resume.default
	}
}
