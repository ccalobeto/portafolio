// TODO: types
import type Post from '$lib/types/post'
interface Category {
	title: string
	count: number
}
export const load = async ({ fetch }) => {
	const res = await fetch(`/api/posts/all`)
	const posts: Post[] = await res.json()

	const uniqueCategories : { [category: string]: Category } = {}

	posts.forEach((post: Post) => {
		(post.categories as string[]).forEach((category : string) => {
			if (category in uniqueCategories) {
				uniqueCategories[category].count += 1
			} else {
				uniqueCategories[category] = {
					title: category,
					count: 1
				}
			}
		})
	})

	const sortedUniqueCategories = Object.values(uniqueCategories).sort(
		(a, b) => a.title.localeCompare(b.title)
	)

	return {
		uniqueCategories: sortedUniqueCategories
	}
}
