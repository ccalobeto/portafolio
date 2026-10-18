<script lang="ts">
	import '$lib/assets/styles/global.scss'

	import PageShell from '$lib/components/PageShell.svelte'
	import { onMount } from 'svelte'

	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();

	let isFrame = $state(false)

	onMount(() => {
		if (window.self !== window.top) isFrame = true
	})
</script>

<PageShell showFooter={!isFrame}>
	<div class="layout">
		{@render children?.()}
	</div>
</PageShell>
