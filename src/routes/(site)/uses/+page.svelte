<script lang="ts">
	import Main from '$lib/components/Main.svelte'
	import type { PageData } from './$types'
	import type { Component } from 'svelte'
	import { metaImagesUrl, siteTitles } from '$lib/config'

	interface Props {
		data: PageData
	}

	let { data }: Props = $props()

	let Uses: Component = data.Uses
</script>

<svelte:head>
	<title>{siteTitles.utilities}</title>
	<meta
		data-key="description"
		name="description"
		content="Cosas que me gustan y utilizo"
	/>
	<meta property="og:image" content={metaImagesUrl.ogImage} />
	<meta name="twitter:image" content={metaImagesUrl.twitterImage} />
</svelte:head>

<Main>
	<div class="uses compressed-content">
		<Uses />
	</div>
</Main>

<style lang="scss" global>
	.uses {
		li a,
		p a {
			font-weight: bold;
		}
	}
</style>
