<script lang="ts">
	import type { LayoutData } from './$types'
	import '$lib/assets/styles/global.scss'

	import throttle from 'just-throttle'
	import Header from '$lib/components/header/Header.svelte'
	import Footer from '$lib/components/Footer.svelte'
	import PageTransition from '$lib/components/transitions/PageTransition.svelte'
	import PageHeading from '$lib/components/PageHeading.svelte'
	import Loader from '$lib/components/Loader.svelte'
	import { prefersReducedData } from '$lib/assets/js/utils'
	import {
		isLoading,
		prefersReducedMotion,
		isScrollingDown,
		isMenuOpen
	} from '$lib/data/store'
	import { onMount } from 'svelte'
	import { afterNavigate, beforeNavigate, preloadCode } from '$app/navigation'
	import { dev } from '$app/environment'

	interface Props {
		data: LayoutData
		children?: import('svelte').Snippet
	}

	let { data, children }: Props = $props()

	let path: string = $state('')
	$effect(() => {
		;({ path } = data)
	})

	let root: HTMLElement

	let lastScrollPosition: number = 0
	const isSinglePostCheck: RegExp = new RegExp(/\/blog\/[A-z0-9\-_]+\/?$/)

	let isSinglePost: boolean = $derived(isSinglePostCheck.test(path))

	const handleScroll = throttle(() => {
		// Early return if we're above mobile width
		if (window.outerWidth >= 768) {
			if ($isScrollingDown) $isScrollingDown = false
			return
		}

		const currentScrollPosition = window.scrollY
		const delta = lastScrollPosition - currentScrollPosition
		if (delta > 0 && delta < 10) {
			return
		}

		if (lastScrollPosition > currentScrollPosition) {
			$isScrollingDown = false
		} else if (currentScrollPosition > 240) {
			$isScrollingDown = true
		}
		lastScrollPosition = currentScrollPosition
	}, 100)

	beforeNavigate(({ to }) => {
		$isMenuOpen = false
		if (to?.route?.id) {
			$isLoading = true
			root.classList.remove('smooth-scroll')
		}
	})

	afterNavigate(() => {
		$isLoading = false
		root.classList.add('smooth-scroll')
	})

	onMount(() => {
		root = document.documentElement
		root.classList.add('smooth-scroll')
		if (!prefersReducedData()) {
			const routesToPreload = ['/', '/blog', '/projects', '/about-me']
			routesToPreload.forEach((route) => preloadCode(route))
		}
	})
</script>

<svelte:window onscroll={handleScroll} />

<svelte:head>
	<meta property="og:site_name" content="Carlos León" />
	<meta property="og:locale" content="en_US" />
	<meta name="twitter:card" content="summary_large_image" />
	{#if !dev}
		<script
			defer
			data-domain="carlosleon.dev"
			src="https://plausible.io/js/plausible.js"
		></script>
	{/if}
</svelte:head>

<div id="app" class:reduce-motion={$prefersReducedMotion}>
	<Loader loading={$isLoading} />

	<Header {path} />

	<div class="layout">
		<PageHeading title={path} {isSinglePost} />

		<PageTransition refresh={path}>
			{@render children?.()}
		</PageTransition>
	</div>

	<Footer />
</div>
