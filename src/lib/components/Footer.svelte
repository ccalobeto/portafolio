<script lang="ts">
	import Grid from './Grid.svelte'
	import { navItems } from '$lib/config'

	const currentYear: number = new Date().getFullYear()
</script>

<div class="footer-wrapper">
	<Grid inverted={true} />
	<footer class="footer">
		<div class="footer__links">
			<h2 class="h4" id="footer-pages">Páginas</h2>
			<nav>
				<ul aria-labelledby="footer-pages">
					<li><a href={navItems.home.route}>{navItems.home.title}</a></li>
					<li><a href={navItems.blog.route}>{navItems.blog.title}</a></li>
					<li><a href={navItems.about.route}>{navItems.about.title}</a></li>
					<li>
						<a href={navItems.projects.route}>{navItems.projects.title}</a>
					</li>
					<li><a href={navItems.contact.route}>{navItems.contact.title}</a></li>
				</ul>
			</nav>
		</div>
		<div class="footer__links">
			<h2 class="h4" id="footer-links">Links</h2>
			<ul aria-labelledby="footer-links">
				<li><a href="/api/rss.xml" data-sveltekit-reload>RSS</a></li>
				<li>
					<a href="https://github.com/ccalobeto" rel="me">GitHub</a>
				</li>
				<li><a href="https://ko-fi.com/calobeto">Ko-Fi</a></li>
			</ul>
		</div>

		<div class="fine-print">
			<a href="https://notbyai.fyi/about">
				<img src="/images/ai-badge.svg" alt="Made by a human, not by AI." />
			</a>

			<p>©2023–{currentYear} Carlos León.</p>

			<p>Este sitio web no usa cookies.</p>

			<p>
				Hecho en
				<a rel="external" href="https://kit.svelte.dev/">SvelteKit</a>; con
				alojamiento &nbsp;en&nbsp;<a
					rel="external"
					href="https://www.cloudflare.com/">Cloudflare</a
				>.
			</p>
		</div>
	</footer>
</div>

<style lang="scss">
	.footer {
		width: 100%;
		background: var(--darkGreen);
		color: var(--white);
		line-height: 1.6em;
		padding: 2.5rem var(--margin) 2rem;

		@media (min-width: vars.$sm) {
			display: grid;
			grid-template-columns: 1fr 1fr 2fr;
			align-items: stretch;
		}

		@media (min-width: vars.$sm) {
			font-size: 0.8rem;
		}

		h2 {
			color: inherit;
			font-size: 0.7rem;
			margin: 0 0 var(--quarterNote);
			width: max-content;
		}

		a {
			color: inherit;
		}

		img {
			display: block;
		}

		&-wrapper {
			overflow: hidden;
			max-width: 100vw;
		}

		&__links {
			padding: 0 var(--quarterNote) var(--quarterNote);
			margin: 2rem 2rem 2rem 1rem;
			border-bottom: 1px solid var(--lightBlue);

			::marker {
				color: var(--lightBlue);
			}

			@media (min-width: vars.$sm) {
				border-bottom: 0;
				border-right: 1px solid var(--lightBlue);
				padding: 1rem;
				margin-left: 0;
			}

			ul {
				list-style-type: square;
				margin: var(--quarterNote) 0;
			}

			li {
				margin: 0.5rem 0 0;
				font-family: var(--headingFont);
			}
		}

		.fine-print {
			font-style: italic;
			margin-left: 1rem;
			align-self: center;

			@media (min-width: vars.$sm) {
				margin-left: 0;
			}

			p {
				margin: var(--quarterNote) 0;
				max-width: 30em;
			}
		}
	}
</style>
