---
title: 'Introducing Svelte, and Comparing Svelte with React and Vue'
date: '2021-10-1'
updated: '2022-01-18'
categories:
  - javascript
  - svelte
  - vue
  - react
  - web
coverImage: 'introducing_svelte.png'
coverWidth: 16
coverHeight: 9
excerpt: Svelte is a new style of framework for building sites and apps. Let's dive into what makes it different, why it's so enjoyable, and how it's able to ship such tiny, fast apps.
---

<script>
  import Callout from '$lib/components/Callout.svelte'
  import PullQuote from '$lib/components/PullQuote.svelte'
  import Highlight from '$lib/components/Highlight.svelte'
  import SideNote from '$lib/components/SideNote.svelte'
  import CounterButton from '$lib/components/demos/CounterButton.svelte'
  import ToggleButton from '$lib/components/demos/ToggleButton.svelte'
  import VolumeControl from '$lib/components/demos/VolumeControl.svelte'
  import CodeComparison from '$lib/components/demos/CodeComparison.svelte'
</script>

Let's be honest: lots of things in web development are harder than they should be. Some days, it can seem as though everything in the frontend world is needlessly over-engineered and convoluted.

That's what makes [Svelte](https://svelte.dev/) seem like such a breath of fresh air.

## What is Svelte?

