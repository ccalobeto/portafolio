<script lang="ts">
	import Main from '$lib/components/Main.svelte'
	import type { PageData } from './$types'
	import type { Component } from 'svelte'

	interface Props {
		data: PageData
	}

	let { data }: Props = $props()

	let Uses: Component = data.Uses
</script>

<svelte:head>
	<title>Josh Collinsworth | Uses</title>
	<meta
		data-key="description"
		name="description"
		content="Things I use and like"
	/>
	<meta
		property="og:image"
		content="https://joshcollinsworth.com/images/site-image.png"
	/>
	<meta
		name="twitter:image"
		content="https://joshcollinsworth.com/images/site-image.png"
	/>
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
