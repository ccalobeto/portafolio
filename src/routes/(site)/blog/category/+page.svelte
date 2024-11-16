<script lang="ts">
	import { siteTitles, metaImagesUrl } from '$lib/config'
	import type { PageData } from './$types'
	import type category from '$lib/types/category'
	import Main from '$lib/components/Main.svelte'

	interface Props {
		data: PageData
	}

	let { data }: Props = $props()

	let uniqueCategories: category[] = data.uniqueCategories
</script>

<svelte:head>
	<title>{siteTitles.allCategories}</title>
	<meta property="og:image" content={metaImagesUrl.ogImage} />
	<meta name="twitter:image" content={metaImagesUrl.twitterImage} />
</svelte:head>

<Main>
	<div class="compressed-content">
		<h1 class="h2">Todas las categorías</h1>

		<ul>
			{#each uniqueCategories as category}
				<li>
					<a href="/blog/category/{category.title}">
						{category.title}
					</a>
					({category.count})
				</li>
			{/each}
		</ul>
	</div>
</Main>

<style lang="scss">
	h1.h2 {
		margin: 0 0 var(--wholeNote);
	}

	li {
		text-transform: uppercase;
		margin-bottom: var(--quarterNote);
		font-style: italic;

		a {
			font-family: var(--headingFont);
			font-weight: bold;
			font-size: 0.85em;
			font-style: normal;
		}
	}
</style>
