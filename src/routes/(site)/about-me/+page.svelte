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
		<h2>Acerca de Mi</h2>

		<p>
			Soy Ingeniero Electrónico de profesión con más de 6 años de experiencia
			profesional en la ciencia de datos. Mi última experiencia profesional fue
			como <strong>Data Science Specialist</strong>
			en una compañía de fabricación de productos nutracéuticos, donde implementé
			varios pipelines de datos hasta su despliegue en
			<strong>PowerBI Online</strong>. Actualmente estoy desarrollando proyectos
			personales usando la
			<a href="https://www.datosabiertos.gob.pe/"
				>Plataforma de Datos Abiertos</a
			> del Estado Peruano.
		</p>
		<p>
			La idea de este blog es compartir con otros developers lo que voy
			aprendiendo en cada proyecto. Espero poder crear herramientas útiles que
			puedas usar en tus propios proyectos, ¡y todo el código estará en mi
			cuenta de <a href="https://github.com/ccalobeto">Github!</a>.
		</p>

		<p>
			Antes de entrar al mundo de la <em>Ciencia de Datos</em>, trabajé en una
			Empresa de Telecomunicaciones donde desempeñé roles en el área comercial y
			recursos humanos. Fue en mis últimos años en ésta empresa donde me
			convencí que mi pasión es desarrollar visualizaciones que describan y
			expliquen mejor fenómenos sociales, comerciales y financieros.
		</p>

		<p>
			Personalmente me considero: amante del ajedrez, me relajo mucho con la
			natación, aún de pocas redes sociales excepto twitter, autodidacta, amante
			de las playas y baterista frustrado.
		</p>

		<h3>Mas de mi:</h3>

		<ul>
			<!-- <li>
				<a href="/contact?from_page=about">Contacto</a>
			</li> -->
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
