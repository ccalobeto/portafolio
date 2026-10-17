<script lang="ts">
	interface Props {
		currentPage: number;
		totalPosts: number;
	}

	let { currentPage, totalPosts }: Props = $props();

	let pagesAvailable: number = $derived(Math.ceil(totalPosts / 10))
	

	const isCurrentPage = (page: number): boolean => page == currentPage
</script>

<nav aria-label="Pagination navigation" class="pagination">
	<h2>Go to page:</h2>
	<ul>
		{#each Array.from({ length: pagesAvailable }, (_, i) => i + 1) as page}
			<li>
				<a href="/blog/page/{page}" aria-current={isCurrentPage(page)}>
					{#if isCurrentPage(page)}
						<span class="sr"> Current page </span>
					{:else}
						<span class="sr"> Go to page </span>
					{/if}
					{page}
				</a>
			</li>
		{/each}
	</ul>
</nav>

<style lang="scss">
	.pagination {
		margin: 0 0 var(--quarterNote);

		h2 {
			font-size: 1rem;
			padding: 0;
			margin: 0 0 var(--eighthNote);

			&::before {
				display: none;
			}
		}

		ul {
			display: flex;
			flex-wrap: wrap;
			justify-content: start;
			list-style-type: none;
			gap: var(--eighthNote);
			margin: 0;
			padding: 0;

			li {
				margin: 0;
			}

			a {
				background: var(--lighterBlue);
				text-decoration: none;
				line-height: 1;
				display: flex;
				align-items: center;
				justify-content: center;
				width: 2em;
				height: 2em;
				font-family: var(--headingFont);
				font-weight: bold;
				transition: background 0.1s;

				&:hover {
					background: var(--yellow);
				}

				&[aria-current='true'] {
					background: var(--yellow);
					color: var(--black);
					border: 1px solid currentColor;
				}
			}
		}
	}

	// --ink (lavender) only hits 3.69:1 against --darkBlue -- fails AA. See issue #21.
	// The system-preference variant was missing entirely: with no .dark class, a
	// system-dark preference left these links on --lighterBlue while --ink had already
	// switched to lavender (1.39:1, far under AA).
	:global(.dark .pagination ul a) {
		background: var(--darkBlue) !important;
		color: var(--trueWhite);

		&[aria-current='true'] {
			background: var(--yellow) !important;
			color: var(--black);
		}
	}

	:global(html:not(.light)) {
		@media (prefers-color-scheme: dark) {
			.pagination ul a {
				background: var(--darkBlue);
				color: var(--trueWhite);

				&[aria-current='true'] {
					background: var(--yellow);
					color: var(--black);
				}
			}
		}
	}
</style>
