---
layout: post
date_time: "2022/06/08"
description: "How websites, computers, and blogs work, explained using some psychedelics. (Part III)"
title: "Blogging with Acid. (Part III)"
show: false
isSpecial: true
tags: "static-site-generator rust programming acid cms psychedelics"
---

## DISCLAIMER!!

This post is part of a special series of posts, which is part of a uni project.

## Introduction

In this last and final episode of the three-part series about building and using a blog with *Acid*, I will be going into where I see *Acid* going forward, what my experiences were in the development process, and why I think *Acid* matters in the grand scheme of things. I know the last bit might be a bold statement but bear with me on this.

## What are the plans for Acid?

When I started writing *Acid*, my vision for the project was the following: It would exist alongside Cobalt, *Acid*'s rival also written in Rust, and Jekyll, written in Ruby. This would be similar to the relationship Django and Flask have. Both can build powerful web applications, however, each of them emphasize different aspects of the usage process. The same relationship exists between *Acid*, Jekyll, and Cobalt. Maybe some of you might be motivated to switch from one of the last two to *Acid*. My plans towards this goal are the following: The first step would be to post about *Acid* as much as possible so that folks might get interested in the project. Sites included on which I would post about *Acid*, would be: HackerNews, YCombinator, and Hashnode. In the worst case, nobody is interested and I'll have to contact influencers in the developer community manually to draw their attention to the project and maybe ask them if they'd like to post about their experiences with *Acid* to their community. In the worst case, I'd have to post about *Acid* in Rust's Discord channel and maybe get people on board that way, should nobody be interested in the project through the first method. In the best case, my plans would work and *Acid* would gain traction.

From a philosophical standpoint I would really like *Acid* to gain traction because I *do* think that it gets the job of building a blog website done quickly and makes it exponentially easier in comparison to Cobalt and Jekyll. One of *Acid*'s features that underline this point, is that themes do not have to be uploaded to any package registry, but can just be uploaded to a GitHub repository and barring any heavy errors in the theme, the theme should be usable by users of *Acid*. *Acid*'s first theme can be found [here](https://github.com/iamtheblackunicorn/acid-tripping).

## My experiences while developing Acid.

Keeping this approach to the project in mind, I started by finding a set file structure for an *Acid* site that would be easy for people to use. Then, I researched different parts that would need to be implemented and looked for libraries I could use for these different components. (A library is code someone else has written and has made available for reuse by others.) While this research was going on, I opened a ticket with the people who developed a library for handling Liquid templates in Rust. I found [@epage](https://github.com/epage) very kind and cooperative and you can read the full thread [here](https://github.com/cobalt-org/liquid-rust/issues/456). He also helped me with implementing the server function that serves a compiled *Acid* site. (Thank you, Ed!) Aside from this, I developed each component over time and tried to build each one of them as efficiently and elegantly as I could.

## Why Acid matters.

Finally, let me briefly explain why I think *Acid* matters: While Cobalt and Jekyll are supported by huge teams and are very popular open source projects, I built *Acid* by myself in maybe two weeks. Why? For the same reason that Linus Torvalds developed Git. Because he needed it and didn't really care about the commercial aspect of this. My motivations are similar, I developed *Acid* out of a fear that Jekyll would become obsolete.

I embrace and look towards people, who were not only developers but also creative and visionary minds, like Steve Wozniak and Steve Jobs. That is why I named the project as I did, a homage to that time of psychedelics, free, and creative thinking, when an industry was just being born and we didn't have schools teaching best practices and all that other crap that nobody follows or needs. So much for the philosophical aspects of the idea and process behind *Acid*.

## Final words.

All that being said, I hope these posts gave you a small insight into how a static-site generators with a focus on blogs are built. Maybe you even feel inspired to contribute to *Acid*. If you would like to contact me or you have some feedback, feel free to DM me on [Twitter](https://twitter.com/angeldustduke). If you'd like to support me and buy me a coffee, you can send me some Ethereum tokens to [this address](0x5d7551C484bCd8769c57B4921a3FC80193b74Ce3
) (You'll have to hover over the link and copy the ETH address.).

## Links

If you'd like to check out the *Acid* project, click [here](https://github.com/iamtheblackunicorn/acid) or if you'd like to check out the Jekyll project, click [here](https://jekyllrb.com/). If you'd like to see this blog's source as a Jekyll project, click [here](https://github.com/iamtheblackunicorn/angeldustduke). See you in the next one!
