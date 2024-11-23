<script lang="ts">
	import type { PageData } from './$types'
	import type Post from '$lib/types/post'
	import { siteTitles, metaImagesUrl } from '$lib/config'

	import Main from '$lib/components/Main.svelte'
	import Pagination from '$lib/components/Pagination.svelte'
	import PostList from '$lib/components/posts/PostList.svelte'

	interface Props {
		data: PageData
	}

	let { data }: Props = $props()

	let posts: Post[] = data.posts || []
	let totalPosts: number = data.totalPosts.total
</script>

<svelte:head>
	<title>J{siteTitles.blog}</title>
	<meta
		data-key="description"
		name="description"
		content="Escribiendo sobre desarrollo, diseño y otros temas."
	/>
	<meta property="og:image" content={metaImagesUrl.ogImage} />
	<meta name="twitter:image" content={metaImagesUrl.twitterImage} />
</svelte:head>

<Main className="blog-roll">
	<div class="compressed-content double-wide">
		<PostList {posts} />

		<Pagination currentPage={1} {totalPosts} />
	</div>
</Main>
