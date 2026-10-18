import { writable } from 'svelte/store'

// Single owner of "is the mobile nav menu open". Previously every nav component
// imported and read/wrote the raw isMenuOpen store directly from $lib/data/store —
// this is the one place that does now. Exposes open/close/toggle instead of the raw
// writable so callers can't set arbitrary values.
function createMenuState() {
	const isOpen = writable(false)

	return {
		subscribe: isOpen.subscribe,
		open: () => isOpen.set(true),
		close: () => isOpen.set(false),
		toggle: () => isOpen.update((open) => !open)
	}
}

export const menu = createMenuState()

// Centralizes "is this nav item the active one" so it's not re-implemented inline at
// NavLink. Still an exact match today — flat top-level routes only, no nested nav
// targets exist yet — but any future route-shape awareness (nested routes,
// breadcrumbs) now has exactly one place to go instead of a leaf-level comparison.
export function isActive(path: string, to: string): boolean {
	return path === to
}
