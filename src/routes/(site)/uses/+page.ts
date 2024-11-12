import type { Component } from 'svelte'

interface MarkdownPost {
	Uses: Component
}

export const load = async (): Promise<MarkdownPost> => {
	const Uses = await import('/src/lib/content/uses.md')

	return {
		Uses: Uses.default
	}
}
