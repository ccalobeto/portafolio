<script lang="ts">
	import type { PageData } from './$types'
	import { metaImagesUrl } from '$lib/config'

	import type Post from '$lib/types/post'
	import PostList from '$lib/components/posts/PostList.svelte'
	import Main from '$lib/components/Main.svelte'
	import Pagination from '$lib/components/Pagination.svelte'

	interface Props {
		data: PageData
		posts?: Post[]
		page?: number
		totalPosts?: number
	}

	let {
		data,
		posts = data.posts || [],
		page = data.page || 1,
		totalPosts = data.totalPosts
	}: Props = $props()

	let lowerBound = $derived(page * 10 - 9 || 1)
	let upperBound = $derived(Math.min(page * 10, totalPosts))
</script>

<svelte:head>
	<title>Carlos León | Archivo Blog página {page}</title>
	<meta
		data-key="description"
		name="description"
		content="Past posts on the web, development, and design."
	/>
	<meta property="og:image" content={metaImagesUrl.ogImage} />
	<meta name="twitter:image" content={metaImagesUrl.twitterImage} />
</svelte:head>

<Main className="blog-roll">
	{#if lowerBound === totalPosts}
		<h1 class="h2">Post {totalPosts} of {totalPosts}</h1>
	{:else}
		<h1 class="h2">Posts {lowerBound}–{upperBound} of {totalPosts}</h1>
	{/if}
	<Pagination currentPage={page} {totalPosts} />
	<PostList {posts} />
	<Pagination currentPage={page} {totalPosts} />
</Main>

<style lang="scss">
	h1.h2 {
		font-size: 1.3rem;
		padding: 0;
		margin: 0 0 var(--halfNote);

		&::before {
			display: none;
		}
	}
</style>
