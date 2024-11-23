<script lang="ts">
	interface Props {
		iconOnly?: boolean
	}

	let { iconOnly = false }: Props = $props()
</script>

<template>
	<svg
		id="logo-svg"
		width="100%"
		height="100%"
		viewBox="0 0 600 170"
		version="1.1"
		style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"
	>
		<g id="artboard">
			{#if !iconOnly}
				<g id="logo-text">
					<text
						x="280"
						y="70"
						style="font-weight:bold;fill:var(--ink);fill-rule:nonzero;transition:.3s"
						font-size="80px"
					>
						<tspan> Carlos </tspan>
						<tspan x="280" y="160"> León </tspan>
					</text>
				</g>
			{/if}
			<text
				id="bracket-right"
				x="140"
				y="140"
				style="font-weight:bold;font-family:AveriaSerifLibre-Regular,serif;fill:#ffd100;"
				font-size="180px"
			>
				&lt
			</text>
			<text
				id="bracket-left"
				x="20"
				y="140"
				style="font-weight:bold;font-family:AveriaSerifLibre-Regular,serif;fill:#a7a8aa;"
				font-size="180px"
			>
				&gt
			</text>
		</g>
	</svg>
</template>

<style lang="scss">
	#logo-svg {
		width: auto;
		:global(a:hover) &,
		:global(a:focus) & {
			#bracket-left {
				transform: translateX(20%);
			}

			#bracket-right {
				transform: translateX(-20%);
			}
		}

		#bracket-left,
		#bracket-right {
			transform: translateX(0);
			transition: transform 0.3s cubic-bezier(1, 0, 0, 1);
		}

		@media (max-width: 23rem) {
			#logo-text {
				display: none;
			}
		}
		#logo-text {
			font-family: 'Berkshire Swash';
		}
	}
</style>
