<script lang="ts">
	import Main from '$lib/components/Main.svelte'
	import { siteTitles } from '$lib/config'
</script>

<svelte:head>
	<title>{siteTitles.aboutMe}</title>
	<meta
		data-key="description"
		name="description"
		content="Un poco de mi vida personal y profesional."
	/>
</svelte:head>

<Main>
	<div class="compressed-content writing">
		<img
			class="profile-pic"
			src="/images/bio-photo.jpg"
			alt="Mi foto generada con IA ;)."
		/>
		<h2>Quien Soy</h2>

		<p>
			Soy Ingeniero Electrónico de profesión con más de 6 años de experiencia
			profesional en la ciencia de datos. Mi última experiencia profesional fue
			como <strong>Data Science Specialist</strong>
			en
			<a href="https://ifuxion.com/orphan/enrollment/products">Fuxion</a> donde
			implementé varios pipelines de datos incluyendo el despliegue de tableros
			en <strong>PowerBI</strong>. Actualmente estoy desarrollando proyectos
			personales unsado la plataforma de datos abiertos.
		</p>
		<p>
			Cuando tengo tiempo escribo en mi blog personal sobre las experiencias
			aprendidas en cada proyecto. Tambien hago el mantenimiento de herramientas
			que los developers pueden utilizar en sus propios proyectos y que lo
			puedes encontrar en mi cuenta de <a href="https://github.com/ccalobeto"
				>Github</a
			>.
		</p>

		<p>
			Antes de entrar al mundo developer, trabajé en una Empresa de
			Telecomunicaciones en el Perú donde desempeñe roles en el área comercial y
			recursos humanos. Fue en mis últimos años en ésta empresa donde me
			convencí que mi pasión es automatizar tareas y desarrollar visualizaciones
			que describan, expliquen y exploten mejor fenómenos comerciales, sociales
			y financieros.
		</p>

		<p>
			Personalmente me considero: amante del ajedrez, me relajo mucho con la
			natación, aún de pocas redes sociales excepto twitter, autodidacta, amante
			de las playas y baterista frustado.
		</p>

		<h3>Mas de mi:</h3>

		<ul>
			<li>
				<a href="/contact?from_page=about">Contacto</a>
			</li>
			<li>
				<a href="https://www.linkedin.com/in/carlosleonl" rel="nofollow"
					>LinkedIn</a
				>
			</li>
			<li>
				<a href="https://github.com/ccalobeto" rel="nofollow">GitHub</a>
			</li>
		</ul>
	</div>
</Main>

<style lang="scss">
	.writing {
		h2 {
			margin-bottom: var(--quarterNote);
		}

		.profile-pic {
			aspect-ratio: 1 / 1;
			object-fit: cover;
			border-radius: 10rem;
			margin: 4.5rem 0 var(--quarterNote) var(--quarterNote);
			shape-outside: circle(6rem);
			float: right;
			max-width: 30vw;

			@media (min-width: vars.$xxs) {
				max-width: 12rem;
				shape-outside: circle(8rem);
			}
		}
	}
</style>
