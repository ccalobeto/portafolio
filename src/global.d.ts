/// <reference types="@sveltejs/kit" />
declare module '*.md'

export class currentPost extends SvelteComponent<{
	propertyName: string
}> {}
