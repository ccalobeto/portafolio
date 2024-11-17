<script lang="ts">
	import NavLink from './NavLink.svelte'
	import { isMenuOpen } from '$lib/data/store'
	import { navItems } from '$lib/config'

	interface Props {
		path: string
	}

	let { path }: Props = $props()
</script>

<ul class:open={$isMenuOpen}>
	<!-- TODO: this is a lot of prop drilling and style encapsulation. Is there a better way? -->
	<NavLink
		to={navItems.home.route}
		text={navItems.home.title}
		{path}
		mobileOnly={true}
	/>
	<NavLink to={navItems.blog.route} text={navItems.blog.title} {path} />
	<NavLink to={navItems.projects.route} text={navItems.projects.title} {path} />
	<NavLink to={navItems.about.route} text={navItems.about.title} {path} />
	<NavLink to={navItems.contact.route} text={navItems.contact.title} {path} />
	<NavLink to={navItems.uses.route} text={navItems.uses.title} {path} />
</ul>

<style lang="scss">
	ul {
		display: flex;
		flex-wrap: wrap;
		margin: 0;
		width: auto;
		font-size: 0.875rem;
		list-style-type: none;
		padding: 0;

		@media (max-width: vars.$sm) {
			list-style-type: none;
			text-align: left;
			width: 100%;
			display: none;
			margin: 0;

			&.open {
				display: block;
			}
		}
	}
</style>
