// TODO: types
import type Post from '$lib/types/post'
export const load = async ({ fetch }) => {
	// const rss = await fetch(`/api/rss.xml`) // This isn't used; it's just here to make sure the route gets prerendered. Yes, it's still needed, even if the route goes into the kit.prerender.entries, for some reason.
	const res = await fetch(`/api/posts/all`)
	const resJSON = await res.json()

	const popularPosts = resJSON
		.filter((post: Post) => post.categories?.includes('popular'))
		.map((post: Post) => ({ slug: post.slug, title: post.title }))

	const allCategories: string[] = Array.from(
		new Set(resJSON.flatMap((p: Post) => p.categories))
	)

	return {
		popularPosts,
		allCategories
	}
}
