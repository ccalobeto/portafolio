<script lang="ts">
	interface Props {
		hash: string
		children?: import('svelte').Snippet
	}

	let { hash, children }: Props = $props()
</script>

<a href="https://codepen.io/ccalobeto/pen/{hash}" rel="external">
	{@render children?.()}
</a>
