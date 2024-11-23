<script lang="ts">
	import type contactFormSubmission from '$lib/types/contact-form-submission'
	import { metaImagesUrl, siteTitles } from '$lib/config'
	import { onMount } from 'svelte'
	import Main from '$lib/components/Main.svelte'

	let isSubmitted = $state(false)
	let showError = $state(false)

	let formData: contactFormSubmission = $state({
		from_page: '',
		name: '',
		email: '',
		message: ''
	})

	onMount((): void => {
		const params = new URLSearchParams(window.location.search)
		formData = { ...formData, from_page: params.get('from_page') ?? '' }
	})

	const encode = (data: { [key: string]: any }): string => {
		return Object.keys(data)
			.map(
				(key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
			)
			.join('&')
	}

	const handleSubmit = (e: Event): void => {
		const { name, email, message, from_page } = formData

		if (!name || !email || !message) {
			showError = true
			return
		}

		const target = e.target as HTMLFormElement
		fetch('/', {
			method: 'POST',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body: encode({
				'form-name': target.getAttribute('name'),
				...formData
			})
		})
			.then(() => {
				isSubmitted = true
			})
			.catch((error) => alert(error))
	}
</script>

<svelte:head>
	<title>{siteTitles.contact}</title>
	<meta
		data-key="description"
		name="description"
		content="Si llenas este formulario es muy posible que responda tu email."
	/>
	<meta property="og:image" content={metaImagesUrl.ogImage} />
	<meta name="twitter:image" content={metaImagesUrl.twitterImage} />
</svelte:head>

<Main>
	<div class="compressed-content">
		<h2>Estemos en contacto</h2>

		{#if !isSubmitted}
			<noscript>
				<h3>Sorry, this contact form won't work without JavaScript enabled.</h3>
				<p>
					I don't do any tracking or anything like that though (except some <a
						href="https://plausible.io">privacy-respecting analytics</a
					>), if that's your concern.
				</p>
			</noscript>

			<p class="big">
				¡Feliz de charlar contigo! Correo electrónico utilizado sólo para
				respuestas. No solicitudes, por favor.
			</p>

			<ul class="small">
				<strong>Si</strong>, puedes volver a publicar el contenido de este blog
				en otros idiomas con atribución. No es necesario preguntar primero.
			</ul>

			<form
				id="contact-form"
				name="contact"
				method="post"
				onsubmit={handleSubmit}
				action="/success/"
				data-netlify="true"
				data-netlify-honeypot="bot-field"
			>
				<input type="hidden" name="form-name" value="contact" />
				<p hidden>
					<label>
						Don’t fill this out: <input name="bot-field" />
					</label>
				</p>
				<input type="hidden" name="from_page" bind:value={formData.from_page} />
				<div class="sender-info">
					<div class="field">
						<label for="name" class="label">Tu nombre:</label>
						<input
							type="text"
							name="name"
							bind:value={formData.name}
							placeholder="¿Como te llamas?"
						/>
					</div>
					<div class="field">
						<label for="email"> Tu email: </label>
						<input
							type="email"
							name="email"
							bind:value={formData.email}
							placeholder="¿Donde puedo contactarte?"
						/>
					</div>
				</div>

				<div class="message-wrapper field">
					<label for="message">Mensaje:</label>
					<textarea
						name="message"
						bind:value={formData.message}
						rows="6"
						placeholder="¿De qué te gustaría hablar?"
					></textarea>
				</div>

				{#if showError}
					<div class="error">Asegúrate de llenar todos los campos. Thanks!</div>
				{/if}

				<button type="submit"> Envío </button>
			</form>
		{:else}
			<h3>Gracias por el mensaje!</h3>

			<p>Espero que tu correo haya llegado :)</p>
		{/if}
	</div>
</Main>

<style lang="scss">
	h2 {
		margin-bottom: var(--quarterNote);
	}

	.big {
		font-family: var(--headingFont);
		font-size: var(--quarterNote);
		text-wrap: balance;
	}

	.small {
		font-size: 0.8em;
		line-height: 1.4;
	}

	#contact-form {
		width: 100%;
		margin-top: 4rem;

		label {
			font-family: var(--headingFont);
			font-weight: bold;
			margin-bottom: var(--sixteenthNote);
		}

		.error {
			background-color: var(--red);
			color: var(--white);
			padding: calc(var(--quarterNote) * 0.5) var(--quarterNote);
			margin: var(--quarterNote) 0;
			font-style: italic;
		}
	}

	.field,
	button {
		margin-top: var(--halfNote);
	}
</style>