At a basic level, you could think of Svelte as a frontend user interface (UI) framework akin to [React](https://reactjs.org), [Vue](https://vuejs.org), etc. Svelte is the newest of the big names in the space, however, and it definitely seems as though it's learned from the others, in terms of both developer experience and optimization.

As with any frontend framework, you use Svelte to build components, which are then the building blocks for your user interface (UI). As events happen and state and data change (for example: a user adding an item to the cart), the components automatically update to reflect those changes in the UI. (More on that in a bit.)

So how is Svelte _different_? Glad you asked…

### How is Svelte different?

Svelte was created by [Rich Harris](https://twitter.com/rich_harris), a developer and graphics editor for the [New York Times](https://www.nytimes.com/). (**Edit:** Harris has since been [hired by Vercel](https://vercel.com/blog/vercel-welcomes-rich-harris-creator-of-svelte) to work on Svelte full-time!)

The news world moves fast, so the interactive UIs and visualizations Harris was creating for the _Times_ needed to be built as quickly as possible. But since it's critical for the news to be accessible to _everyone_, those bits of interactivity _also_ had to be as small and performant as possible.

Harris needed a solution that was extremely quick and easy to build with, yet that would be fast and smooth for any reader on any device or network, no matter how limited. In many cases, the bloated JavaScript bundles that are the byproducts of many other frameworks disqualified them from consideration. So Harris set out to build his own solution, and that's how Svelte was born.

While relatively new and small compared to the other frameworks on the list, Svelte is uniquely battle-tested: the [New York Times Covid map](https://www.nytimes.com/interactive/2021/us/covid-cases.html) is a Svelte app. (Harris's former employer is far from the only large company utilizing the tech, however; IBM, Square, Philips, 1Password, and Spotify number among its growing list of adopters.)

---

The attention to developer experience (DX) is obvious in Svelte. I instantly loved how easy it made _everything_ I wanted to do--especially compared to React, as I cheekily tweeted at the time:

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">My elevator pitch for <a href="https://twitter.com/sveltejs">@sveltejs</a> :<br><br>Svelte is React without all the bullshit.</p>&mdash; Josh Collinsworth (@jjcollinsworth) <a href="https://twitter.com/jjcollinsworth/status/1155265498675929088">July 27, 2019</a></blockquote>

From the start, I was consistently and pleasantly surprised how _little_ code I needed to do things in Svelte--and how close it was to the JavaScript, HTML and CSS I already knew.

<PullQuote>
Just about everywhere I'd normally be reaching for a workaround or tripping over a gotcha when using another framework, Svelte was delightfully straightforward.
</PullQuote>

In fact, I found myself having to _unlearn_ many of the more convoluted solutions common in other frameworks (a common refrain from Svelte adopters).

<Callout>
Just about everywhere I'd normally be reaching for a workaround or tripping over a gotcha when using another framework, Svelte was delightfully straightforward.
</Callout>

But instead of me talking about it, let's get to some comparisons. (Since this isn't intended to be a code-along, we'll cover actually _installing_ Svelte at the end.)

<img src="/images/post_images/svelte-react-vue.png" alt="" class="section-heading-image" />

## Comparing Svelte to React and Vue

As mentioned, at a basic level, Svelte is similar to other frontend frameworks. So let's look a little closer at the details of how Svelte differs: its focus on build-time over run-time, and the simplicity of its syntax.

### Build over browser

I already mentioned how performant Svelte apps are. That's possible because Svelte takes a different approach from other frontend frameworks by doing as much as it can at the _build_ step--when the code is initially compiled--rather than running client-side.

<PullQuote>
If you want to get technical, Svelte isn't really a JavaScript framework at all, as much as it&nbsp;is&nbsp;a&nbsp;compiler.
</PullQuote>

<Callout>
If you want to get technical, Svelte isn't really a JavaScript framework at all, as much as it&nbsp;is&nbsp;a&nbsp;compiler.
</Callout>

To elaborate: React, Vue, and most other frameworks run _in_ the browser. You load them first, and then _use_ them by calling their methods to execute whatever code you write (not unlike jQuery and countless similar libraries). You can load React, Vue, etc. in a script tag, in a [CodePen](https://codepen.io), or otherwise drop them into whatever environment you want. Granted, there's probably a build tool involved to reduce the bundle size when you work with these frameworks in a production environment. But to some extent at least, you're inevitably shipping the framework itself to the browser, and loading it there.

**Svelte doesn't work like that**; you can't "load Svelte" in the browser, or play with it on CodePen (though the [Svelte REPL](https://svelte.dev/repl/hello-world) works well instead). Svelte isn't a script.

Instead, to create a Svelte app, you [install the Svelte repo](https://svelte.dev/blog/the-easiest-way-to-get-started) on your machine, and write Svelte code--which, technically speaking, is a small superset of HTML. The compiler does the rest:

<Callout>
All your Svelte code is compiled down to minimal, self-contained JavaScript before it ever gets to the browser.
</Callout>

It's not unlike how [Sass](https://sass-lang.com/) is compiled to plain CSS. That's why Svelte has been referred to as "a framework without the framework." (The [REPL](https://svelte.dev/repl/hello-world) offers a direct peek into the compiled JavaScript, if you're interested.)

This approach allows for extremely small bundle sizes, which in turn translates to better loading speed and performance. A smaller bundle can be shipped to the browser faster _and_ parsed by the browser more quickly.

<PullQuote>
All your Svelte code is compiled down to minimal, self-contained JavaScript before it ever gets to the&nbsp;browser.
</PullQuote>

React and Vue both use a "[virtual DOM](https://stackoverflow.com/questions/21965738/what-is-virtual-dom)," for rendering, which--while faster than crawling the DOM itself to make changes--still has its own performance implications. Thanks to the Svelte compiler, however, we don't have to worry about that; components are tied directly to their DOM nodes. You can read more about that in Rich Harris's [Virtual DOM is pure overhead](https://svelte.dev/blog/virtual-dom-is-pure-overhead).

<SideNote>

There's a little more nuance than this when discussing Svelte's performance relative to the field, but we'll get into that in the last section.

</SideNote>

### Authoring Svelte components

One of the things I like most about Svelte is its HTML-first philosophy. With few exceptions, Svelte code is entirely browser-readable HTML and JavaScript. In fact, technically, you could call Svelte a small superset of HTML.

But enough telling; let's show.

Just as you write `.jsx` component files in React and `.vue` files in Vue, Svelte has `.svelte` component files. A Svelte component might look like this (though you can order the pieces any way you like):

```svelte
<script>
	// Component logic goes here
</script>

<!-- HTML goes here -->
<style>
	/* CSS goes here (scoped by default!) */
</style>
```

Let's see a real example.

Maybe the most contrived way to demonstrate a frontend framework is a button component that counts how many times it's been clicked. It's the "hello world" of component examples:

<svelte:component this={CounterButton} />

It's not a particularly practical example, but it _is_ a common one because it's an effective way to demonstrate the bread and butter of frontend frameworks: make a small component to track your state (the count), and whenever something causes the state to change (the click), automatically update the UI (the button).

Click through the examples below to compare this component in different frameworks:

<CodeComparison dir="counter-button" includeBothVues={true} />

<SideNote>

I use arrow functions and omit semicolons in these examples, but that's just personal stylistic preference.

</SideNote>

There are some key differences I'd like to point out between the Svelte version and the others:

- **Svelte is reactive by default**. This means when a variable is reassigned, every place it's used or referenced also updates automatically. (_React and Vue both require you to explicitly initialize reactive variables_.)

  - React in particular does this because of an insistence on "immutability." Its philosophy dictates that you _shouldn't_ be able to change a variable's value without calling a function that's "authorized" to do so.

    In theory this prevents unwanted mutations (changes), but in practice, 99% of the time it's unnecessary boilerplate.

- **The Svelte version is the shortest**, both in terms of line count and character count. While this isn't necessarily meaningful on its own, shorter code _does_ tend to be less error-prone, as long as it's readable (which I would argue it definitely is).

- **Svelte isn't picky about HTML.** React needs a `return` with a single element, and Vue needs a single `<template>` tag wrapping all the markup. (Vue 2 _also_ requires a single element inside _that_.) Svelte can have whatever HTML, wherever--and with all its attributes intact, unlike in JSX, React's de facto templating language.

#### A more practical toggle button example

Showing the user how many times they've clicked on a button isn't particularly practical, so let's look at something _slightly_ more realistic; a button that toggles some hidden content:

<ToggleButton />

This example is at least _close_ to real-world functionality; it's hopefully not too hard to imagine how something similar to this would be useful in a production scenario.

I like this example because it introduces two key framework concepts:

1. **Conditional rendering** – `if` statements inside the markup; and
2. **Computed values** – dynamic variables that change depending on the situation (in this case, the button text).

Let's compare how Svelte, React, and Vue each handle these concepts:

<CodeComparison dir="toggle-button" includeBothVues={true} />

Svelte's way of handling computed values is that `$:` operator you see above; prepend any variable name with that, and it will be reevaluated every time anything it depends on changes. (In this case, `buttonText` is reevaluated each time `isTextShown` changes.)

React lets you do something similar, but Vue moves these to `computed` functions.

Other differences worth noting:

- Svelte and Vue 3 do not require you to "wrap" your markup in a single element. React and Vue 2 do. (I wouldn't be surprised if React figures out a way to do away with this requirement soon, however.)

- In React and Vue, you need to wrap conditional elements in HTML and/or stringify them. Svelte lets you put whatever otherwise valid markup you want inside of `#if` blocks, and doesn't require you to tie them to an element, either.

<SideNote>

The accessibility of this toggle button example is questionable, for the sake of brevity. I recommend Heydon Pickering's [Building Inclusive Toggle Buttons](https://inclusive-components.design/toggle-button) for more info.

</SideNote>

#### Comparing form bindings

Here's one last quick _and_ practical example, to compare form bindings between frameworks: a volume slider. Try it out:

<VolumeControl />

<CodeComparison dir="volume-control" includeBothVues={true} />

Notice especially how React's data flow is one-way; it needs you to explicitly update the `volume` variable any time its corresponding input changes. In other words: you need to make the input both _read_ the volume setting _and update_ the volume setting, as two different steps.

By contrast, both Svelte and Vue offer two-way data binding; you just tell the framework that whenever either the input _or_ the value changes, the other should update to reflect that.

It should also be noted that you can add two-way data binding to component props in Svelte as well:

```svelte
<ChildComponent bind:someProp={someValue} />
```

This would allow the `ChildComponent` to pass changes to the parent component and vice versa. React is firmly against this idea because, again, it highly values immutability and one-way data flow. In practice, I personally find that dogma more inhibiting than helpful.

#### Comparing logic

Though we've seen it already, I think it's worth glancing once more at how each of the three frameworks handles conditional rendering. Here's how you'd show a `<Hello />` component conditionally:

<CodeComparison dir="conditionals" />

<SideNote>

I'm not distinguishing between Vue 2 and 3 in these examples because their templating syntax is identical.

</SideNote>

You can of course do `else` as well (and `else if` for that matter, though I won't demo that just because writing the React expression would be a little bit of a nightmare).

Here's an example where we show a `<WelcomeBanner />` component if the user is logged in, and a login form component otherwise:

<CodeComparison dir="complex-conditionals" />

#### Loops

I appreciate how Svelte allows loops inside of markup, without requiring you to tie the loop to any elements or map over an array (and in most cases, without requiring you to `key` each item, either).

Here, assume we have an array called `posts`, full of objects containing post info:

<CodeComparison dir="loops" />

It's also nice that you can put any markup you like inside Svelte's `each` block; it doesn't need to be a single element.

