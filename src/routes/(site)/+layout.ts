export const prerender = true

interface CustomPageData {
	path: string
}

export const load = ({ url }: { url: URL }): CustomPageData => {
	const path: string = url.pathname

	return {
		path
	}
}
