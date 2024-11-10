import type { PageData } from './$types'

//TODO: wrong typing
export const load = async (): Promise<PageData> => {
	const resume = await import('$lib/content/resume.md')

	return {
		Resume: resume.default
	}
}
