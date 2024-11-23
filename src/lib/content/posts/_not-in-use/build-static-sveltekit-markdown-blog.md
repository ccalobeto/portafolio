---
title: "Let's learn SvelteKit by building a static Markdown blog from scratch"
date: '2021-12-27'
updated: '2023-02-17'
categories:
  - 'svelte'
  - 'javascript'
  - 'web'
  - 'popular'
coverImage: 'sveltekit-learn.png'
coverWidth: 16
coverHeight: 9
excerpt: Learn the fundamentals of SvelteKit by building a statically generated blog from scratch, with Markdown support, Sass, an API, and an RSS feed.
---

<script>
	import Note from '$lib/components/Note.svelte'
  import Callout from '$lib/components/Callout.svelte'
  import SideNote from '$lib/components/SideNote.svelte'
  import PullQuote from '$lib/components/PullQuote.svelte'
  import CalloutPlusQuote from '$lib/components/CalloutPlusQuote.svelte'
</script>

<Note>
I've done my best to keep this post up-to-date through all of SvelteKit's breaking changes. It should be fully updated for SvelteKit 1.0, but if you spot any issues, please let me know in the comments or send me a message. Thanks for reading!
</Note>

If you've ever recommended a favorite book, movie, or TV show to a friend who didn't enjoy it at all, you know exactly how I felt when I saw this message from a colleague:

> man I just tried to hello world SvelteKit and it is NOT for me

