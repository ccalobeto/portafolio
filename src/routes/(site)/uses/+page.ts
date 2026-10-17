import type { Component } from 'svelte'

interface MarkdownPost {
	Uses: Component
}

export const load = async (): Promise<MarkdownPost> => {
	const [loadModule] = Object.values(
		import.meta.glob('../../../lib/content/uses.md')
	)
	const Uses = (await loadModule()) as { default: Component }

	return {
		Uses: Uses.default
	}
}
