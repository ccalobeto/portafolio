// TODO: types
interface Category {
	title: string
	count: number
}
export const load = async ({ fetch }) => {
	const res = await fetch(`/api/posts/all`)
	const posts = await res.json()

	const uniqueCategories : { [category: string]: Category } = {}

	posts.forEach((post) => {
		post.categories.forEach((category) => {
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
