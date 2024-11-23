<script lang="ts">
	import CodePenLink from '$lib/components/CodePenLink.svelte'
	import Main from '$lib/components/Main.svelte'
	import { metaImagesUrl, siteTitles } from '$lib/config'
</script>

<svelte:head>
	<title>J{siteTitles.projects}</title>
	<meta
		data-key="description"
		name="description"
		content="Una muestra de mis proyectos."
	/>
	<meta property="og:image" content={metaImagesUrl.ogImage} />
	<meta name="twitter:image" content={metaImagesUrl.twitterImage} />
</svelte:head>

<Main>
	<div class="projects compressed-content double-wide">
		<article>
			<div class="sticky">
				<h2>SvelteKit static blog starter</h2>

				<p>
					A fully open-source, pre-configured starter for a SvelteKit blog.
					Includes Markdown and Sass preprocessing; has mdsvex with rehype
					plugins pre-installed; and includes automatic prefetching of top-level
					routes, an RSS feed, and a JSON API.
				</p>
				<ul>
					<li>
						<a href="https://ccalobeto.github.io/latam-cartography/"
							>Live demo</a
						>
					</li>
					<li>
						<a href="https://github.com/ccalobeto/latam-cartography"
							>GitHub repo</a
						>
					</li>
				</ul>
			</div>

			<div class="image-gallery">
				<figure>
					<iframe
						src="https://sveltekit-static-starter.netlify.app"
						frameborder="0"
						title="Live demo of the starter, from sveltekit-static-starter.netlify.app"
						width="100%"
						height="800"
					></iframe>
					<figcaption>
						<a href="https://sveltekit-static-starter.netlify.app"
							>sveltekit-static-starter.netlify.app</a
						>
					</figcaption>
				</figure>
			</div>
		</article>
		<article>
			<div class="sticky">
				<h2>Terremotos en el Perú</h2>

				<p>
					Una herramienta visual que muestra el ranking de los departamentos que
					más sufrieron con este fenómeno con datos recopilados desde 1471 hasta
					1959; y otro que muestra la posición y la intensidad a escala de los
					movimientos sísmicos en el Perú ocurridos desde 1960 con datos
					recopilados por sensores electrónicos.
				</p>
				<ul>
					<li>
						Lee más sobre esta visualización <a href="/blog/earthquakes"
							>en este blog</a
						>
						y
						<a rel="external" href="https://ccalobeto.github.io/earthquakes/">
							tablero</a
						>
					</li>
				</ul>
			</div>

			<div class="image-gallery">
				<img
					src="/images/post_images/earthquakes.png"
					alt=""
					loading="lazy"
					width="1200"
					height="1697"
					style="aspect-ratio: 1200 / 1697"
				/>
			</div>
		</article>

		<article>
			<div class="sticky">
				<h2>Personas desaparecidas en el Ecuador</h2>

				<p>
					Visualización que muestra el análisis sobre las razones de
					criminalidad relacionada a la desaparición de personas en el Ecuador.
				</p>

				<ul>
					<li>
						<a href="/blog/missed-in-ec/"
							>Lee más sobre esta poblemática en este enlace</a
						>
						o directamente en este
						<a rel="external" href="https://ccalobeto.github.io/missed-in-ec/">
							tablero</a
						>
					</li>
				</ul>
			</div>

			<div class="image-gallery">
				<img
					src="/images/post_images/missing-child.jpg"
					alt=""
					style="border: 1px solid;"
				/>
			</div>
		</article>

		<article>
			<div class="sticky">
				<h2>Otros proyectos y&nbsp;apps</h2>
				<p>
					Tambien puedes encontrar más de mi trabajo en <a
						href="https://github.com/ccalobeto">GitHub</a
					>
				</p>
			</div>
			<ul>
				<li>
					Website for <a href="https://rise.getflywheel.com" rel="external"
						>Rise</a
					>, Flywheel/WP Engine's BIPOC employee resource group
				</li>

				<li>
					A Chrome extension, an internal knowledge base, various WordPress
					themes, a couple of Node CLI tools, and a handful of trainings and
					presentations (none of which I can show here because employer privacy
					and such)
				</li>
			</ul>
		</article>
	</div>
</Main>

<style lang="scss">
	.projects {
		p {
			max-width: var(--maxWidth);
			// min-width: 12em;
		}

		article {
			display: grid;
			grid-template-columns: 1fr;
			gap: var(--halfNote);
			align-items: start;

			@media (min-width: vars.$sm) {
				grid-template-columns: 2fr 3fr;

				.sticky {
					position: sticky;
					top: var(--halfNote);
				}
			}

			@media (min-width: vars.$lg) {
				grid-template-columns: 2fr 3fr;
			}

			+ article {
				margin-top: 6rem;
			}
		}

		.image-gallery {
			figure {
				margin-top: 0;
			}

			img {
				margin: 0 auto var(--halfNote);
				display: block;
				max-width: unset;
				width: calc(100% + (var(--margin) * 2));
				margin-left: calc(var(--margin) * -1);

				@media (min-width: vars.$sm) {
					max-width: calc(100% + var(--margin));
					width: auto;
					margin-left: 0;
				}
			}
		}
	}
</style>