I love [Svelte](https://svelte.dev), and I've talked plenty about how much I've enjoyed [rewriting this site](/blog/converting-from-gridsome-to-sveltekit) using [SvelteKit](https://kit.svelte.dev). So my first reaction, of course, was disappointment. What went wrong?

But as I considered their reaction, I realized: it was valid.

<CalloutPlusQuote>
Amazing though it is, SvelteKit isn't the simplest thing you could use as a static site&nbsp;generator.
</CalloutPlusQuote>

Other tools like [Astro](https://astro.build/), [Eleventy](https://www.11ty.dev/), or [Gatsby](https://www.gatsbyjs.com/) will likely get you up and running faster, since that's their sole focus. (_At one point, at least, even the SvelteKit docs admitted its focus was not making the fastest static site generator._)

However, I still feel SvelteKit is worthy of serious consideration in that regard. Its capabilities are much more broad and flexible than traditional SSGs, and there's plenty unique to love about both its developer and user experiences. So this post will be aimed at smoothing out that initial learning curve, to help you understand and take advantage of SvelteKit's wide range of possibilities.

## What we'll cover, and what to know first

**This is a walkthrough of using SvelteKit to set up a prerendered static blog with Markdown, Sass and an API.** (_That's how this site is built, by the way._)

This is _also_ an intro to SvelteKit itself, with a good overview of SvelteKit fundamentals that should be transferable to _any_ project.

Finally, this is _fun_!\*

_\*My opinion; citation needed_

### You'll get the most out of this if you:

- Know the fundamentals of front-end development and JavaScript;
- Have at least a basic understanding of Svelte already. (You can probably follow along regardless, but I'd recommend the [Svelte tutorial](https://svelte.dev/tutorial/basics) first if you're brand-new);
- Know the basics of both [Markdown](https://www.markdowntutorial.com/) and [Sass](https://sass-lang.com/);
- Understand the basics of fetching JSON from an API; and
- Know how to install packages with [npm](https://www.npmjs.com/), and have npm installed already.

Finally, if you don't _really_ want to go through the whole tutorial and would rather just have a nice blog starter all ready to go, check out my [SvelteKit blog starter here](https://github.com/josh-collinsworth/sveltekit-blog-starter). (It's much more fleshed-out than what we'll build here, but the underlying concepts are the same.)

**Let's get started!**

## Creating a new SvelteKit app

To generate a new SvelteKit project, run this in your terminal (naturally, you can change `my-app` to whatever other title you prefer):

```bash
npm create svelte@latest my-app
```

When you run that `init` command, SvelteKit will ask you some questions about your project and how you want it set up:

![SvelteKit's setup prompt for which type of project you want to create; boilerplate, or demo](/images/post_images/sveltekit-init.png)

We'll select the "Skeleton project" option. (_Note: **not** "Library skeleton project;" we're just building a site, not a library._)

<SideNote>

If this is your very first time using SvelteKit, feel free to choose "SvelteKit demo app," poke around a bit to get a sense of how things work, then come back. It's a good intro, but it comes with several files and styles that would be a lot to undo as a starter.

</SideNote>

The setup tool will also ask for your preferences on TypeScript, ESlint, and Prettier. For simplicity's sake, I won't use TypeScript, but you're welcome to if you like. (Svelte works quite well with it.)

Once you've made your choices, after a moment of installation, you should see `Your project is ready!` appear in your terminal, along with next steps and helpful links:

!['Your project is ready!' message appears in the terminal, along with confirmation of the options we've chosen and helpful links to get started.](/images/post_images/sveltekit-installation-confirmation.png)

At this point, let's open up the project in [VS Code](https://code.visualstudio.com/) (or your text editor of choice). Then in the terminal, install the dependencies, and then run the dev server:

```bash
npm install
npm run dev -- --open
```

Complete those commands, and our new site will be running in a browser window!

![The default welcome page for a new SvelteKit project](/images/post_images/welcome-to-sveltekit.png)

The skeleton project is definitely unexciting. There isn't even any CSS yet. But that's ok; it gives us the freedom to style our app however we like, without the need to remove or work around any existing code.

This is our blank canvas, and we'll get some paint on it soon enough.

## Routing in SvelteKit

Like many frameworks (and for that matter, PHP), SvelteKit has a directory-based approach to routing and pages; the structure of `src/routes/` will mirror the structure of your website.

<CalloutPlusQuote>
Any folder inside <code>src/routes</code> becomes the name of a page. A <code>+page.svelte</code> file inside that folder defines the page's HTML content.
</CalloutPlusQuote>

So, from inside `src/routes`:

- `+page.svelte` is the homepage (`/`)
- `about/+page.svelte` would become the `/about` page
- `blog/+page.svelte` would be be the `/blog` page
- `blog/some-post/+page.svelte` becomes `/blog/some-post`

<SideNote>

<p>The convention of <code>+page.svelte</code> might seem a bit confusing or unnecessary—especially if you're used to the old <code>index.svelte</code> convention—but as we'll see soon, the special <code>+</code> prefix helps distinguish between components and pages.<br><br>There are also <em>other</em> things we can add to routes besides just pages, like dynamic server paths; more on that later.</p>

</SideNote>

### Adding pages

For starters, just to get some pages on our site, let's create `about`, `contact`, and `blog` folders inside of `src/routes`. (We can always delete or modify them later.)

Within each of those folders, we'll add a `+page.svelte` file, to serve as the route's contents; the stuff people actually see when they navigate to that route on your site.

Within each of those files, let's toss a quick heading, and maybe some text, just so we can see a little content.

<SideNote>

Svelte files can just contain plain HTML.

</SideNote>

```svelte
<!-- about/+page.svelte -->
<h1>Hi, I'm Josh!</h1>

<p>This is my about page.</p>
```

```svelte
<!-- contact/+page.svelte -->
<h1>Get in touch</h1>

<p><a href="mailto:me@my.tld">Email me!</a></p>
```

```svelte
<!-- blog/+page.svelte -->
<h1>Blog</h1>

<p>My blog posts will go here eventually…</p>
```

Our `src/routes` folder should now look like this:

```fs
📂 src
┗ 📂 routes
  ┣ 📜 +page.svelte
  ┣ 📂 blog
  ┃ ┗ 📜 +page.svelte
  ┣ 📂 about
  ┃ ┗ 📜 +page.svelte
  ┗ 📂 contact
    ┗ 📜 +page.svelte
```

At this point, you could visit `/contact`, `/about`, and/or `/blog` to see the pages we just created. There's not much there yet, of course, but it's nice to at least see that routing is taken care of for us automatically, just by creating folders inside `routes` and adding a `+page.svelte` file inside them.

### Adding a layout

Most sites and apps have some elements that are reused on every page (a `<header>` and `<footer>` being the most common and obvious examples). Since adding those to every page would be tedious and error-prone, SvelteKit (like many other frameworks) conveniently lets us define [layouts](https://kit.svelte.dev/docs/routing#layout).

Inside of `src/routes`, make a new file named `+layout.svelte`.

```fs
📂 src
┗ 📂 routes
  ┗ 📜 +layout.svelte
```

**This file has a special role**: SvelteKit automatically checks `routes` (and all its subdirectories) for a `+layout.svelte` file. That layout will "wrap" all the content loaded from that route and its sub-routes.

<CalloutPlusQuote>
A layout becomes a parent component, and the current page will be slotted in as its child component.
</CalloutPlusQuote>

So a layout at the top level of the `routes` folder will apply globally, on every page.

It's easier to show than tell, so open up our new `+layout.svelte` file, and let's add a placeholder header and footer:

```svelte
<!-- +layout.svelte -->
<header>Hi, I'm a header</header>

<main>
	<slot />
</main>

<footer>Hello, I'm the footer.</footer>
```

Save that, and you should now see that header text above the page's contents, and the footer text below.

![The header text appears above the contents of the index.svelte file, and the footer text below.](/images/post_images/sveltekit-layout-shown.png)


