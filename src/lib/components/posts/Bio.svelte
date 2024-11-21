<script lang="ts">
	interface Props {
		currentPage: string
	}

	let { currentPage }: Props = $props()
</script>

<div class="bio-wrapper">
	<div class="bio">
		<div>
			<p class="about">
				Mi nombre es Carlos León y soy Ingeniero de Visualización de datos.
				Actualmente vivo en Lima, Perú y desarrollo proyectos de código abierto.
			</p>
			<ul class="link-list">
				<li class="link-list__kofi">
					<a href="https://ko-fi.com/collinsworth" rel="external">
						Buy me a coffee
					</a>
				</li>
				<li class="link-list__contact">
					<a href="/contact?from_page={currentPage}"> Contáctate conmigo </a>
				</li>
				<li class="link-list__more">
					<a href="/">Mas acerca de mi</a>
				</li>
			</ul>
		</div>
		<img
			src="/images/bio-photo.jpg"
			alt=""
			class="thumbnail"
			width="1"
			height="1"
		/>
	</div>
</div>

<style lang="scss">
	.bio {
		font-size: 0.85rem;
		overflow: auto;
		display: flex;
		align-items: center;
		align-content: center;
		flex-wrap: wrap;
		padding-block: var(--quarterNote);
		border-block: 1px solid currentColor;
		margin-block: var(--quarterNote);

		@media (min-width: vars.$xxs) {
			flex-wrap: nowrap;
		}

		.about {
			font-style: italic;
			font-family: var(--bodyFont);
			line-height: 1.6;
		}

		.link-list {
			font-family: var(--headingFont);
			margin: var(--quarterNote) 0 0;
			padding-left: 1.1rem;

			li {
				margin: 0 0 0.25rem;

				a {
					text-decoration-color: var(--lightGray);
				}
			}

			&__kofi::marker {
				content: '☕ ';
			}

			&__contact::marker {
				content: '📩 ';
			}

			&__more::marker {
				content: '💁🏼‍♂️ ';
			}
		}

		.thumbnail {
			width: 6rem;
			border-radius: 3rem;
			margin: var(--quarterNote) auto 0;

			@media (min-width: vars.$xxs) {
				margin: 0 0 0 var(--quarterNote);
			}
		}

		p {
			margin: 0;
		}
	}
</style>
