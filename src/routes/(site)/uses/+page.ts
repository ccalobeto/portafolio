import type { PageData } from './$types'

export const load = async (): Promise<PageData> => {
	const Uses = await import('/src/lib/content/uses.md')


	return {
		Uses: Uses.default
	}
}
