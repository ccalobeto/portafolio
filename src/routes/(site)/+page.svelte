<script lang="ts">
	import { metaImagesUrl, siteTitles } from '$lib/config'
	import Main from '$lib/components/Main.svelte'
</script>

<svelte:head>
	<title>{siteTitles.home}</title>
	<meta property="og:title" content="Carlos León" />
	<meta
		data-key="description"
		property="og:description"
		name="description"
		content="Data Visualization Engineer"
	/>
	<meta property="og:image" content={metaImagesUrl.ogImage} />
	<meta name="twitter:image" content={metaImagesUrl.twitterImage} />
</svelte:head>

<Main>
	<div class="intro">
		<div class="intro__headline">
			<h2>
				Hola, mi nombre es <strong>Carlos</strong> y soy Data Engineer
			</h2>

			<p class="subhead h2">Keep Calm and Let the Data Decide</p>

			<p>
				Adapto e implemento soluciones basadas en datos, utilizando la
				<b>visualización y la narrativa</b> como herramientas clave para transformar
				información compleja en conocimientos accesibles.
			</p>

			<section>
				<nav>
					<ul>
						<li><a href="/about-me">Más acerca de mi y lo que hago</a></li>
						<li><a href="/blog">Mi blog</a></li>
						<li><a href="/projects">Mis proyectos</a></li>
						<!-- <li><a href="/contact">Estemos en contacto</a></li> -->
					</ul>
				</nav>
			</section>
		</div>
	</div>
</Main>

<style lang="scss">
	@for $i from 1 through 4 {
		.intro .intro__headline > *:nth-child(#{$i}) {
			animation-delay: 0.2 + ($i * 0.14s);
		}
		.intro .intro__headline ul li:nth-child(#{$i}) {
			animation-delay: 0.8 + ($i * 0.1s);
		}
	}

	.intro {
		width: 100%;
		position: relative;
		margin-top: var(--wholeNote);

		.intro__headline > *,
		.intro__headline ul li {
			opacity: 0;
			transform: translateY(16px);
			animation: fade_in_intro 1.2s cubic-bezier(0.23, 1, 0.32, 1) forwards;

			:global(.reduce-motion) & {
				transform: translateY(0);
			}
		}

		@media (min-width: vars.$xl) {
			display: grid; //TODO: leftover from old design. Probably not needed unless I decide to put stuff in that narrow right column again.
			grid-template-columns: 48rem 1fr;
			gap: 0 calc(var(--wholeNote) * 2);
		}

		h2,
		.subhead {
			font-size: 2.5rem;
			font-size: clamp(1.8rem, calc(1rem + 3vw), 3.5rem);
			margin-bottom: var(--halfNote);
			font-weight: normal;
			max-width: 17em;

			:global(strong) {
				background: var(--yellow);
				color: var(--darkerGray);
			}

			&::before {
				display: none;
			}
		}

		.subhead {
			font-size: clamp(1.2rem, calc(0.6rem + 2vw), 1.8rem);
			margin-top: 0;
			margin-bottom: var(--halfNote);
			color: var(--darkGray);
			line-height: 1.4;
			max-width: 23em;

			:global(.dark) & {
				color: var(--ink);
			}

			a {
				text-decoration: underline;
			}
		}

		p {
			max-width: 38em;
		}

		ul {
			margin-top: var(--halfNote);
			margin-bottom: 0;
		}
	}

	@keyframes fade_in_intro {
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	:global(html:not(.light) .intro .subhead) {
		@media (prefers-color-scheme: dark) {
			color: var(--ink) !important;
		}
	}
</style>
