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
			Soy Ingeniero Electrónico de profesión con 7 años de experiencia
			profesional en la ciencia de datos. Mi última experiencia profesional fue
			como <strong>Data Science Specialist</strong>
			en una compañía de fabricación de productos nutracéuticos, donde implementé
			varios pipelines de datos usando el ecosistema empresarial (SQL, Python, Apache
			Airflow y su despliegue en
			<strong>PowerBI Online)</strong>. Actualmente estoy desarrollando
			proyectos de interés público y empresarial usando <em>datos abiertos</em>.
		</p>
		<p>
			La idea de este blog es compartir lo que voy aprendiendo en cada proyecto
			y espero desarrollar herramientas útiles que puedas usar en los tuyos, ¡y
			el código estará en mi cuenta de <a href="https://github.com/ccalobeto"
				>Github!</a
			>.
		</p>

		<p>
			Antes de entrar al mundo de la <em>Ciencia de Datos</em>, trabajé en una
			Empresa de Telecomunicaciones donde desempeñé roles en el área comercial y
			recursos humanos.
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
