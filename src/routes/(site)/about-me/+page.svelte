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
			Soy Ingeniero Electrónico con más de 5 años de experiencia en Ciencia de
			Datos, especializado en el diseño y construcción de <strong
				>pipelines</strong
			> que transforman datos crudos en información valiosa para la toma de decisiones
			basadas en datos.
		</p>
		<p>
			En mi etapa más reciente, he trabajado como <strong>Developer</strong> de
			mi propio portafolio, capacitándome como <em>Data Analytics Engineer</em>.
			Este proceso me permitió dominar herramientas clave en el ecosistema de
			Ingeniería de Datos: almacenamiento y cómputo en la nube,
			<strong>Spark</strong> y <strong>dbt</strong> para la transformación, y
			<strong>Kestra</strong> y <strong>Airflow</strong> para la orquestación de
			flujos de datos. Además, profundicé mis conocimientos en el desarrollo web
			con
			<strong>Svelte</strong>
			y <strong>ObservableHQ</strong>, integrando visualizaciones interactivas
			con datos geo espaciales.
		</p>
		<p>
			Previamente, me desempeñé como <strong>Data Science Specialist</strong> en
			una empresa de biotecnología nutracéutica, donde implementé pipelines de datos
			escalables y dashboards interactivos utilizando SQL, Python, Apache Airflow
			y Power BI, impactando directamente en las áreas de ventas y marketing.
		</p>
		<p>
			Antes de entrar al mundo de la Ciencia de Datos, trabajé en el sector de
			<em>telecomunicaciones</em> en roles vinculados al área comercial y de recursos
			humanos. Fue allí donde descubrí mi pasión por el análisis, la automatización
			y la mejora continua; habilidades que hoy aplico en cada proyecto de datos.
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
			<li class="link-list__contact">
				<a href="mailto:leon.calobeto@gmail.com"> Contáctate conmigo </a>
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
			margin: 2.5rem 0 var(--quarterNote) var(--quarterNote);
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
