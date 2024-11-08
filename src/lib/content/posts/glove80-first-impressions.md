---
title: First impressions of the MoErgo Glove80 ergonomic keyboard
date: 2023-10-24
updated: 2024-04-08
categories:
  - gear
  - opinion
coverImage: glove80/mine.webp
coverWidth: 1920
coverHeight: 1080
excerpt: 'How does the Glove80 stack up against similar keyboards like the Moonlander and Ergodox? I share my impressions after the first few weeks of use.'
---

<script>
  import PullQuote from '$lib/components/PullQuote.svelte'
  import SideNote from '$lib/components/SideNote.svelte'
  import Note from '$lib/components/Note.svelte'
  import CalloutPlusQuote from '$lib/components/CalloutPlusQuote.svelte'
</script>

<style lang="scss">
	.toc-details {
		border: 1px solid var(--lightGray);
		padding: 1rem;
		margin-bottom: var(--halfNote);
		font-family: var(--headingFont);
		::marker {
			color: var(--yellow);
		}
		summary + ul {
			margin-block-start: var(--quarterNote);
		}
		ul {
			margin-block: var(--eighthNote);
			padding-inline-start: var(--dottedQuarterNote);
		}
	}
</style>

<details class="toc-details">
	<summary>Table of contents</summary>

    - [Backstory: my history with keyboards, ergonomics, and RSI](#backstory-my-history-with-keyboards-ergonomics-and-rsi)
    - [Why the Glove80?](#why-the-glove80)

</details>

<Note>

I wrote [a follow-up to this post here](/blog/glove80-followup), after using the Glove80 for six months.

</Note>

I never had any real interest at all in mechanical keyboards until recently. I mostly considered them a novelty; the kind of thing that was fine as a hobby, but not anything particularly practical.

Over the last year or so, however, I've been going deeper and deeper down the rabbit hole of mechanical keyboards, and I've discovered a much richer, more fulfilling world than I ever suspected. There's just something about nerding out over the finest details of the machine you touch and use every day that can be extremely gratifying.

<PullQuote>

My gateway into mechanical keyboards was purely driven by the search for better ergonomics.

</PullQuote>

It was silly that I never looked any closer at things like keycaps and switches, I now realize. After all, a person who spends all day on their feet will likely care deeply about their shoes; why shouldn't someone who logs thousands of keypresses a day be invested in how their fingers feel?

However, unlike most mechanical keyboard enthusiasts, I wasn't initially drawn to the hobby by any interest in the feel, sound, look, or performance.

Instead, my gateway into mechanical keyboards was purely driven by the search for better ergonomics.

## Backstory: my history with keyboards, ergonomics, and RSI

For most of my life, whatever keyboard was attached to or supplied with the computer I was using was just fine with me. I rarely gave any thought to the device resting beneath my fingertips.

Then came 2020, and the pandemic. The home became the workplace. Between the constant demands of remote work and desperate attempts at escapism, my laptop was pretty much always…well, on top of my lap. (And even when it wasn't, it was probably on a surface that was in no way designed to be a comfortable workstation.)

Over these weeks and months, I developed a repetitive stress injury (RSI), and though I didn't know it then, it would be my first of many. My right wrist, constantly pinched, was in ever-present and worsening pain, which was at times so bad I couldn't even tighten my grip or carry heavy things.

It became clear I couldn't keep going without making changes.

<figure>

![Demonstration of how the forearms tend to point inward, with the wrists sharply bent outward, while using a standard keyboard](/images/post_images/glove80/ulnar-deviation-problem.jpg)

<figcaption>Image from <a href="https://kinesis-ergo.com/solutions/keyboard-risk-factors/">kinesis-ergo.com</a></figcaption>

</figure>

<CalloutPlusQuote>

Over the first year of working from home, I ended up spending around $2,000 overhauling my home workstation to alleviate the pain and prevent new injuries.

</CalloutPlusQuote>

(_What a great system, that makes working most expensive for the people for whom it's the most painful._.)

I got a better chair, a standing desk, a wrist brace, and—finally—my first split keyboard: the [Kinesis Freestyle2 for Mac](https://kinesis-ergo.com/shop/freestyle2-mac/).

<figure>
<img src="/images/post_images/glove80/freestyle2.jpeg" alt="" style="border: 1px solid"/>
<figcaption>The Kinesis Freestyle2 for Mac (my first ergonomic split keyboard)</figcaption>
</figure>

That keyboard served me well for nearly two years; it got my hands further apart, and allowed my wrists to sit at a more natural angle. But it eventually led to another, different injury: my left thumb was constantly bending at uncomfortable angles to press the command key to initiate shortcuts.

That's when I started looking at keyboards with thumb keys, and ended up with a [ZSA Moonlander](https://www.zsa.io/moonlander/). [I wrote about that story here](https://joshcollinsworth.com/blog/moonlander).

At first, I hated the Moonlander. The ortholinear (columnar grid) layout took a lot of getting used to, but it paid off and felt amazing once I got it down. To learn was to love. I even went so far as to invest in a new set of switches and keycaps for the Moonlander, which made me love it even more.

<figure>
<img src="/images/post_images/glove80/Moonlander.jpg" alt="" style="border: 1px solid"/>
<figcaption>The ZSA Moonlander (with custom keycaps)</figcaption>
</figure>

Over time, however, a new RSI flared up, even with the Moonlander.

<CalloutPlusQuote>

As I write this, I'm still recovering from this latest injury. Some of it, I attribute to the Moonlander specifically; some is likely my own fault. Some probably isn't even work-related.

</CalloutPlusQuote>

I don't think _all_ my issues stemmed from working on a computer; I notice minor pain sometimes even from playing my Switch in handheld mode for extended periods, or from keeping my arm locked in place when driving long distances.

Still: I was adjusting the Moonlander a dozen times a day trying to figure out the problem. Turns out: it doesn't really allow your hands to just _rest_ when they're not typing. (Or at least, it didn't how I was using it, and certainly not without bending your wrists upward.) So over time, my left arm muscles fatigued from constant activation. I had to train myself to move my arm off the keyboard when not in use, since, again, there wasn't any really comfortable way to just rest my hand (especially at higher tenting angles).

I'm not here to tell you the Moonlander is bad, or that it won't work for you. However, I will [say again](https://joshcollinsworth.com/blog/moonlander): I think it's a keyboard that wants to be cool first, and ergonomic second.

I initially thought the similar [Ergodox EZ](https://ergodox-ez.com/) might solve my problems, with its thicker palm rests. However, the keyboard itself is so tall, it really wasn't any different. And sadly, like the Moonlander, the Ergodox was a letdown in the range of customizations it offered.

Again, I should emphasize that despite valid criticisms of the Moonlander, some of my issues with it were of my own creation, and some probably weren't even entirely work-related.

<CalloutPlusQuote>

Ergonomics are highly personal, and everything you do in your day contributes. What works for one person might not work for another.

</CalloutPlusQuote>

Still, even making all the adjustments I knew how to make--despite how much I loved the feel of it--I felt like there might be a better option for me than the Moonlander at this stage of my life and career. So again, beset by arm pain (this time in both wrists, as well as my left elbow), I set out to find a solution.

That's when I started thinking maybe the [Glove80](https://www.moergo.com/collections/glove80-keyboards) could be the fit I was looking for.

## Why the Glove80?

Ergonomic keyboards cover an incredibly wide spectrum. On one end, they're little more than standard keyboards with a few curves, a gap in the middle, and/or a palm rest added. (Microsoft's [Sculpt Ergonomic Desktop](https://www.microsoft.com/en/accessories/products/keyboards/sculpt-ergonomic-desktop?activetab=pivot:overviewtab) and Logitech's [K350](https://www.logitech.com/en-us/products/keyboards/k350-wave-ergonomic.920-001996.html) and [Ergo K860](https://www.logitech.com/en-us/products/keyboards/k860-split-ergonomic.920-009166.html) fit this bill.)

On the other end of the spectrum are devices that barely even resemble traditional keyboards. They're often split (i.e., in two pieces, instead of one, allowing the wrists and forearms to sit straight in front of the shoulders instead of pointing awkwardly inwards together), and they frequently have a highly unconventional shape and layout.

Not all ergonomic keyboards are mechanical (or split, for that matter), but many are; ergonomic keyboards are often a sub-niche of the mechanical keyboard niche.

<figure>

<img src="/images/post_images/glove80/rtings.jpg" alt="" />

<figcaption>A wide range of ergonomic, split, and/or mechanical keyboards. Image from <a href="https://www.rtings.com/keyboard/reviews/best/ergonomic">rtings.com</a>.</figcaption>

</figure>

Even within the nested rabbit hole of ergonomic mechanical keyboards, however, neither the [Glove80](https://www.moergo.com/collections/glove80-keyboards) nor its maker, a New Zealand company called [MoErgo](https://www.moergo.com/), are likely to be among the main names you've heard of. Generally, it seems like [Kinesis](https://kinesis-ergo.com/) and [ZSA](https://www.zsa.io/) have the largest mindshare in the space (though there are others, like [Cloud Nine](https://cloudnineergo.com/), [Dygma](https://dygma.com/) and UGL, maker of the [UHK](https://ultimatehackingkeyboard.com/)).

Nearly as I can tell, the MoErgo Glove80 is a dark horse—or at least, it was until recently. Just finding reviews for it was challenging. The designer in me can't help but wonder how much of that may be due to MoErgo's website design; their store has a pretty dated, somewhat amateurish look and feel. It's definitely not a storefront that inspires confidence in the product, as far as aesthetics go.

<CalloutPlusQuote>

So: why did I buy a relatively unknown keyboard from a comparatively small manufacturer with a highly questionable website?

Because I could tell they cared—maybe more than anyone—about actual ergonomics.

</CalloutPlusQuote>

MoErgo clearly takes the Glove80 very seriously. Join the Discord, and you'll find the founders fastidiously posting updates, and actively responding to questions and issues.

More impressive than that, though: MoErgo goes to great lengths to explain how and why they landed on the Glove80's design, and that commitment shows. This doesn't feel like a cool keyboard with "ergonomics" slapped on as an afterthought selling point, just because it can tent a little. [_Side-eyes ZSA_]

<CalloutPlusQuote>

The Glove80 genuinely feels as though every decision was in service to ergonomics first and foremost, and everything else was secondary.

</CalloutPlusQuote>

MoErgo designates a pretty hefty portion of its website and printed materials to telling [the story of the Glove80's design](https://www.moergo.com/pages/glove80-ergonomic-keyboard-design-journey-1). It's undeniably impressive; over 500 experiments and prototypes are laid out in detail. The journey of assumptions being made, challenged, rethought and re-challenged is a testament to the designers' dedication to arriving at the best possible ergonomic solution.

---

With all that preamble out of the way, let's get to the main course.

As I'm writing this, I'm almost a month into using the Glove80 as my full-time daily driver. I'll wrap things up with a tidy list of pros and cons, but in the meantime, a lot of my observations really aren't either (or, are both at the same time), and so I think I'll take more of a scattershot approach to this post.

<figure>
	<img src="/images/post_images/glove80/glove80-sideways.jpg" alt="" />
	<figcaption>The Glove80 with default layout. Image from MoErgo</figcaption>
</figure>


