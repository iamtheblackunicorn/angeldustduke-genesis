---
layout: post
date_time: "2022/06/06"
description: "Blogging in Rust and why you should care. (Part III)"
title: "Blogging with Acid Part III"
show: true
isSpecial: true
tags: "static-site-generator rust programming"
---

## DISCLAIMER!!

This post is part of a special series of posts and is for a uni project. This post is experimental.

## Introduction

In this last and final episode of the three-part series about building and using a blog with Acid, I will be going into where I see Acid going forward, what my experiences were, and why I think Acid matters in the grand scheme of things. I know the last bit might be a bold statement but bear with me on this.

## What are the plans for Acid?

When I started writing Acid, my vision for the project was the following: It would exist alongside Cobalt, Acid's rival also written in Rust, just like Django exists alongside Flask in Python and maybe motivate users of Jekyll to switch over to Acid. My plans towards this goal are the following: The first step would be to post about Acid as much as possible so that folks might get interested in the project. Sites included on which I would post about Acid would be: HackerNews, YCombinator, and Hashnode. In the worst case, nobody is interested and I'll have to contact influencers in the developer community to draw their attention and maybe ask them if they'd like to post about their experience to their community. In the worst case, I'd have to post about Acid in Rust's Discord channel and maybe get people on board that way, should nobody be interested in the project. In the best case, my plans would work and Acid would gain traction.

From a philosophical standpoint I would really like Acid to gain traction because I *do* think that it gets the job of building a blog website done quickly and makes it exponentially easier. A feature that underlines this ease-of-use is that themes do not have to uploaded to any package registry but can just be uploaded to a GitHub repository and barring any heavy errors in the theme, the theme should be usable by users of Acid.

## My experiences while developing Acid.

Keeping this approach to the project in mind, I started by finding a set file structure for an Acid site that would be asy for people to use and then I researched different parts that would need to be implemented and looked for libraries I could use. (A library is code someone else has written and has made available for reuse by others.) While this research was going on, I opened a ticket with the people wo developed a library for handling Liquid templates in Rust. I found [@epage](https://github.com/epage) very kind and cooperative concerning and Acid and you can read the full thread [here](https://github.com/cobalt-org/liquid-rust/issues/456). He also helped me with implementing the server function that serves a compiled Acid site. Thank you, Ed! Aside from this, I developed each component over time and tried to build each one of them as efficiently and elegantly as I could. The true bane of my experience in the development was writing the documentation for Acid. But hey, nobody likes writing documentation. I guess that's just one of the occupational hazards we have to deal with as solo developers.

## Why Acid matters.

Finally, let me briefly explain why I think Acid matters and should for other people trying to build a blog website with very little experience in the field of software development. While Cobalt and Jekyll are supported by huge teams and are very popular open source projects, I built Acid by myself in maybe two weeks. Why? For the same reason that Linus Torvalds developed Git. Because he needed it and didn't really care about the commercial aspect of this. My motivations are similar, I developed Acid out of a fear that Jekyll would go obsolete. I embrace and look towards people who were not only developers but also creative and visionary minds, like Steve Wozniak and Steve Jobs. That is why I named the project as I did, a hommage to that time of psychedelics, free, and creative thinking, when an industry was just being born and we didn't have schools teaching best practices and all that other crap that nobody follows or needs unless you are a cliché of a developer. (A boring asshole with zero personality.)

## Final words.

All that being said, I hope these posts gave you a small insight into how a ststic-site with a focus on blogs is built and give me feedback and maybe even feel inspired to contribute to Acid. If you would like to buy me coffee, you can send me Ethereum tokens or Cardano token to [this address].
