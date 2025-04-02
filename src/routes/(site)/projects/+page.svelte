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
				<h2>Indexado Espacial</h2>

				<p>
					Una herramienta visual que demuestra el poder <b>indexado espacial</b
					>, aplicado a la optimización de recursos empresariales.
				</p>
				<ul>
					<li>
						<a href="https://h3-sales-quota.pages.dev/">Live demo</a>
					</li>
				</ul>
			</div>

			<div class="image-gallery">
				<img
					src="/images/post_images/peru-spatial-index.gif"
					alt=""
					loading="lazy"
					style="border: 1px solid;"
				/>
			</div>
		</article>
		<article>
			<div class="sticky">
				<h2>Cartografía de Perú</h2>

				<p>
					Una herramienta visual que te permite descargar la cartografía del
					Perú en diversos formatos. Uno de ellos es <b>topojson</b>, formato
					super ligero y que puedes usar en tus proyectos de data analytics sin
					comprometer el rendimiento de tu app. Tiene varias capas a nivel
					departamental, provincial y distrital.
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
				<img
					src="/images/post_images/latam-carto.gif"
					alt=""
					loading="lazy"
					style="border: 1px solid;"
				/>
			</div>
		</article>
		<article>
			<div class="sticky">
				<h2>Terremotos en el Perú</h2>

				<p>
					Una herramienta visual que muestra la ubicación, profundidad e
					intensidad a escala de los movimientos sísmicos ocurridos en el Perú y
					el ranking de los departamentos que más sufrieron terremotos desde la
					época colonial hasta la actualidad.
				</p>
				<ul>
					<li>
						Lee más sobre esta visualización en este <a href="/blog/earthquakes"
							>blog</a
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
					style="border: 1px solid;"
				/>
			</div>
		</article>

		<article>
			<div class="sticky">
				<h2>Personas desaparecidas en el Ecuador</h2>

				<p>
					Análisis de datos que muestra las razones detrás de la criminalidad
					relacionada a la desaparición de personas en el Ecuador.
				</p>

				<ul>
					<li>
						<a href="/blog/missed-ec/"
							>Lee más sobre esta problemática en este enlace</a
						>
						o directamente en este
						<a rel="external" href="https://ccalobeto.github.io/missed-ec/">
							tablero</a
						>
					</li>
				</ul>
			</div>

			<div class="image-gallery">
				<img
					src="/images/post_images/missing-child.png"
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
			display: flex;
			justify-content: center;

			img {
				margin: 0 auto var(--halfNote);
				display: block;
				// max-width: unset;
				width: calc(100% + (var(--margin) * 2));
				// margin-left: calc(var(--margin) * -1);

				@media (min-width: vars.$sm) {
					max-width: calc(100% + (var(--margin) * 2));
					width: 70vw;
				}
			}
		}
	}
</style>
