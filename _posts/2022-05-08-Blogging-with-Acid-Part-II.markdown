---
layout: post
date_time: "2022/05/08"
description: "How websites, computers, and blogs work, explained using some psychedelics. (Part II)"
title: "Blogging with Acid. (Part II)"
show: true
isSpecial: true
tags: "static-site-generator rust programming acid cms psychedelics"
---

## DISCLAIMER!!

This post is part of a special series of posts, which is part of a uni project.

## Introduction

In the last post I introduced and explained the following topics: I explained how the web works, how blogs work, how blog generators work, what templates are, what Markdown is, how software is built, the Ruby programming language, the Rust programming language, Jekyll, and *Acid*. In this second part of this three-part series, I will be going into the components that make up *Acid* at the time of writing [(Version 1.1.1)](https://crates.io/crates/acid-rs/1.1.1).

## Managing content

As stated in the first part, *Acid* uses a simplified form of HTML, namely Markdown, to store user-generated content. Markdown was invented some years ago to make the generation of HTML code from simple text files significantly easier. Markdown is basically just that, it is text, text with special signs like the *"#"* symbol marking headlines or dashes marking unordered lists. For further customization something called *"frontmatter"* is used to make certain settings for a Markdown-based page. This so-called *"frontmatter"* consists of a bunch of words that are assigned to other words by a colon. The whole *"frontmatter"* section is enclosed by three dashes above and below. Finding all Markdown files and retrieving their data is one of *Acid*'s first steps. The Markdown files in an *Acid* site hold the blog's content that you, the user, write. (UGC)

## Managing layouts

Writing content is good and nice but if one doesn't set how the content is supposed to be rendered on the final blog website, the content can be as stellar as it likes. How the blog website looks in the end is dictated by so-called *"Liquid"* templates. These templates are files with HTML code inside them but also *"Liquid"* statements. These statements are place-holders for certain pieces of content. When you make a new piece of content, you specify what sort of layout you would like to use for that content. The layout is specified in the *"frontmatter"* of your Markdown content. These layouts can be in their own directory in an *Acid* site or you could specify in your site configuration file that you would like to use layouts that someone else has written. These layouts by someone else are called "third-party themes" in the *Acid* terminology.

Great! Now you know how the content is retrieved and how the content is inserted into templates that give your blog website a certain look. What else is there?

## JSON and AML

The last and final thing that is part of every *Acid* site is a so-called configuration file. This file holds some general information about your website. This file is written in [*Angel Markup*](https://github.com/iamtheblackunicorn/angelmarkup) in the current version of *Acid*. [*Angel Markup*](https://github.com/iamtheblackunicorn/angelmarkup) dramatically simplifies data storage in text format. *JSON* was used in the previous versions of *Acid* but is restrictive in many ways. Because of this, I wanted a simpler format that gives you, the user, more freedom. So, I created a small Rust program that converts and "understands" this format and because I am the *Angeldust Duke* I called this format [*Angel Markup*](https://github.com/iamtheblackunicorn/angelmarkup). Here's a small comparison. If we wanted to store information about a person, here's one snippet in *JSON* and the same on in [*Angel Markup*](https://github.com/iamtheblackunicorn/angelmarkup).

```JSON
{
  "name":"Angeldust Duke",
  "age":"22",
  "job":"Professional Badass"
}
```

Now here's the same info written in *Angel Markup*:

```text
% JSON does not allow comments.
% Angel Markup does.
'name' => 'Angeldust Duke'
'age' => '22'
'job' => 'Professional Badass'
```

Support for [*Angel Markup*](https://github.com/iamtheblackunicorn/angelmarkup) was added in *Acid* version 1.1.0. More extensive support will be coming in version 1.2.0.

Brilliant! Now that you roughly know how everything hangs together, let's learn about how *Acid* builds a blog website with all this info and from *YOUR* content.

## Building the blog

After *Acid* has gathered all the information from the previous sections, it does some checks and sees if all the required files for an *Acid* site are present. At this point it invokes its own little machine to generate a folder with your blog website inside of that folder. That is your finished and built blog! Now you have two options: You can either publish your blog for the world to see by uploading the files to some server (Remember a big computer somewhere that shows anyone who visits your website the pages we just built!) or you could first see how your website looks by showing it on your local network.

## Serving the blog

Now that you've built your blog website, you might not want to publish your site yet, but would maybe still like to know how your site looks if were to be uploaded to an actual server. For this, *Acid* has its own little machine that lets you do just that. You can tell *Acid* to run this machine on your site and it will start a server on your computer and let you visit [this address](https://localhost:1024). A feature is planned where you can dynamically change your site and *Acid* will automatically restart the local server to serve your site at the address previously mentioned. Please note that this address may change dynamically depending on your operating system.

## Publishing the blog

So, you've started *Acid*'s server machine and are happy with the built site. Now you want to upload your site to a server, so that you can share the link to your site. In this case, *Acid* has a small tutorial [here](https://github.com/iamtheblackunicorn/acid/blob/main/docs/DEPLOYMENT.markdown) that shows you exactly how to do that. GitHub offers anyone who has an account with them a free website.

## Conclusion

Congratulations! You now know exactly how *Acid* works front to back! I hope this explanation was as layman-friendly as possible and if you have questions or would like to contact me for no particular reason, you can do so [here](https://twitter.com/angeldustduke) If you want to build your own *Acid* site, you can check out a full tutorial [here](https://github.com/iamtheblackunicorn/acid/blob/main/docs/TUTORIAL.markdown). If you'd like to support me and buy me a coffee, you can send me some Ethereum tokens to [this address](0x5d7551C484bCd8769c57B4921a3FC80193b74Ce3
) (You'll have to hover over the link and copy the ETH address.).

## Links

If you'd like to check out the **Acid** project's main page, click [here](https://github.com/iamtheblackunicorn/acid) or if you'd like to see a live, deployed **Acid** site, click [here](https://blckunicorn.art/acid).
